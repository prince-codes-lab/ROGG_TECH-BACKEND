const mongoose = require('mongoose');


const Product = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subCategory: {
        type: String,
        required: true,
    },  
    description: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Product', Product);