const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        const tokenSecret = process.env.JWT_SECRET;
        jwt.verify(token, tokenSecret, err => {
            if (err) {
                res.status(401).json({ error: 'Invalid credentials' });
            } else {
                next();
            };
        });

    } else {
        res.status(400).json({ error: 'No credentials provided. Check the Authorization header has a token added to it' });
    }
};