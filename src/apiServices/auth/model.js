const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
    userId: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    username: {
        type: String,
        unique: true,
        require: true
    },

    password: {
        type: String,
        require: true
    },
});

const model = mongoose.model('Auth', mySchema);
module.exports = model;