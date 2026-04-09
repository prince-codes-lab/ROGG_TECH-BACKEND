const mongoose =require('mongoose');
const createAdmin = require('../utils/adminCreation');

const dbConnect = async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    });
    console.log('Database connected successfully')
    await createAdmin();
}

module.exports = dbConnect;