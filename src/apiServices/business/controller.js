const dto = require('./dto');
const dao = require('./dao');

module.exports = {
    
    async createBusiness(req) {
        return new Promise((resolve, reject) => {
            const businessDao = {
                name: req.body.name,
                description: req.body.description,
                address: req.body.address,
                userId: req.body.userId,
            }
            const businessId = dao.createBusiness(businessDao)

            if(req.file){
                dao.upload(req.file, businessId)
            }
            resolve();
        });
    }, 

    async getBusinessById(businessId) {
        const businessDao = await dao.getBusinessById(businessId);
        const businessDto = dto.single(businessDao);

        return businessDto;
    },
    async getBusinessByUserId(userId) {
        const businessDao = await dao.getBusinessByUserId(userId);
        const businessDto = dto.multiple(businessDao);

        return businessDao;
    },

    async getBusiness(){
        const businessDao = await dao.getBusiness();
        const businessDto = dto.multiple(businessDao);

        return businessDao;
    },

    async upload(file, businessId) {
        return await dao.upload(file, businessId);
    },

    async getFile(filename) {
        return dao.getFile(filename);
    },
}