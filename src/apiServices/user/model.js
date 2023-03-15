const mongoose = require("mongoose");

const mySchema = new mongoose.Schema ({
    name: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true,
        unique: true
    },

})

const model = mongoose.model('User', mySchema);
module.exports = model;