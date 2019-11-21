//Some fields in the database are integer values to track 0 and 1 for booleans
//This function is used to take the boolean provided by the client and convert it
//into the correct number for storing in the database

module.exports = bool => {
    return bool === true ? 1 : 0;
};