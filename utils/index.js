const generateJWT = require('./generateJWT');
const Users = require('./dbUsers');
const Trips = require('./dbTrips');
const convertNumToBoolean = require('./convertNumToBoolean');
const convertBooleanToNum = require('./convertBooleanToNum');

//Exports the utility functions to have them available
//where needed in the codebase

module.exports = {
    generateJWT,
    Users,
    Trips,
    convertNumToBoolean,
    convertBooleanToNum
};