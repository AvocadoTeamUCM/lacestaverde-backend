const express = require('express');
const router = express.Router();
const category = require('./../apiServices/category/routes');

router.use('/category', category);

module.exports = router;