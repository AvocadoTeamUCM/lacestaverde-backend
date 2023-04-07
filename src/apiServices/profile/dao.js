const { getProfileByUserId } = require('./controller')
const Profile = require('./model')

module.exports = {
    async getProfileByUserId(userId){
        return userId;
    }
}