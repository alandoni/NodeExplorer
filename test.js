'use strict'

const fs = require('fs');

const chai = require('chai');
const chaiHttp = require('chai-http');
const winston = require('winston');

const start = require('./start');

chai.should();
chai.use(chaiHttp);
const agent = chai.request.agent(start);

const prefix = '/files';

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

describe('API TEST', () => {

	before((done) => {
		logger.debug('Before');
		done();
    });

	describe('GET First Path', () => {
        it('it should GET all the files in /', (done) => {
            agent.get(prefix + '/').then((res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            }).catch((error) => {
                done(error);
            });
        });
    });

	describe('GET Other Path', () => {
        it('it should GET all the files in /node_modules/accepts', (done) => {
            agent.get(prefix + '/node_modules/accepts').then((res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            }).catch((error) => {
                done(error);
            });
        });
    });

	describe('GET a File', () => {
        it('it should GET the file test.js', (done) => {
            agent.get(prefix + '/test.js').then((res) => {
                res.should.have.status(200);
                done();
            }).catch((error) => {
                done(error);
            });
        });
    });

	describe('GET an inner File', () => {
        it('it should GET the file /node_modules/accepts/index.js', (done) => {
            agent.get(prefix + '/node_modules/accepts/index.js').then((res) => {
                res.should.have.status(200);
				logger.debug(res.File);
                done();
            }).catch((error) => {
                done(error);
            });
        });
    });

    describe('SEARCH File', () => {
        it('it should GET all files name index.js', (done) => {
            agent.get(prefix + '/search/index.js').then((res) => {
                res.should.have.status(200);
                done();
            }).catch((error) => {
                logger.error(error);
                done(error);
            });
        });
    });

	describe('CREATE an inner File', () => {
        it('it should CREATE the file /test-folder/test1', (done) => {
            agent.post(prefix + '/folder/test-folder').then((res) => {
                return agent.post(prefix + '/test-folder/test1').set('content-type', 'text/plain').send('Test');
            }).then((res) => {
                res.should.have.status(200);
				logger.debug(res.body);
                done();
            }).catch((error) => {
                done(error);
            });
        });
    });

    describe('READ an inner File', () => {
        it('it should READ the file /test-folder/test1', (done) => {
            agent.get(prefix + '/read/test-folder/test1').set('content-type', 'text/plain').then((res) => {
                res.should.have.status(200);
                logger.debug('Response Type: ' + res.type);
				logger.debug('Response: ' + JSON.stringify(res.body));
                done();
            }).catch((error) => {
                logger.debug(error);
                done(error);
            });
        });
    });

    describe('UPLOAD a File', () => {
        it('it should UPLOAD the file /upload/uploads/file', (done) => {
            agent.post(prefix + '/upload/uploads/files/file.js').attach('file', fs.readFileSync('file.js'), 'file.js').then((res) => {
                res.should.have.status(200);
                done();
            }).catch((error) => {
                logger.debug(error);
                done(error);
            });
        });
    });

    describe('DELETE a Folder with files', () => {
        it('it should DELETE the folder /uploads', (done) => {
            agent.delete(prefix + '/uploads').then((res) => {
                res.should.have.status(200);
                done();
            }).catch((error) => {
                done(error);
            });
        });
    });

	describe('RENAME a File', () => {
        it('it should RENAME the file /tests-info.log', (done) => {
            agent.post(prefix + '/rename/tests-info.log').send({'name': 'tests.log'}).then((res) => {
                res.should.have.status(200);
				return agent.post(prefix + '/rename/tests.log').send({'name':'tests-info.log'});
			}).then((res) => {
				res.should.have.status(200);
                done();
            }).catch((error) => {
                done(error);
            });
        });
    });

	describe('RENAME an inner File', () => {
        it('it should RENAME the file /test-folder/test1', (done) => {
            agent.post(prefix + '/rename/test-folder/test1').send({'name': 'test.log'}).then((res) => {
                res.should.have.status(200);
				return agent.post(prefix + '/rename/test-folder/test.log').send({'name': 'test1'});
			}).then((res) => {
                done();
            }).catch((error) => {
                done(error);
            });
        });
    });

	describe('DELETE an inner File', () => {
        it('it should DELETE the file /test-folder/test1', (done) => {
            agent.delete(prefix + '/test-folder/test1').then((res) => {
                res.should.have.status(200);
                done();
            }).catch((error) => {
                done(error);
            });
        });
    });

    describe('CREATE a Folder and after file', () => {
        it('it should CREATE the folder /test-folder1', (done) => {
            agent.post(prefix + '/folder/test-folder1').then((res) => {
                res.should.have.status(200);
                return agent.post(prefix + '/test-folder1/test1').set('content-type', 'text/plain').send('Test');
            }).then((res) => {
                res.should.have.status(200);
                done();
            }).catch((error) => {
                done(error);
            });
        });
    });

    describe('DELETE a Folder with files', () => {
        it('it should DELETE the folder /test-folder1', (done) => {
            agent.delete(prefix + '/test-folder1').then((res) => {
                res.should.have.status(200);
                done();
            }).catch((error) => {
                done(error);
            });
        });
    });

    describe('DELETE a Folder without files', () => {
        it('it should DELETE the folder /test-folder', (done) => {
            agent.delete(prefix + '/test-folder').then((res) => {
                res.should.have.status(200);
                done();
            }).catch((error) => {
                done(error);
            });
        });
    });

    describe('DELETE the log Files', () => {
        it('it should DELETE the log files', (done) => {
            agent.delete(prefix + '/tests-info.log').then((res) => {
                res.should.have.status(200);
                done();
            }).catch((error) => {
                done(error);
            });
        });
    });
});