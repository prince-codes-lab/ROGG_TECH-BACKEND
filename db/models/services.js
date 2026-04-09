const mongoose = require('mongoose');


const Service = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        
    },
    description: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Service', Service);