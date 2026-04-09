const People = require("../db/models/people")


const createDefaultAdmin = async () => {
    try{
        const adminExists = await People.findOne({ role: 'admin' });

        if(!adminExists) {

            const createAdmin = new People({
                name: process.env.ADMIN_USERNAME,
                password: process.env.ADMIN_PASSWORD,
                role: 'admin'
            });
            await createAdmin.save();
            console.log('Default admin created successfully');
        }
        }

    catch(error) {
        console.error('Error creating default admin:', error);
    }
}   

module.exports = createDefaultAdmin;