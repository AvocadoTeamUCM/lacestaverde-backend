'use strict';
const express = require('express');

const loginRout = require('./src/routes/login');
const userRoutes = require('./src/routes/user');
const categoryRoutes = require('./src/routes/category');
const businessRoutes = require('./src/routes/business');
const productRoutes = require('./src/routes/product');
const profileRoutes = require('./src/routes/profile');
const cors = require('cors');
const API = '/api/v1';
const middleware = require('./src/middleware/auth/auth')

const app = express();
app.use(cors());

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(API, loginRout);
app.use(API, profileRoutes);
app.use(API, userRoutes);
app.use(API, businessRoutes);
app.use(API, productRoutes);
app.use(API, categoryRoutes);

app.get('/',(req, res) => {
    res.send(`La Cesta Verde Server's running`);
});

module.exports =app;
