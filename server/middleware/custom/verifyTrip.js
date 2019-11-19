module.exports = (req, res, next) => {
    const trip = req.body;

    if (!trip.title || !trip.user_id) {
        res.status(400).json({ error: 'The trip is missing one of the required fields: title & user_id' });
    } else {
        next();
    }
};