'use strict';
const express = require('express');

const app = express();

app.get('/',(req, res) => {
    res.send(`La Cesta Verde Server's running`);
});

module.exports =app;
