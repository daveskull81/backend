const db = require('../data/dbConfig');

function getUserTrips(userId) {
    return db('trips').select('id', 'title', 'description', 'isPrivate', 'isProfessional', 'image', 'duration', 'distance', 'date', 'tripType')
        .where('user_id', userId)
        .orderBy('date');
};

function getById(tripId) {

};

function update(tripId) {

};

function deleteTrip(tripId) {

};

function add(trip) {

};

module.exports = {
    getUserTrips,
    getById,
    update,
    deleteTrip,
    add
};