const dto = require('./dto');
const dao = require('./dao');

module.exports = {
    
    async createProduct(body) {
        return new Promise((resolve, reject) => {
            const productDao = {
                name: body.name,
                price: body.price,
                categoryId: body.categoryId,
                businessId: body.businessId,
            }
            resolve(dao.createProduct(productDao));
        });
    }, 

    async getProductById(productId) {
        const productDao = await dao.getProductById(productId);
        const productDto = dto.multiple(productDao);

        return productDto;
    },

    async getProduct(){
        const productDao = await dao.getProduct();
        const productDto = dto.multiple(productDao);

        return productDto;
    }
}