const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema ({
    name: {
        type: String,
        require: true
    },

    description: {
        type: String,
        require: true
    },

    address: {
        type: String,
        require: true
    },

    userId: {
        type: Schema.ObjectId,
        ref: 'User',
        require: true
    },

})

const model = mongoose.model('Business', mySchema);
module.exports = model;