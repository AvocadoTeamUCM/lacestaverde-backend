const bcrypt = require('bcrypt');
const dao = require('./dao');

module.exports = {
    async insertAuth(data) {
        const authData = {
            userId: data.userId,
        }

        if(data.username) {
            authData.username = data.username;
        }

        if(data.password) {
            authData.password = await bcrypt.hash(data.password, 5)
        }
        return dao.insertAuth(authData);
    }
}