const Model = require("./model");

module.exports = {
    async createCategory(categoryDao) {
        const category = new Model(categoryDao);
        category.save();
    },

    async getCategoryById(categoryId) {
        const category = await Model.find({
            _id: categoryId
        },{__v: false});

        return category;
    },

    async getCategories() {
        const categories = await Model.find({},{__v: false});
        return categories;
    },

}

