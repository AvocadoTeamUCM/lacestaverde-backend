const Model = require('./model');
const ModelAuth = require('./../auth/model');
const authController = require('./../auth/controller')
const uploadImage = require('./../../microServices/uploadImage');

const {USER_CREATED, USERNAME_EXISTS, USER_EXISTS, INTERNAL_ERROR} = require('./../../constants/Constants')

module.exports = {
    async createUser(userDao){
        const existsEmail = await this.existsUserEmail(userDao.email);
        const existUser = await this.existsUserName(userDao.username);
        
        if(existsEmail) {
            return {
                status: 500,
                body: USER_EXISTS
            }
        } 
        if(existUser) {
            return {
                status: 500,
                body: USERNAME_EXISTS
            }
        }
        const newUser = new Model(userDao);
        await newUser.save((error, user)=> {
            if(error) {
                return INTERNAL_ERROR
            }
            if(userDao.avatar){
                dao.upload(userDao.avatar, user._id.toString());
            }
           
            const authUser = {
                userId: user._id.toString(),
                username: userDao.username,
                password: userDao.password
            }
            authController.insertAuth(authUser);
        });
       
        return USER_CREATED;
        
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