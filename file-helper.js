const fs = require('fs');
const multer = require('multer');
const Promise = require('bluebird');
const pathHelper = require('path');
const File = require('./file');
const winston = require('winston');
const logger = new winston.Logger({
    transports: [
		new (winston.transports.File)({
			name: 'tests-log',
			filename: 'tests-info.log',
			level: 'debug',
			json: false
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

Promise.promisifyAll(fs);

module.exports = class FileHelper {
	
	getFilesOfFolder(path) {
		return fs.readdirAsync(path).then((files) => {
			return files.map((item, index) => {
				try {
					const fileProp = fs.statSync(pathHelper.join(path, item));
					return new File(path, item, fileProp.size, this.getExtensionOfFile(item), fileProp.mtime, fileProp.birthtime, fileProp.isFile());					
				} catch (ex) {
					logger.error(ex);
				}
			});
		});
	}

	getFoldersOfFolder(path) {
		return this.getFilesOfFolder(path).then((files) => {
			return files.filter((item, index) => {
				return !item.isFile;
			});
		});
	}

	searchFileOrFolder(path, fileName) {
		let foundFiles = [];
		return this._searchRecursively(foundFiles, path, fileName);
	}

	exists(path) {
		return fs.statAsync(path).then((stats) => {
			return true;	
		}).catch((error) => {
			return false;	
		});
	}

	createFolder(path, folder = undefined) {
		if (folder === undefined) {
			return fs.mkdirAsync(path);
		}
		return fs.mkdirAsync(pathHelper.join(path, folder));
	}

	upload(req, path, filename) {
		return new Promise((resolve, reject) => {
			logger.debug('Path: ' + path);
			logger.debug('File: ' + filename);
			this._getUploader(path, filename)(req, null, (error) => {
				if (error) {
					reject(new Error('getUploader: ' + error));
					return;
				}
				logger.debug('FileName: ' + req.file.filename);
				resolve(pathHelper.join(path, req.file.filename));
			});
		});
	}

	createFile(path, content) {
		return fs.writeFileAsync(path, content);
	}

	deleteFolder(path) {
		logger.debug('removing path ' + path);
		let deleted = false;
		return fs.rmdirAsync(path).then((result) => {
			logger.debug('removed path ' + path);
			deleted = true;
			return [path];
		}).catch((error) => {
			if (error.toString().indexOf('ENOTEMPTY') > -1) {
				return this._deleteFilesOfFolder(path);
			}
			logger.debug('error removing path ' + error);
			throw error;
		}).then((removedFiles) => {
			if (!deleted && removedFiles.indexOf(path) < 0) {
				removedFiles.push(path);
				return fs.rmdirAsync(path);
			}
			return removedFiles;
		}).catch((error) => {
			logger.error(error);
		});
	}

	deleteFile(path) {
		return fs.unlinkAsync(path);
	}

	renameFile(path1, path2) {
		const path = this.getPathOfFile(path1);
		return fs.renameAsync(path1, pathHelper.join(path, path2));
	}

	moveFile(path1, path2) {
		return fs.renameAsync(path1, path2);
	}

	copyFile(path1, path2) {
  		return this.exists(path1).then((fileExists) => {
			if (!fileExists) {
				throw new Error('File ' + path1 + ' doesn\'t exist');
			}
			return fs.readFileAsync(path1, 'utf-8');
		}).then((content) => {
			return fs.writeFileAsync(path2, content);
		});
	}

	readFileAsString(path) {
		return this.exists(path).then((fileExists) => {
			if (!fileExists) {
				throw new Error('File ' + path + ' doesn\'t exist');
			}
			return this.isDirectory(path);
		}).then((isDirectory) => {
			if (isDirectory) {
				throw new Error('The provided path (' + path + ') must be a file, not a directory');
			}
			return fs.readFileAsync(path, 'utf-8');
		});
	}

	getPathOfFile(filePath) {
		if (filePath === '.' + pathHelper.sep) {
			return filePath;
		}
		return filePath.substr(0, filePath.lastIndexOf(pathHelper.sep));
	}

	getFileName(filePath) {
		return filePath.substr(filePath.lastIndexOf(pathHelper.sep) + 1);
	}

	getExtensionOfFile(filePath) {
		return filePath.substr(filePath.lastIndexOf('.') + 1);
	}

	isDirectory(folder) {
		return fs.statAsync(folder).then((stats) => {
			return !stats.isFile();	
		}).catch((error) => {
			throw error;	
		});
	}

	join(...paths) {
		let str = '';
		for (let path of paths) {
			let innerPaths = path.split(/\/|\\/g);
			for (let innerPath of innerPaths) {
				if (innerPath.length === 0) {
					continue;
				}
				innerPath = innerPath.replace(/\\/g, '');	
				innerPath = innerPath.replace(/\//g, '');
				str += innerPath + pathHelper.sep;
			}
		}
		if (str !== '.' + pathHelper.sep) {
			str = str.substr(0, str.length - 1);
		}
		return str;
	}

	_getUploader(path, filename) {
		return multer({storage: this._getStorage(path, filename)}).single('file');		
	}

	_getStorage(path, filename) {
		return multer.diskStorage({ //multers disk storage settings
			destination: function (req, file, next) {
				next(null, path);
			},

			filename: (req, file, next) => {
				this._createPathIfDoesntExist(path).then(() => {	
					next(null, filename);
				}).catch((error) => {
					throw new Error('getStorage: ' + error);
				});
			}
		});
	}

	_createPathIfDoesntExist(folderPath) {
		var allFolders = null;
		let folder = '';

		logger.debug('Creating folders ' + folderPath);

		if (folderPath.indexOf('.' + pathHelper.sep) >= 0) {
			allFolders = folderPath.substring(2).split(pathHelper.sep);
			folder = '.' + pathHelper.sep + allFolders[0];
		} else {
			allFolders = folderPath.split(pathHelper.sep);
			folder = allFolders[0];
		}
		return this._createFolders(allFolders, folder, 0);
	}

	_createFolders(allFolders, folder, index) {
		return this.createFolder(folder).then((dir) => {
			return this._nextFolder(index, allFolders, folder);
		}).catch((error) => {
			if (error.toString().indexOf('EEXIST') > 0) {
				return this._nextFolder(index, allFolders, folder);
			}
			throw new Error('Error creating folders: ' + error);
		});
	}

	_nextFolder(index, allFolders, folder) {
		index++;
		if (index == allFolders.length) {
			return folder;
		}
		const newFolder = pathHelper.join(folder, allFolders[index]);
		return this._createFolders(allFolders, newFolder, index);
	}

	_searchRecursively(foundFiles, path, fileName) {
		return this.getFilesOfFolder(path).then((files) => {
			let dirs = []
			for (const fileIndex in files) {
				const file = files[fileIndex];
				if (file.name.indexOf(fileName) > 0) {
					foundFiles.push(file);
				}
				if (!file.isFile) {
					dirs.push(file);
				}
			}

			if (dirs.length > 0) {
				return this._searchAllFoldersOfFolder(foundFiles, 0, dirs, fileName);
			}
			return foundFiles;
		}).then((files) => {
			return files;
		}).catch((ex) => {
			logger.error(ex);
		});
	}

	_searchAllFoldersOfFolder(foundFiles, index, dirs, fileName) {
		const p = pathHelper.join(dirs[index].path, dirs[index].name);

		return this._searchRecursively(foundFiles, p, fileName).then((files) => {
			if (index < dirs.length - 1) {
				index += 1;
				return this._searchAllFoldersOfFolder(foundFiles, index, dirs, fileName);
			}
			return foundFiles;
		});
	}

	_deleteFilesOfFolder(path) {
		let removedFiles = [];
		return this.getFilesOfFolder(path).then((files) => {
			let dirs = [];
			for (const index in files) {
				const file = files[index];
				if (file.isFile) {
					logger.debug('delete file: ' + path + pathHelper.sep + file.name);
					fs.unlinkSync(pathHelper.join(path, file.name));
					removedFiles.push(pathHelper.join(path, file.name));
				} else {
					dirs.push(file);
				}
			}

			if (dirs.length > 0) {
				return this._deleteFilesOfFolderRecursively(removedFiles, dirs, 0);
			}

			if (files.length == 0 || removedFiles.length == files.length) {
				logger.debug('delete path: ' + path);				
				fs.rmdirSync(path);
				removedFiles.push(path);
			}
			return removedFiles;
		}).then((removed) => {
			return removed;	
		});
	}

	_deleteFilesOfFolderRecursively(removedFiles, dirs, index) {
		const dir = dirs[index];
		logger.debug('delete content of path: ' + dir.path + pathHelper.sep + dir.name);
		return this._deleteFilesOfFolder(pathHelper.join(dir.path, dir.name)).then((files) => {
			for (let file of files) {
				removedFiles.push(file);
			}
			if (index < dirs.length - 1) {
				index += 1;
				return this._deleteFilesOfFolderRecursively(removedFiles, dirs, index);
			}
			return removedFiles;
		});
	}
}