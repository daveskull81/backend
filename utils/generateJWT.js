const jwt = require('jsonwebtoken');

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