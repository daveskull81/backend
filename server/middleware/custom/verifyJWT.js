const jwt = require('jsonwebtoken');

//JWT is confirmed to be from this system and the user id that was given to the token is
//added to the req object for verification in later middleware to be the same user id
//as is involved in the request
//This helps to ensure a token for one user can only make requests against resources 
//that user is the owner of

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        const tokenSecret = process.env.JWT_SECRET;
        jwt.verify(token, tokenSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ error: 'Invalid credentials' });
            } else {
                req.userIdInToken = decodedToken.userId;
                next();
            };
        });

    } else {
        res.status(400).json({ error: 'No credentials provided. Check the Authorization header has a token added to it' });
    }
};