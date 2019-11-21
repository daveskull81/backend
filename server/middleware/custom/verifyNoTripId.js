module.exports = (req, res, next) => {
    const trip = req.body;
    
    if (trip.id) {
        res.status(400).json({ error: 'The id property cannot be included in trip object' });
    } else {
        next();
    };
};