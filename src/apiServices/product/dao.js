const Model = require('./model');
const response = require('./../../services/utils/response');
const {NOT_IMAGE, IMAGE_UPLOAD} = require('./../../constants/Constants');
const uploadImage = require('./../../microServices/uploadImage');
const fs = require('fs');
const request = require('request');
const translator = require('./../../services/utils/translator')

module.exports = {
    async createProduct(productDao){
        const product = new Model(productDao);
        product.save();
        return product._id;
    },

    async getProductById(productId) {

        return new Promise((resolve, reject) => {
            Model.findOne({_id: productId.toString()},{__v: false})
                .populate('businessId', "-__v")
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
        return new Promise((resolve, reject) => {
            Model.find({},{__v: false}).sort({date: 1})
                .populate('businessId', "-__v")
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

    async upload (file, productId) {
        return uploadImage.upload(file, productId, Model)
    },

    async getFile(filename){
        return uploadImage.getFile(filename, 'products')
    },

    async getNutritionalInfoProduct(productName) {
        const query = translator[productName.toLowerCase()];
       return new Promise((resolve, reject) => {
        request.get({
            url: 'https://api.api-ninjas.com/v1/nutrition?query=' + query,
            headers: {
                'X-Api-Key': 'fP0afWLmdTc9sR52l/Bucg==IdEvQUhE7zBJ9ZbC'
            },
        }, 
        function(error, response, body) {
            if(error) return console.error('Request failed:', error);
            else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
            resolve(JSON.parse(body))
        });
       })
    }
}