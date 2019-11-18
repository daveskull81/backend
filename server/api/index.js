const api = require('express').Router();
const accounts = require('./accounts');
const trips = require('./trips');
const users = require('./users');

api.get('/', (req, res) => {
    res.status(200).json({ status: 'It\'s Alive!' });
});

api.use('/accounts', accounts);

api.use('/trips', trips);

api.use('/users', users);

module.exports = api;