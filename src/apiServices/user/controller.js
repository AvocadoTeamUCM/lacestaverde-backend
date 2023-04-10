const dto = require('./dto');
const dao = require('./dao');
const auth = require('./../auth/controller');

module.exports = {

    async upload(file, userId) {
        return await dao.upload(file, userId);
    },

    async getFile(filename) {
        return dao.getFile(filename);
    },
    
    async createUser(req) {
        return new Promise((resolve, reject) => {
            const userDao = {
                name: req.body.name,
                email: req.body.email,
                username: req.body.username,
                password: req.body.password
            }
            if(req.file) {
                userDao.avatar = req.file
            }
            resolve(dao.createUser(userDao));
        });
    }, 

    async getUserById(userId) {
        const userDao = await dao.getUser(userId);

        const userDto = dto.single(userDao);

        return userDto;
    },

    async getUsers(){
        const userDao = await dao.getUsers();
        const userDto = dto.multiple(userDao);

        return userDto;
    }
}