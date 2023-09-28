const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { path } = require('path');

require('dotenv/config')

const app = express()

app.use(cors({
    origin: 'http://localhost:3000'
}));

//middleware

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: '', //Collection Name
}).then(() => console.log("Connected to "))
    .catch((err) => {
        console.log("No Connection. Reason: " + err);
    });

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {console.log(`Server has started at port: ${PORT}`)});