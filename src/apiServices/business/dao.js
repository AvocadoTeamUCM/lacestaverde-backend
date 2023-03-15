const Model = require('./model');

module.exports = {
    async createBusiness(businessDao){
        const business = new Model(businessDao);
        business.save();
    },

    async getBusinessById(businessId) {

        // const business = await Model.find({
        //     _id: businessId
        // })
        // return business;

        return new Promise((resolve, reject) => {
            Model.find({_id: businessId})
                .populate('userId')
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
        // const business = await Model.find()
        // return business;

        return new Promise((resolve, reject) => {
            Model.find({}).sort({date: -1})
                .populate('userId')
                .exec((error, business) => {
                    if(error) {
                        reject(error);
                        return false;
                    }
                    resolve(business);
                });
       });
    }
}