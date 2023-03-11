const express = require('express');
const router = express.Router();
const business = require('./../apiServices/business/routes');

router.use('/business', business);

module.exports = router;