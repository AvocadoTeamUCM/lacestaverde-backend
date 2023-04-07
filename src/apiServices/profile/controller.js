const dao = require('./dao');
const dto = require('./dto')

module.exports = {
    async updateProfile(userData){
        return dao.updateProfile(userData);
    },
    
    async getProfileByUserId(userId) {
        return dao.getProfileByUserId(userId);
    }
}