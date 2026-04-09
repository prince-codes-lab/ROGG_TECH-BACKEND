const mongoose = require('mongoose');
const {Schema} = mongoose;


const News = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    publishedAt: {
        type: Date,
        default: Date.now
    }

});