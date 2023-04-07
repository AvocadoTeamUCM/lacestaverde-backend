const ProductModel = require('./../apiServices/product/model')
const BusinessModel = require('./../apiServices/business/model.js')
const {IMAGE_NOT_FOUND, NOT_IMAGE} = require('./../constants/Constants');

const fs = require('fs');

module.exports = {
    async upload (file, documentId, Model) {
        const fileName = file.originalname
        const extension = fileName.split("\.")[1]
        if(extension !== 'jpg' && extension !== 'png' && extension !== 'png' && extension !== 'jpeg') {
            const filePath = file.path;
            const deleteFile = fs.unlinkSync(filePath);
            return NOT_IMAGE
        }

        //console.log("Document Id: ", documentId," File: ", file, " File name: ", file.filename)

        Model.findOneAndUpdate({_id: documentId}, {file: file.filename},{new: true}, (error, documentUpdate) => {
            if (error || !documentUpdate) {
                return NOT_IMAGE;
            }
            console.log('Document Updated', documentUpdate)
            return {
                status: 200,
                body: documentUpdate
            };
        });   
    },

    async getFile(filename, entityName){
        const filePath = `./uploads/${entityName}/` + filename;

        // Comprobar que existe
        fs.stat(filePath, (error, exists) => {

            if (!exists) {
                return IMAGE_NOT_FOUND;
            }
        });
        return filePath;
    }
}