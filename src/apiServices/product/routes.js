const express = require('@awaitjs/express');
const controller = require('./controller');
const { check, validationResult } = require('express-validator');

const router = express.Router();

router.postAsync('/',
    check("name", "The name is required").notEmpty(),
    check("price", "The name is required").notEmpty(),
    check("businessId", "The name is required").notEmpty(),
    check("categoryId", "The name is required").notEmpty(),
    (req, res)=> {
        const errors = validationResult(req);
        if(errors.isEmpty()) {
            controller.createProduct(req.body)
                .then((product)=> {
                    res.status(201).send('The product has been created successfully');
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
    const productId = req.params.id;
    controller.getProductById(productId)
        .then((product) => {
            res.status(200).json(product);
        }).catch((err) => {
            res.status(500).send('Internal Error');
        })
});

router.getAsync('/', (req, res)=> {
    controller.getProduct()
    .then((products) =>{
        res.status(200).json(products);
    }).catch((err)=>{
        res.status(500).send('Internal Error')
    })
})

module.exports = router;