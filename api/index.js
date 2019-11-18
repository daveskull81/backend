const express = require('express');
const globalMiddleware = require('./middleware/global');

const server = express();

globalMiddleware(server);

module.exports = server;