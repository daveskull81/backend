require('dotenv').config();

const server = require('./api');

const port = process.env.PORT || 3000;

server.listen(port);