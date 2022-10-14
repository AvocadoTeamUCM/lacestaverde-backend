'use strict';
const express = require('express');
const config = require("./src/config/config");
const db = require("./src/database/db");

db(config.mongodb.dbUrl);
 
const app = express();

app.get('/',(req, res) => {
    res.send(`La Cesta Verde Server's running`);
});

app.listen(config.port, (err) => {
    if(err) {
        console.log(`Can't open port ${config.port}`);
    } else{
        console.log(`Server running in ${config.host}:${config.port}`);
    }
})