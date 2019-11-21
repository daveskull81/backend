//Checks if user id in request is the same as the user id in the token to keep
//another user's token from being used to manage data of the user

module.exports = (req, res, next) => {
    if (req.userIdInToken === Number(req.params.userId)) {
        next();
    } else {
        res.status(401).json({ error: 'Access to this user data is unauthorized' });
    };
};