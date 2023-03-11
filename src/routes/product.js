const express = require('express');
const router = express.Router();
const product = require('./../apiServices/product/routes');

router.use('/product', product);

module.exports = router;