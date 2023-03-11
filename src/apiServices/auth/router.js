const express = require('@awaitjs/express');
const controller = require('./controller');
const response = require('./../../services/utils/response')

const router = express.Router();

router.postAsync('/login', function(req, res, next) {
    Controller.login(req.body.username, req.body.password)
        .then(token => {
            response.success(req, res, token, 200);
        })
        .catch(next);
})

module.exports = router;