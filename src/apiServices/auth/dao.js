const Model = require("./model");

module.exports = {
    async insertAuth(authDao) {
        const authData = new Model(authDao);
        authData.save();
    },
}