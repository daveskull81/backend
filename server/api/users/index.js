const users = require('express').Router();
const { Trips } = require('../../../utils');
const { verifyJWT } = require('../../middleware/custom');
const { convertNumToBoolean } = require('../../../utils');

users.get('/:userId/trips', verifyJWT, (req, res) => {
    const userId = req.params.userId;

    Trips.getUserTrips(userId)
        .then(trips => {
            const convertedTrips = trips.map(trip => {
                return {
                    ...trip,
                    isPrivate: convertNumToBoolean(trip.isPrivate),
                    isProfessional: convertNumToBoolean(trip.isProfessional)
                };
            });
            res.status(200).json(convertedTrips);
        })
        .catch(() => res.status(500).json({ error: 'There was an error getting the trips for the user' }));
});

users.get('/:userId/profile', (req, res) => {
   // Handle getting a singel user's profile 
});

users.put('/:userId/profile', (req, res) => {
    // Handle updating a single user's profile
});

module.exports = users