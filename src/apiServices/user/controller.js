const dto = require('./dto');
const dao = require('./dao');
const auth = require('./../auth/controller');

module.exports = {
    
    async createUser(body) {
        return new Promise((resolve, reject) => {
            const userDao = {
                name: body.name,
                email: body.email
            }
            const authData = {
                userId: '640b7901e78f4954c8a0c6c8',
                username: 'eduards',
                password: '1234'
            }
            auth.insertAuth(authData);
            resolve(dao.createUser(userDao));
        });
    }, 

    async getUserById(userId) {
        return new Promise((resolve, reject) => {
            if(userId == '' || userId == null) {
                reject('Invalid userId');
                return false
            }
            resolve(dao.getUser(userId));
        })
    },

    async getUsers(){
        return new Promise((resolve, rejec) => {
            resolve(dao.getUsers());
        })
    }
}