const api = require('express').Router();
const accounts = require('./accounts');
const trips = require('./trips');
const users = require('./users');

//Main entry point to the API where each router handles the
//appropriate resource

api.get('/', (req, res) => {
    res.status(200).json({ status: 'It\'s Alive!' });
});

api.use('/accounts', accounts);

api.use('/trips', trips);

api.use('/users', users);

module.exports = api;