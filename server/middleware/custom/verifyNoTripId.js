//The trip id should not be present in POST or PUT requests to add a new trip or update an existing trip
//If it is present it will adjust the id of the trip and casue errors
//This returns an error instead of letting the request go through

module.exports = (req, res, next) => {
    const trip = req.body;
    
    if (trip.id) {
        res.status(400).json({ error: 'The id property cannot be included in trip object' });
    } else {
        next();
    };
};