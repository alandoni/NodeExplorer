const bodyParser = require('body-parser');
const FileHelper = require('./file-helper');
const Promise = require('bluebird');
const path = require('path');
const winston = require('winston');

const logger = new winston.Logger({
    transports: [
		new (winston.transports.File)({
			name: 'info-log',
			filename: 'log-info.log',
			level: 'info',
			json: false,
			prettyPrint: true
		}),
		new (winston.transports.File)({
			name: 'info-error',
			filename: 'log-info.log',
			level: 'error',
			json: false,
			prettyPrint: true
		}),
		new (winston.transports.Console)({
			level: 'debug',
			timestamp : true,
			colorize: true,
			json: false,
			prettyPrint: true
		})
    ]
});

exports.set = function(app, prefix, firstPath) {
	return new Promise((resolve) => {
		
		app.use(bodyParser.urlencoded({extended: true}));
		app.use(bodyParser.json());
		app.use(bodyParser.text());

		if (prefix.length > 0 && prefix.charAt(0) !== '/') {
			prefix = '/' + prefix;
		}

		logger.debug('Initializing node-file-explorer on ' + prefix);

		app.get(prefix + '/', (request, response) => {
			const fileHelper = new FileHelper();
			logger.debug('Requesting initial folder ' + firstPath);
			fileHelper.getFilesOfFolder(firstPath).then((files) => {
				response.send(files);
			}).catch((error) => {
				logger.error(error);
				response.status(500).send(error);
			});
		});

		app.get(prefix + '/read/*', (request, response) => {
			const fileHelper = new FileHelper();
			logger.debug('Reading file: ' + JSON.stringify(request.params[0]));
			
			const p = fileHelper.join(firstPath, request.params[0]);

			response.setHeader('content-type', 'text/plain');

			fileHelper.readFileAsString(p).then((content) => {
				logger.debug('content: ' + content);
				return response.send(content);
			}).catch((error) => {
				logger.error(error);
				response.status(500).send(error);
			});
		});

		app.get(prefix + '/folder/*', (request, response) => {
			const fileHelper = new FileHelper();			
			const p = fileHelper.join(firstPath, request.params[0]);

			logger.debug('Requesting folders of folder ' + p);

			fileHelper.getFoldersOfFolder(p).then((content) => {
				return response.send(content);
			}).catch((error) => {
				logger.error(error);
				response.status(500).send(error);
			});
		});

		app.get(prefix + '/search/:string', (request, response) => {
			const fileHelper = new FileHelper();
			logger.debug('Searching in ./ folder for: ' + JSON.stringify(request.params.string));
			
			fileHelper.searchFileOrFolder(firstPath, request.params.string).then((files) => {
				return response.send(files);
			}).catch((error) => {
				logger.error(error);
				response.status(500).send(error);
			});
		});

		app.get(prefix + '/*', (request, response) => {
			const fileHelper = new FileHelper();
			
			const p = fileHelper.join(firstPath, request.params[0]);

			logger.debug('Requesting files: ' + p);

			fileHelper.isDirectory(p).then((isDirectory) => {
				if (isDirectory) {
					return fileHelper.getFilesOfFolder(p);
				}
				return [path.resolve(p)];
			}).then((files) => {
				if (files.length === 1 && files[0].length > 0) {
					logger.debug('Download file: ' + files[0]);
					response.sendFile(files[0]);
				}
				response.send(files);
			}).catch((error) => {
				logger.error(error);
				response.status(500).send(error);
			});
		});

		app.post(prefix + '/rename/*', (request, response) => {
			const fileHelper = new FileHelper();
			logger.debug('Renaming file: ' + JSON.stringify(request.params[0]));
			logger.debug('Renaming to: ' + JSON.stringify(request.body));

			const p = fileHelper.join(firstPath, request.params[0]);

			let name = request.body;
			if (request.body.name) {
				name = request.body.name;
			}

			fileHelper.renameFile(p, name).then((result) => {
				response.send(result);
			}).catch((error) => {
				logger.error(error);
				response.status(500).send(error);
			});
		});

		app.post(prefix + '/upload/*', (request, response) => {
			const fileHelper = new FileHelper();

			const p = fileHelper.join(firstPath, request.params[0]);
			logger.debug('Uploading file to: ' + p);

			fileHelper.upload(request, fileHelper.getPathOfFile(p), fileHelper.getFileName(p)).then((result) => {
				response.send(result);
			}).catch((error) => {
				logger.error(error);
				response.status(500).send(error);
			});
		});

		app.post(prefix + '/move/*', (request, response) => {
			const fileHelper = new FileHelper();
			logger.debug('Moving file: ' + JSON.stringify(request.params[0]));
			logger.debug('Moving to: ' + JSON.stringify(request.body));

			const p = fileHelper.join(firstPath, request.params[0]);

			let name = request.body;
			if (request.body.name) {
				name = request.body.name;
			}
			name = fileHelper.join(firstPath, name);

			fileHelper.moveFile(p, name).then((result) => {
				response.send(result);
			}).catch((error) => {
				logger.error(error);
				response.status(500).send(error);
			});
		});

		app.post(prefix + '/copy/*', (request, response) => {
			const fileHelper = new FileHelper();
			logger.debug('Copying file: ' + JSON.stringify(request.params[0]));
			logger.debug('Copying to: ' + JSON.stringify(request.body));

			const p = fileHelper.join(firstPath, request.params[0]);

			let name = request.body;
			if (request.body.name) {
				name = request.body.name;
			}
			name = fileHelper.join(firstPath, name);

			fileHelper.copyFile(p, name).then((result) => {
				response.send(result);
			}).catch((error) => {
				logger.error(error);
				response.status(500).send(error);
			});
		});

		app.post(prefix + '/folder/*', (request, response) => {
			const fileHelper = new FileHelper();

			logger.debug('Creating folder: ' + JSON.stringify(request.params[0]));

			const p = fileHelper.join(firstPath, request.params[0]);

			fileHelper.createFolder(p).then((result) => {
				logger.debug(result);
				response.send(result);
			}).catch((error) => {
				logger.error(error);
				response.status(500).send(error);
			});
		});

		app.post(prefix + '/*', (request, response) => {
			const fileHelper = new FileHelper();

			logger.debug('Creating file: ' + JSON.stringify(request.params[0]));
			logger.debug('Content of file: ' + JSON.stringify(request.body));

			const p = fileHelper.join(firstPath, request.params[0]);

			let content = request.body;
			if (request.body.content) {
				content = request.body.content;
			}

			fileHelper.createFile(p, content).then((result) => {
				logger.debug(result);
				response.send(result);
			}).catch((error) => {
				logger.error(error);
				response.status(500).send(error);
			});
		});

		app.delete(prefix + '/*', (request, response) => {
			const fileHelper = new FileHelper();
			logger.debug('Deleting file: ' + JSON.stringify(request.params[0]));
			const p = fileHelper.join(firstPath, request.params[0]);

			fileHelper.isDirectory(p).then((isDirectory) => {
				if (isDirectory) {
					return fileHelper.deleteFolder(p);
				}
				return fileHelper.deleteFile(p, request.body.name);
			}).then((result) => {
				response.send(result);
			}).catch((error) => {
				logger.error(error);
				response.status(500).send(error);
			});
		});

		resolve(true);
	});	
}