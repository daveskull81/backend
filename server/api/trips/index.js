const trips = require('express').Router();
const { 
        Trips, 
        convertNumToBoolean, 
        convertBooleanToNum 
      } = require('../../../utils');
const { 
        verifyJWT,
        verifyTripId,
        verifyTrip,
        verifyNoTripId
      } = require('../../middleware/custom');


trips.get('/:tripId', verifyJWT, verifyTripId, (req, res) => {
    const tripId = req.params.tripId;
    Trips.findById(tripId)
        .then(trip => {
            const convertedTrip = {
                ...trip,
                isPrivate: convertNumToBoolean(trip.isPrivate),
                isProfessional: convertNumToBoolean(trip.isProfessional)
            };
            res.status(200).json(convertedTrip);
        })
        .catch(() => res.status(500).json({ error: 'There was an error getting the trip from the database' }));
});

trips.put('/:tripId', verifyJWT, verifyNoTripId, verifyTripId, (req, res) => {
    const tripId = req.params.tripId;
    const updates = req.body;
    Trips.update(updates, tripId)
        .then(trip => {
            const convertedTrip = {
                ...trip,
                isPrivate: convertNumToBoolean(trip.isPrivate),
                isProfessional: convertNumToBoolean(trip.isProfessional)
            };
            res.status(200).json(convertedTrip);
        })
        .catch(() => res.status(500).json({ error: 'There was an error updating the trip in the database' }));
});

trips.delete('/:tripId', verifyJWT, verifyTripId, (req, res) => {
    const tripId = req.params.tripId;
    Trips.remove(tripId)
        .then(deletedTrip => {
            const convertedTrip = {
                ...deletedTrip,
                isPrivate: convertNumToBoolean(deletedTrip.isPrivate),
                isProfessional: convertNumToBoolean(deletedTrip.isProfessional)
            };
            res.status(200).json(convertedTrip);
        })
        .catch(() => res.status(500).json({ error: 'There was an error deleting the trip from the database' }));
});

trips.post('/', verifyJWT, verifyNoTripId, verifyTrip, (req, res) => {
    const tripToAdd = {
        ...req.body,
        isPrivate: convertBooleanToNum(req.body.isPrivate),
        isProfessional: convertBooleanToNum(req.body.isProfessional)
    };
    Trips.add(tripToAdd)
        .then(newTrip => {
            const convertedTrip = {
                ...newTrip,
                isPrivate: convertNumToBoolean(newTrip.isPrivate),
                isProfessional: convertNumToBoolean(newTrip.isProfessional)
            };
            res.status(200).json(convertedTrip);
        })
        .catch(() => res.status(500).json({ error: 'There was an error adding the trip to the database' }));
});

module.exports = trips;