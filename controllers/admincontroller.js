const asyncWrapper = require("../utils/asyncwrapper");
const User = require('../db/models/people');


const checkAdmin = asyncWrapper(
    async(req, res, next) => {
        // Logic to check if the user is an admin
        // This is a placeholder and should be replaced with actual authentication logic
        const isAdmin = await User.findOne({role: 'admin'}); // Replace with actual check

        if (!isAdmin) {
            return res.status(403).json({ message: "Admin does not exist" });
        }

        return res.status(200).json({ isAdmin });

        next();
    }
);

module.exports = {
    checkAdmin,
}