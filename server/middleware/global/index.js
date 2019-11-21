const express  = require('express');
const helmet = require('helmet');
const cors = require('cors');
// const corsOptions = {
//     "origin": "*",
//     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//     "preflightContinue": true,
//     "optionsSuccessStatus": 204
//   };

//Global level middleware for the entire server is added here
//The variable being passed in is the server object
module.exports = server => {
    server.use(helmet());
    server.use(cors());
    server.use(express.json());
};