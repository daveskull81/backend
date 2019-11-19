const { Users } = require('../../../utils');

module.exports = (req, res, next) => {
    const userId = req.params.userId;
    
    Users.findByUserId(userId)
        .then(user => {
            if (!user) {
                res.status(404).json({ error: 'Invalid User Id. User Not Found.' });
            } else {
                next();
            }
        })
        .catch(() => res.status(500).json({ error: 'There was an error finding the user' }));
};