const users = require('express').Router();
const { Trips, Users, convertNumToBoolean } = require('../../../utils');
const { verifyJWT, verifyUser, verifyProfileUpdate } = require('../../middleware/custom');

users.use(verifyJWT);

users.get('/:userId/trips', verifyUser, (req, res) => {
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

users.get('/:userId/profile', verifyUser, (req, res) => {
   const userId = req.params.userId;
   
   Users.getProfile(userId)
        .then(user => res.status(200).json(user))
        .catch(() => res.status(500).json({ error: 'There was an error getting the user profile' }));
});

users.put('/:userId/profile', verifyProfileUpdate, verifyUser, (req, res) => {
    const userId = req.params.userId;
    const updates = req.body;

    Users.updateProfile(updates, userId)
         .then(profile => res.status(200).json(profile))
         .catch(() => res.status({ error: 'There was an error updating the profile' }));
});

module.exports = users