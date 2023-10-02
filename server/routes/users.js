const express = require('express');
const router = express();
const User = require('../models/users');
const bcrypt = require("bcrypt");
const Joi = require("joi");

// Login User
router.post('/api/loginUser', async (req, res) => {

    // --Wait for the server to find an email matching the email entered by the user
    const findUser = await User.findOne({
        email: req.body.email,
    })

    // --If a matching email was found, do the following
    if (findUser != null) {

        // ----Test if the password is the same as the one in the database
        if (findUser.password === req.body.password) {
            console.log("User Logged in");

            // ------Generate a JWT.
            const token = findUser.generateAuthToken();

            // ------Return the JWT to the Client folder (term3) so it can be saved to localStorage. This is done because you cannot save to localStorage in the server folder.
            res.status(200).send({ data: token, message: "logged in successfully" });
        } else {
            res.send("Email and password does not match");
            console.log("Email and password does not match");
        }

        // --If no matchign email is found, send the following email:
    } else {
        res.send("User not found");
        console.log("User not found");
    }

})

// Get All
// --Delete after testing is done
router.get('/api/getUsers', async (req, res) => {
    const AllUser = await User.find();
    res.json(AllUser);
});

// Create
router.post('/api/addUser/', async (req, res) => {
    const user = new User({

        username: req.body.username,
        email: req.body.email,
        password: req.body.password

    });
    await user.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
});

// add delete user

module.exports = router;