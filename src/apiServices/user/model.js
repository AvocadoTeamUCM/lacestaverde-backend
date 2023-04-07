const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const mySchema = new mongoose.Schema ({
    name: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true,
        unique: [true, "The email already exist"]
    },

    role: {
        type: String,
        default: 'COMPRADOR'
    },

    file: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    }

})

const model = mongoose.model('User', mySchema);
module.exports = model;