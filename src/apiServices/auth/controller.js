const bcrypt = require('bcrypt');
const daddo = require('./dao');

module.exports = {
    async insertAuth(data) {
        const authData = {
            userId: data.userId,
        }

        if(data.username) {
            authData.username = data.username;
        }

        if(data.password) {
            authData.password = await bcrypt.hash(data.password, 10, )
        }
       return daddo.insert(authData);
    },

    async login(userData) {
        return await dao.login(userData)
    }
}