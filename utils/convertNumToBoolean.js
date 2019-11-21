//Some fields in the database are integer values to track 0 and 1 for booleans
//This function is used to take the integer provided by the database and convert it
//into the correct boolean for providing to the client

module.exports = num => {
    return num === 1 ? true : false;
};