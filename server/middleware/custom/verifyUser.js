const { Users } = require('../../../utils');

module.exports = (req, res, next) => {
    console.log(req.params);
    const userId = req.params.userId;
    
    Users.findByUserId(userId)
        .then(user => {
            if (!user) {
                console.log(user);
                res.status(404).json({ error: 'Invalid User Id. User Not Found.' });
            } else {
                next();
            }
        })
        .catch(err => console.log(err));
};