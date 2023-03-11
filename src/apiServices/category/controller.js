const { getCategories } = require("./dao");
const dao = require("./dao");

module.exports = {
    async createCategory(categoryName) {
        const categoryDao = {
            name: categoryName
        } 
        return await dao.createCategory(categoryDao);
    },

    async getCategoryById(categoryId) {
        return await dao.getCategoryById(categoryId);
    },

    async getCategories() {
        return await dao.getCategories();
    }
}
