const { default: mongoose, mongo } = require("mongoose");

const Schema = mongoose.Schema;

const schemaProduct = new Schema({
    name: {
        type: String,
        required: true
    },

    businessId: {
        type: Schema.ObjectId,
        ref: 'Business',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    
    categoryId: {
        type: Schema.ObjectId,
        ref: 'Category',
        required: true
    },
    product_img: {
        type: String,
        required: false
    },
    coin: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    }

});

const model = mongoose.model('Products', schemaProduct);
module.exports = model;