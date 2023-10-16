const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { path } = require('path');

// Route Uses
const questionRoute = require('./routes/question');
const userRoute = require('./routes/users');

require('dotenv/config')

const app = express()

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
    dbName: '', //Collection Name
}).then(() => console.log("Connected to Database"))
    .catch((err) => {
        console.log("No Connection. Reason: " + err);
    });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {console.log(`Server has started at port: ${PORT}`)});