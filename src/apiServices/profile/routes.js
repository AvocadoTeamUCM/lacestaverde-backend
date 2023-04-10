const express = require('@awaitjs/express');
const controller = require('./controller');

const router = express.Router();

router.getAsync('/userProfile/:userId', (req, res) => {
    controller.getProfileByUserId(req.params.userId)
    .then((profile) => {
        res.status(200).send(profile)
    })
    .catch((error) => {
        res.status(500).send("Internal error")
    })
})

module.exports = router;