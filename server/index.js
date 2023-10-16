const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { path } = require('path');

// Route Uses
const questionRoute = require('./routes/question');
const userRoute = require('./routes/users');

require('dotenv/config')

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.use(cors({
    origin: 'http://localhost:3000'
}));

//middleware
// makes the json data work
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Must be below the express
app.use(questionRoute);
app.use(userRoute);

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'DV200T4', //Collection Name
}).then(() => console.log("Connected to Database"))
    .catch((err) => {
        console.log("No Connection. Reason: " + err);
    });

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {console.log(`Server has started at port: ${PORT}`)});