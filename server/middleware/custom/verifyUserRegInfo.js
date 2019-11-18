module.exports = (req, res, next) => {
    if (!req.body.username || !req.body.password) {
        res.status(400).json({ error: 'Include both username and password properties with user registration' });
    } else {
        next();
    };
};