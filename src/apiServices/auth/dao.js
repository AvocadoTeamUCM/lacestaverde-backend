const Model = require("./model");

module.exports = {
    async insertAuth(authDao) {
        console.log('authDao>>>> ',authDao)
        const authData = new Model(authDao);
        authData.save();
    },
}