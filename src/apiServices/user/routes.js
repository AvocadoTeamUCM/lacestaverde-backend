const express = require('@awaitjs/express');
const controller = require('./controller');
const multer = require('multer');
const path = require("path");
const { check, validationResult } = require('express-validator');
const response = require('./../../services/utils/response');
const { USER_CREATED, INTERNAL_ERROR} = require('../../constants/Constants');

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/users')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = "avatar" + '-' + Date.now()  
      cb(null, uniqueSuffix + '-' + file.originalname  )
    }
})
const upload = multer({ storage})

router.post('/upload-avatar/:userId',  upload.single('avatar'),(req, res) => {
    controller.upload(req.file, req.params.userId)
    .then((item) => {
        response.success(req, res,'', 201)
    })
    .catch((err) => {
        response.success(req, res)
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
   
});

router.postAsync('/', upload.single('avatar'),
    check("name", "The name is required").notEmpty(),
    check("email", "The email is required").isEmail(),
    (req, res)=> {
        const errors = validationResult(req);
        if(errors.isEmpty()) {
            controller.createUser(req)
                .then((user)=> {
                   user.status? 
                    res.status(user.status).send(user.body)
                    : 
                    response.success(req, res, USER_CREATED, 201)
                })
                .catch((err)=> {
                    response.error(req, res, err.mapped)
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
            // response.success(req, res, user, 200);
            res.status(200).send(user)
        }).catch((err) => {
            response.error(req, res, INTERNAL_ERROR);
        })
});

router.getAsync('/', (req, res)=> {
    controller.getUsers()
    .then((users) =>{
        // res.status(200).json(users);
        response.success(req, res, users, 200);
    }).catch((err)=>{
        response.error(req, res, INTERNAL_ERROR)
    })
});


module.exports = router;