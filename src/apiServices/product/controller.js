const dto = require('./dto');
const dao = require('./dao');

module.exports = {
    
    async createProduct(req) {
        return new Promise((resolve, reject) => {
            const productDao = {
                name: req.body.name,
                price: req.body.price,
                coin: req.body.coin,
                unit: req.body.unit,
                description: req.body.description,
                categoryId: req.body.categoryId,
                businessId: req.body.businessId,
            }
            const productId = dao.createProduct(productDao)
            if (req.file){
                resolve(dao.upload(req.file, productId))
            }
            resolve();
        });
    }, 

    async getProductById(productId) {
        const productDao = await dao.getProductById(productId);
        const productDto = dto.single(productDao);

        return productDao;
    },

    async getProduct(){
        const productDao = await dao.getProduct();
        const productDto = dto.multiple(productDao);

        return productDao;
    },

    async upload(file, productId) {
        return await dao.upload(file, productId);
    },

    async getFile(filename) {
        return dao.getFile(filename);
    }
}