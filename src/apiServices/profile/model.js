const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
    userId: {
        type: Schema.ObjectId,
        require: true
    },
    role: {
        type: String
    },
    dni:{
        type: String
    },
    phoneNumber:{
        type: String
    },
    gender:{
        type: String
    },
    address: {
        type: String
    },
    photo: {
        type: String
    }
    
})

const model = mongoose.model("Profile", mySchema);
module.exports = model;