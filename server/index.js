const express = require('express');
const globalMiddleware = require('./middleware/global');
const api = require('./api');

const server = express();

//Apply global middleware to server
//for things like helmet, cors, and json parsing, etc
globalMiddleware(server);

server.use('/api', api);

module.exports = server;