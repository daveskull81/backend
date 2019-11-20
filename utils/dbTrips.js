const db = require('../data/dbConfig');

function getUserTrips(userId) {
    return db('trips').select('id', 'title', 'description', 'isPrivate', 'isProfessional', 'image', 'duration', 'distance', 'date', 'tripType', 'user_id')
        .where('user_id', userId)
        .orderBy('date');
};

function findById(tripId) {
    return db('trips').select('id', 'title', 'description', 'isPrivate', 'isProfessional', 'image', 'duration', 'distance', 'date', 'tripType', 'user_id')
        .where('id', tripId)
        .first();
};

function update(updates, tripId) {
    return db('trips')
        .where('id', tripId)
        .update(updates)
        .then(() => findById(tripId));
};

async function remove(tripId) {
    const trip = await findById(tripId);

    return db('trips')
        .where('id', tripId)
        .del()
        .then(() => trip);
};

async function add(trip) {
    const [ id ] = await db('trips').insert(trip, 'id');

    return findById(id);
};

module.exports = {
    getUserTrips,
    findById,
    update,
    remove,
    add
};