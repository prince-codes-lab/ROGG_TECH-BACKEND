const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Users = new mongoose.Schema({

    name: { 
        type: String,
        required: true
    },
        role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    password: {
        type:String,
        required: true,

    }

});

Users.pre('save', async function(next){
    if(this.isModified('password') || this.isNew) {
        try {
            const salt = await bcrypt.genSalt(10);
            this.password = await bcrypt.hash(this.password, salt);
            next();
        } catch (error) {
            next(error);
        }
    } else {
        next();
    }   

})

module.exports = mongoose.model('People', Users);