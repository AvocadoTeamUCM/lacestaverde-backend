const express = require('@awaitjs/express');
const controller = require('./controller');
const { check, validationResult } = require('express-validator');

const router = express.Router();

router.postAsync('/',
    check("name", "The name is required").notEmpty(),
    check("email", "The email is required").isEmail(),
    (req, res)=> {
        const errors = validationResult(req);
        if(errors.isEmpty()) {
            controller.createUser(req.body)
                .then((user)=> {
                    res.status(201).send(user);
                })
                .catch((err)=> {
                    res.status(500).send(err);
                })
        }else {
            res.status(500).send(errors.mapped());
        }
    }
);

router.getAsync('/:id', (req, res)=> {
    const userId = req.params.id;
    controller.getUserById(userId)
        .then((user) => {
            res.status(200).json(user);
        }).catch((err) => {
            res.status(500).send('Internal Error');
        })
});

router.getAsync('/', (req, res)=> {
    controller.getUsers()
    .then((users) =>{
        res.status(200).json(users);
    }).catch((err)=>{
        res.status(500).send('Internal Error')
    })
})

module.exports = router;