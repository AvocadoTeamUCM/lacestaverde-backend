const express = require('@awaitjs/express');

const controller = require('./controller');
const { check, validationResult } = require('express-validator');
const multer = require('multer');
const path = require("path");
const response = require('./../../services/utils/response');

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/business')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = "business" + '-' + Date.now()  
      cb(null, uniqueSuffix + '-' + file.originalname  )
    }
})
const upload = multer({ storage})

router.post('/upload-file/:businessId',  upload.single('file'),(req, res) => {
    controller.upload(req.file, req.params.businessId)
    .then((item) => {
        response.success(req, res, 201)
    })
    .catch((err) => {
        response.success(req, res)
    })
});

router.getAsync('/getFile/:filename', (req, res ) => {
    const file = req.params.filename;
    controller.getFile(file)
    .then((item)=> {
        return res.status(200).sendFile(path.resolve(item));
    }).catch(err=> {
        response.error(req, res)
    })
   
});

router.postAsync('/', upload.single('file'),
    check("name", "The name is required").notEmpty(),
    check("description", "The name is required").notEmpty(),
    check("address", "The name is required").notEmpty(),
    check("userId", "The name is required").notEmpty(),
    (req, res,next)=> {
        const errors = validationResult(req);
        if(errors.isEmpty()) {
            controller.createBusiness(req)
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

router.getAsync('/', (req, res,next)=> {
    controller.getBusiness()
    .then((business) =>{
        
        res.status(200).json(business);
    }).catch((err)=>{
        res.status(500).send('Internal Error')
    })
})

router.getAsync('/:id', (req, res)=> {
    const businessId = req.params.id;
    controller.getBusinessById(businessId)
        .then((business) => {
            res.status(200).json(business);
        }).catch((err) => {
            res.status(500).send('Internal Error');
        })
});
router.getAsync('/byUserId/:id', (req, res)=> {
    const userId = req.params.id;
    controller.getBusinessByUserId(userId)
        .then((business) => {
            res.status(200).json(business);
        }).catch((err) => {
            res.status(500).send('Internal Error');
        })
});

module.exports = router;