const express = require('express');
const router = express.Router();
const authRoutes = require('./../apiServices/auth/router');

router.use('/', authRoutes);

module.exports = router;