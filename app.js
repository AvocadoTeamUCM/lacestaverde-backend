'use strict';
const express = require('express');
const userRoutes = require('./src/routes/user');
const categoryRoutes = require('./src/routes/category');
const businessRoutes = require('./src/routes/business');
const productRoutes = require('./src/routes/product');
const cors = require('cors');


const app = express();
app.use(cors());

// app.use(logger('dev'));
app.use(express.json());

app.use('/api/v1', userRoutes);
app.use('/api/v1', categoryRoutes);
app.use('/api/v1', businessRoutes);
app.use('/api/v1', productRoutes);

app.get('/',(req, res) => {
    res.send(`La Cesta Verde Server's running`);
});

module.exports =app;
