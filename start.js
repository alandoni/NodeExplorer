//Server
'use strict'

const express = require('express');
const routes = require('./index');
const cors = require('cors');

const app = express();
app.set('port', (process.env.PORT || 5001));

app.listen(app.get('port'));

app.isReady = function() {
	return true;
}

app.use(cors({
	origin: function (origin, callback) {
		callback(null, true); //bypass
	},
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
	preflightContinue: false,
	credentials: true,
	optionsSuccessStatus: 204,
	allowedHeaders: ['set-cookie', 'Content-Type', 'cookie', 'cookies', 'connect.sid'],
	exposedHeaders: ['set-cookie', 'Content-Type', 'cookie', 'cookies', 'connect.sid']
}));

app.options('*', cors());

routes.set(app, 'files', './').then((ready) => {
	const path = require('path');

	app.use(express.static(path.join(__dirname, 'dist')));

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'dist', 'index.html'));
	});

	return ready;
}).then(() => {
	app.isReady();
});

module.exports = app;