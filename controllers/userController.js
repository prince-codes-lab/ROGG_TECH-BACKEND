const AppError = require("../middlewares/AppError");
const asyncWrapper = require("../utils/asyncwrapper");
const { createUser } = require("./TestdbControl");
const User = require('../db/models/people');




const createANewUser = asyncWrapper(
    async(req, res, next) => {
        const body = req.body
        // if(!body || !body.fullname || !body.phonenumber || !body.stack) 
        if (!body || !body.name)
        return next(new AppError('Please include a valid body, and complete details', 402));
            

        // createUser({
        //     fullname: body.fullname,
        //     phonenumber: body.phonenumber,
        //     stack: body.stack
        // })

        const newUser = await User.create(body);

        if(!newUser) return next(new AppError('Failed to create user', 500));
        

        // console.log(createUser);

        return res.status(200).json({
            status: 'success',
            data: {
                user: newUser
            }
        })
    }
);

const getAllUsers = asyncWrapper(

    async (req, res, next) => {
        const users = await User.find();

        if(!users) return next(new AppError('Failed to fetch users', 500));
    
    return res.status(200).json({
        status: 'success',
        data: {
            users
        }
    }
)
    }
);

const getAUser = asyncWrapper(
    
    async (req, res, next) => {
        const userId = req.params.id;

        const user = await User.findById(userId);

        if(!user) return next(new AppError('User not found', 404));

        return res.status(200).json({
            status: 'success',
            data: {
                user
            }
        })
    }


);



const deleteAUser = asyncWrapper(

    async (req, res, next) => {
        const userId = req.params.id;

        const user = await User.findByIdAndDelete(userId);

        if(!user) return next(new AppError('User not found', 404));

        return res.status(200).json({
            status: 'success',
            message: 'User deleted successfully'
        })
    }   
);

module.exports = {
    createANewUser,
    deleteAUser, 
    getAllUsers,
    getAUser
}