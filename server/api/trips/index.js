const trips = require('express').Router();
const { Trips } = require('../../../utils');
const { verifyJWT } = require('../../middleware/custom');

trips.use(verifyJWT);

trips.get('/:tripId', (req, res) => {
    const tripId = req.params.tripId;
    Trips.findById(tripId)
        .then(trip => res.status(200).json(trip))
        .catch(() => res.status(500).json({ error: 'There was an error getting the trip from the database' }));
});

trips.put('/:tripId', (req, res) => {
    const tripId = req.params.tripId;
    const updates = req.body;
    Trips.update(updates, tripId)
        .then(trip => res.status(200).json(trip))
        .catch(() => res.status(500).json({ error: 'There was an error updating the trip in the database' }));
});

trips.delete('/:tripId', (req, res) => {
    const tripId = req.params.tripId;
    Trips.remove(tripId)
        .then(deletedTrip => res.status(200).json(deletedTrip))
        .catch(() => res.status(500).json({ error: 'There was an error deleting the trip from the database' }));
});

trips.post('/', (req, res) => {
    const trip = req.body;
    Trips.add(trip)
        .then(newTrip => res.status(201).json(newTrip))
        .catch(() => res.status(500).json({ error: 'There was an error adding the trip to the database' }));
});

module.exports = trips;