const express = require('express');
const router = express.Router();
const business = require('./../apiServices/business/routes');
const middleware = require('./../middleware/auth/auth')

router.use('/business', business);

module.exports = router;