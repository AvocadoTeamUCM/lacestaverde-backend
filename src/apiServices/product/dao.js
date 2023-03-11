const Model = require('./model');

module.exports = {
    async createProduct(productDao){
        const product = new Model(productDao);
        product.save();
    },

    async getProductById(productId) {

        // const product = await Model.find({
        //     _id: productId
        // }).
        // return product;

        return new Promise((resolve, reject) => {
            Model.find({_id: productId})
                .populate('businessId')
                .populate('categoryId')
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
            Model.find({}).sort({date: -1})
                .populate('businessId')
                .populate('categoryId')
                .exec((error, product) => {
                    if(error) {
                        reject(error);
                        return false;
                    }
                    resolve(product);
                });
       });
    }
}