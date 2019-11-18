module.exports = (req, res, next) => {
    if (!req.body.username || !req.body.password) {
        res.status(400).json({ error: 'Both username and password properties are required for login' });
    } else {
        next();
    };
};