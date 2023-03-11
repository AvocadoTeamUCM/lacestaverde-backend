const {default: mongoose} = require("mongoose");

const Schema = mongoose.Schema;

const schemaCategory = new Schema({
    name: {
        type: String,
        required: true
    },
})

const model = mongoose.model('Category', schemaCategory);
module.exports = model;