//The profile object used in requests cannot have the id or username properties
//It is not designed for those to be editable values

module.exports = (req, res, next) => {
    const profile = req.body;

    if (profile.id || profile.username) {
        res.status(400).json({ error: 'Profile object cannot contain either id or username. These fields cannot be updated.' });
    } else {
        next();
    };
};