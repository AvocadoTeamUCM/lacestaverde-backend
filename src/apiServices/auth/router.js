const express = require('@awaitjs/express');
const controller = require('./controller');
const response = require('./../../services/utils/response')

const router = express.Router();

router.postAsync('/login', function(req, res, next) {
    controller.login(req.body)
        .then(auth => {
            res.status(auth.status).send(auth.body)
        })
        .catch(next);
})

module.exports = router;