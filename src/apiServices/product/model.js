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
        ref: 'Category'
    },
    photo: {
        type: String,
    },
    coin: {
        type: String,
    },
    unit: {
        type: String,
    }

});

const model = mongoose.model('Products', schemaProduct);
module.exports = model;