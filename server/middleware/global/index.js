const express  = require('express');
const helmet = require('helmet');
const cors = require('cors');
const corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": true,
    "optionsSuccessStatus": 204
  };

module.exports = server => {
    server.use(helmet());
    server.use(cors(corsOptions));
    server.use(express.json());
};