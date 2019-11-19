const verifyUserRegInfo = require('./verifyUserRegInfo');
const verifyUserLoginInfo = require('./verifyUserLoginInfo');
const verifyJWT = require('./verifyJWT');
const verifyTripId = require('./verifyTripId');
const verifyTrip = require('./verifyTrip');
const verifyUser = require('./verifyUser');

module.exports = {
    verifyUserRegInfo,
    verifyUserLoginInfo,
    verifyJWT,
    verifyTripId,
    verifyTrip,
    verifyUser
};