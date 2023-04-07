const express = require('@awaitjs/express');
const router = express.Router();
const profileRoutes = require('./../apiServices/profile/routes')

router.use('/profile', profileRoutes);

module.exports = router;