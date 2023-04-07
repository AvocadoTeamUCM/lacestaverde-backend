const Model = require('./model');
const uploadImage = require('./../../microServices/uploadImage');

module.exports = {
    async createBusiness(businessDao){
        const business = new Model(businessDao);
        business.save();
        return business._id;
    },

    async getBusinessById(businessId) {

        return new Promise((resolve, reject) => {
            Model.findOne({_id: businessId},{__v: false})
                .populate('userId',"-email -__v -file")
                .exec((error, business) => {
                    if(error) {
                        reject(error);
                        return false;
                    }
                    resolve(business);
                });
       });
    },

    async getBusinessByUserId(userId) {

        return new Promise((resolve, reject) => {
            Model.find({'userId': userId}, {__v: false}).sort({date: -1})
                .populate('userId', "-email -__v -file")
                .exec((error, business) => {
                    if(error) {
                        reject(error);
                        return false;
                    }
                    resolve(business);
                });
       });
    },

    async getBusiness() {
        return new Promise((resolve, reject) => {
            Model.find({}, {__v: false}).sort({date: -1})
                .populate('userId', "-email -__v -file")
                .exec((error, business) => {
                    if(error) {
                        reject(error);
                        return false;
                    }
                    resolve(business);
                });
       });
    },

    async upload (file, businessId) {
        return uploadImage.upload(file, businessId,Model)
    },
    
    async getFile(filename){
        return uploadImage.getFile(filename, 'business')
    }
}