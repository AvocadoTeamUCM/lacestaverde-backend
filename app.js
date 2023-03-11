'use strict';
const express = require('express');
const userRouters = require('./src/routes/user');
const categoryRouters = require('./src/routes/category');
const businessRouters = require('./src/routes/business');
const productRouters = require('./src/routes/product');


const app = express();

// app.use(logger('dev'));
app.use(express.json());

app.use('/api/v1', userRouters);
app.use('/api/v1', categoryRouters);
app.use('/api/v1', businessRouters);
app.use('/api/v1', productRouters);

app.get('/',(req, res) => {
    res.send(`La Cesta Verde Server's running`);
});

module.exports =app;
