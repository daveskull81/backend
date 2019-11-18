const users = require('express').Router();

users.get('/users/:userId/trips', (req, res) => {
    // Handle getting all trips for a single user
});

users.get('/users/:userId/profile', (req, res) => {
   // Handle getting a singel user's profile 
});

users.put('/users/:userId/profile', (req, res) => {
    // Handle updating a single user's profile
});

module.exports = users