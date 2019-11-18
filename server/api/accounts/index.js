const accounts = require('express').Router();

accounts.post('/login', (req, res) => {
    // Handle account login
});

accounts.post('/register', (req, res) => {
    // Hanlde account registration
});

module.exports = accounts;