module.exports = (req, res, next) => {
    if (req.userIdInToken === Number(req.params.userId)) {
        next();
    } else {
        res.status(401).json({ error: 'Access to this user data is unauthorized' });
    };
};