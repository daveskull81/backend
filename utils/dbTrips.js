const db = require('../data/dbConfig');

function getUserTrips(userId) {
    return db('trips').select('id', 'title', 'description', 'isPrivate', 'isProfessional', 'image', 'duration', 'distance', 'date', 'triptype')
        .where('user_id', userId)
        .orderBy('date');
};

module.exports = {
    getUserTrips
};