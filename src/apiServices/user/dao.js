const Model = require('./model');
const ModelAuth = require('./../auth/model')
const auth = require('./../auth/controller');
const uploadImage = require('./../../microServices/uploadImage');

const {USER_CREATED, USERNAME_EXISTS, USER_EXISTS} = require('./../../constants/Constants')

module.exports = {
    async createUser(userDao){
        const existsEmail = await this.existsUserEmail(userDao.email);
        const existUser = await this.existsUserName(userDao.username);


        if(existsEmail) {
            return USER_EXISTS
        } else {
            if(existUser) {
                return USERNAME_EXISTS
            }else {
                const newUser = new Model(userDao);
                const newUserId = newUser._id.toString()
                await newUser.save();
                const authUser = {
                    userId: newUserId,
                    username: userDao.username,
                    password: userDao.password
                }
                auth.insertAuth(authUser)
                return newUserId
            }
        }
        
    },

    async getUser(userId) {
        const user = await Model.findOne({ _id: userId });
        return user;
    },

    async existsUserEmail(email) {
        return useremail = await Model.findOne({ email: email},{email: true}) ? true : false;
    },

    async existsUserName(nameUser) {
        return userName = await  ModelAuth.findOne({username: nameUser}, {_id: true}) ? true : false;
    },

    async getUsers() {
        const users = await Model.find()
        return users;
    },

    async upload (file, userId) {
        return uploadImage.upload(file, Model, userId)
    },
    
    async getFile(filename){
        return uploadImage.getFile(filename, 'users')
    }
}