const express = require('express');
const globalMiddleware = require('./middleware/global');
const apiRoute = require('./api');

const server = express();

globalMiddleware(server);

server.use('/api', apiRoute);

module.exports = server;