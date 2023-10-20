const router = require('express').Router();
const {User, validate} = require('../models/users');
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

        // --If no matching email is found, send the following email:
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

// Get Single User
router.get('/api/getUser/:id', async (req, res) => {
    const findSpecUser = await User.findById(req.params.id)
    res.json(findSpecUser)
});

// Create

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const {error} = validate(req.body);
        if (error) {
            return res.status(400).send({message: error.details[0].message});
        };
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

//Update a user
router.put('/api/upUser/:id', async (req, res) => {
    const upSpecUser = await User.findByIdAndUpdate(req.params.id)
    res.json(upSpecUser)
});


//Delete a clothing item
router.delete('/api/delUser/:id', async (req, res) => {
    const delSpecUser = await User.findByIdAndDelete(req.params.id)
    res.json(delSpecUser)
});

module.exports = router;

// {
// 	"username": "Lyca",
// 	"email": "lyca@email.com",
// 	"password": "password2"
// },
// {
// 	"username": "James",
// 	"email": "james@email.com",
// 	"password": "password3"
// },
// {
// 	"username": "Mark",
// 	"email": "mark@email.com",
// 	"password": "password4"
// },
// {
// 	"username": "Green",
// 	"email": "green@email.com",
// 	"password": "password5"
// }