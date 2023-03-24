const Model = require('./model');
const response = require('./../../services/utils/response');
const {NOT_IMAGE, IMAGE_UPLOAD} = require('./../../constants/Constants');
const uploadImage = require('./../../microServices/uploadImage');
const fs = require('fs')


module.exports = {
    async createProduct(productDao){
        const product = new Model(productDao);
        product.save();
        return product._id;
    },

    async getProductById(productId) {

        return new Promise((resolve, reject) => {
            Model.findOne({_id: productId.toString()},{__v: false})
                .populate('businessId', "-userId -__v")
                .populate('categoryId', "-__v")
                .exec((error, product) => {
                    if(error) {
                        reject(error);
                        return false;
                    }
                    resolve(product);
                });
       });
    },

    async getProduct() {
        // const product = await Model.find()
        // return product;

        return new Promise((resolve, reject) => {
            Model.find({},{__v: false}).sort({date: 1})
                .populate('businessId', "-userId -__v")
                .populate('categoryId', "-__v")
                .exec((error, product) => {
                    if(error) {
                        reject(error);
                        return false;
                    }
                    resolve(product);
                });
       });
    },

    // async upload (file, productId) {
    //     const fileName = file.originalname
    //     const extension = fileName.split("\.")[1]
    //     if(extension !== 'jpg' && extension !== 'png' && extension !== 'png' && extension !== 'jpeg') {
    //         const filePath = file.path;
    //         const deleteFile = fs.unlinkSync(filePath);
    //         return NOT_IMAGE
    //     }

    //     Model.findOneAndUpdate({_id: productId}, {product_img: file.filename},{new: true}, (error, productUpdate) => {
    //         if (error || !productUpdate) {
    //             return NOT_IMAGE;
    //         }
    
    //         return productUpdate;
    //     });
    // },

    async upload (file, productId) {
        return uploadImage.upload(file, Model, productId)
    },

    async getFile(filename){
        return uploadImage.getFile(filename, 'products')
    }
}