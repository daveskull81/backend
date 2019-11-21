const db = require('../data/dbConfig');

//DB methods for working with the Users table and providing CRUD actions


async function add(user) {
    const [ id ] = await db('users').insert(user, 'id');

    return findByUserId(id);
};

function findByUserId(userId) {
    return db('users').select('id', 'username', 'title', 'tagline', 'guideSpecialty', 'age', 'yearsExperience')
        .where('id', userId)
        .first();
};

function findByUserNameForLogin(userName) {
    return db('users').select('id', 'username', 'password')
        .where('username', userName)
        .first();
};

function getProfile(userId) {
    return findByUserId(userId);
};

function updateProfile(updates, userId) {
    return db('users')
        .where('id', userId)
        .update(updates)
        .then(() => findByUserId(userId));
};

module.exports = {
    add,
    findByUserId,
    findByUserNameForLogin,
    getProfile,
    updateProfile
};