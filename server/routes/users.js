const router = require('express').Router();
const {User, valid} = require('../models/users');
const bcrypt = require("bcrypt");
const Joi = require("joi");

// Get All
// --Delete after testing is done
router.get('/api/getUsers', async (req, res) => {
    const AllUser = await User.find();
    res.json(AllUser);
});

// Get Single User
router.get('/api/getUser/:id', async (req, res) => {
    const findSpecUser = await User.findById(req.params.id)
    res.json(findSpecUser)
});

// Create

router.post('/api/createUser', async (req, res) => {
    try {
        console.log("Data that was received from the client side:");
        console.log(req.body);
        
        // TODO This commented out code below was causing an instant error - when i commented it out, the data could work and a user was created
        // const {error} = valid(req.body);

        // if (error) {
        //     return res.status(400).send({message: error.details[0].message});
        // };

        const user = await User.findOne({email: req.body.email});

        if (user) {
            return res.status(409).send({message: "An account with that email already exists"});
        }
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new User({...req.body, password: hashPassword}).save();
        res.status(201).send({message: "User created successfully!! Log In"});
    } catch (error) {
        res.status(500).send({message: "Internal Servor Error"});
    }
});

// add delete user
router.delete('/api/User/:id', async (req, res) => {
    const delSpecUser = await User.findByIdAndDelete(req.params.id)
    res.json(delSpecUser)
});

//update User
router.put('/api/User/:id', async (req, res) => {
    const upSpecUser = await User.findByIdAndUpdate(req.params.id)
    res.json(upSpecUser)
});

module.exports = router;