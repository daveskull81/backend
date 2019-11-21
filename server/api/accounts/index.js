const accounts = require('express').Router();
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../../../utils');
const { Users } = require('../../../utils');
const { verifyUserRegInfo } = require('../../middleware/custom');
const { verifyUserLoginInfo } = require('../../middleware/custom');

//Route to log a user in and comapre their password to the hashed
//version in the database
//JWT is generated with user id for later requests


accounts.post('/login', verifyUserLoginInfo, (req, res) => {
    const { username, password } = req.body;

    Users.findByUserNameForLogin(username)
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateJWT(user.id);
                res.status(200).json({ userId: user.id, username: user.username, token });
            } else {
                res.status(401).json({ error: 'Invalid credentials. Check the username and password to ensure they are correct' });
            }
        })
        .catch(() => res.status(500).json({ error: 'There was an error finding the user in the database' }));
});

//Route to register a new user with the application
//and store a hased version of their provided passwrd to the database

accounts.post('/register', verifyUserRegInfo, (req, res) => {
    const user = req.body;
    const hashedPassword = bcrypt.hashSync(user.password, 10);
    user.password = hashedPassword;

    Users.add(user)
        .then(savedUser => {
            const token = generateJWT(savedUser.id);
            res.status(201).json({ user: savedUser, token });
        })
        .catch(() => res.status(500).json({ error: 'There was an error saving the user to the database' }));
});

module.exports = accounts;