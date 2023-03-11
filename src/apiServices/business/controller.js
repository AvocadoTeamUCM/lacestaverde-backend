const dto = require('./dto');
const dao = require('./dao');

module.exports = {
    
    async createBusiness(body) {
        return new Promise((resolve, reject) => {
            const businessDao = {
                name: body.name,
                description: body.description,
                address: body.address,
                userId: body.userId,
            }
            resolve(dao.createBusiness(businessDao));
        });
    }, 

    async getBusinessById(businessId) {
        const businessDao = await dao.getBusinessById(businessId);
        const businessDto = dto.multiple(businessDao);

        return businessDto;

        // return new Promise((resolve, reject) => {
        //     if(businessId == '' || businessId == null) {
        //         reject('Invalid userId');
        //         return false
        //     }
        //     resolve(dao.getBusinessById(businessId));
        // })
    },

    async getBusiness(){
        const businessDao = await dao.getBusiness();
        const businessDto = dto.multiple(businessDao);

        return businessDto;
        // return new Promise((resolve, reject) => {
        //     resolve(dao.getBusiness());
        // })
    }
}