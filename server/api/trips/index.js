const trips = require('express').Router();

trips.get('/trips/:tripId', (req, res) => {
    // Handle getting data for a single trip
});

trips.put('/trips/:tripId', (req, res) => {
    // Handle updating data for a single trip
});

trips.delete('/trips/:tripId', (req, res) => {
    // Handle deleting a single trip
});

trips.post('/trips', (req, res) => {
    // Handle creating a new trip
});

module.exports = trips;