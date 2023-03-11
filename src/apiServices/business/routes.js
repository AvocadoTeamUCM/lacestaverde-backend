const express = require('@awaitjs/express');
const controller = require('./controller');
const { check, validationResult } = require('express-validator');

const router = express.Router();

router.postAsync('/',
    check("name", "The name is required").notEmpty(),
    check("description", "The name is required").notEmpty(),
    check("address", "The name is required").notEmpty(),
    check("userId", "The name is required").notEmpty(),
    (req, res)=> {
        const errors = validationResult(req);
        if(errors.isEmpty()) {
            controller.createBusiness(req.body)
                .then((business)=> {
                    res.status(201).send('The business has been created successfully');
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
    const businessId = req.params.id;
    controller.getBusinessById(businessId)
        .then((business) => {
            res.status(200).json(business);
        }).catch((err) => {
            res.status(500).send('Internal Error');
        })
});

router.getAsync('/', (req, res)=> {
    controller.getBusiness()
    .then((business) =>{
        res.status(200).json(business);
    }).catch((err)=>{
        res.status(500).send('Internal Error')
    })
})

module.exports = router;