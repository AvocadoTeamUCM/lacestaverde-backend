const Model = require('./model');
const auth = require('./../auth/router');

module.exports = {
    async createUser(userDao){
        const { email } = userDao
        existUser = await Model.findOne({email: email}, {_id: true});
        if(!existUser){
            const user = new Model(userDao);
            user.save();
        }
    },

    async getUser(userId) {
        const user = await Model.find({ _id: userId });
        return user;
    },

    async getUsers() {
        const users = await Model.find()
        return users;
    }
}