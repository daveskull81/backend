const jwt = require('jsonwebtoken');

//Generation of json web tokens for the
//authentication process on protected routes

module.exports = (userId) => {
    const payload = {
        userId
    };
    const secret = process.env.JWT_SECRET || 'secret';
    const options = {
        expiresIn: '7d'
    };
    return jwt.sign(payload, secret, options);
};