const express = require('@awaitjs/express');
const controller = require('./controller');
const { check, validationResult } = require('express-validator');

const router = express.Router();

router.postAsync('/', check("name", "The name is required").notEmpty(),
    (req, res)=>{
        const errors = validationResult(req);
        const categoryName = req.body.name;
        if(errors.isEmpty()) {
            controller.createCategory(categoryName)
            .then(() =>{
                res.status(200).send('The product category has been created successfully')
            })
            .catch((err)=> {
                res.status(500).send(err);
            })
        }
    else {
        res.status(500).send(errors.mapped());
    }
})

router.getAsync('/:id', (req, res)=> {
    const categoryId = req.params.id;
    controller.getCategoryById(categoryId)
        .then((category) => {
            res.status(200).json(category);
        }).catch((err) => {
            res.status(500).send('Internal Error');
        })
});

router.getAsync('/', (req, res)=> {
    controller.getCategories()
    .then((categories) =>{
        res.status(200).json(categories);
    }).catch((err)=>{
        res.status(500).send('Internal Error')
    })
})

module.exports = router;