const express = require('@awaitjs/express');
const controller = require('./controller');
const response = require('./../../services/utils/response')
const { PRODUCT_CREATED, INTERNAL_ERROR} = require('./../../constants/Constants')
const { check, validationResult } = require('express-validator');
const multer = require('multer');
const path = require("path");
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/products')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = "product" + '-' + Date.now()  
      cb(null, uniqueSuffix + '-' + file.originalname  )
    }
})

const upload = multer({ storage})
  
router.post('/upload-image/:productId',  upload.single('file'),(req, res) => {
    controller.upload(req.file, req.params.productId)
    .then((item) => {

        response.success(req, res, 201)
    })
    .catch((err) => {
        res.status(500).send(err)
    })
});

router.getAsync('/getFile/:filename', (req, res ) => {
    const file = req.params.filename;
    controller.getFile(file)
    .then((item)=> {
        return res.sendFile(path.resolve(item));
    }).catch(err=> {
        response.error(req, res)
    })
   
})

router.postAsync('/', upload.single('file'),
    check("name", "The name is required").notEmpty(),
    check("price", "The name is required").notEmpty(),
    check("businessId", "The name is required").notEmpty(),
    check("categoryId", "The name is required").notEmpty(),
    (req, res)=> {
        const errors = validationResult(req);
        if(errors.isEmpty()) {
            controller.createProduct(req)
                .then((product)=> {
                    response.success(req, res, PRODUCT_CREATED, 201);
                })
                .catch((err)=> {
                    response.error(req, res, INTERNAL_ERROR)
                })
        }else {
            res.status(500).send(errors.mapped());
        }
    }
);

router.getAsync('/', (req, res)=> {
    controller.getProduct()
    .then((products) =>{
        res.status(200).json(products);
    }).catch((err)=>{
        res.status(500).send('Internal Error')
    })
});

router.postAsync('/nutritionalInfo', (req, res) =>{
    const product = req.body.productName;
    controller.getNutritionalInfoProduct(product)
    .then((info)=>{
        res.status(200).send(info)
    }).catch((err)=>{
        res.status(500).send(INTERNAL_ERROR)
    })
});

router.getAsync('/:id', (req, res)=> {
    const productId = req.params.id;
    controller.getProductById(productId)
        .then((product) => {
           res.status(200).json(product);
        //    response.success(req, res, product, 200)
        }).catch((err) => {
            res.status(500).send('Internal Error');
        })
});

module.exports = router;