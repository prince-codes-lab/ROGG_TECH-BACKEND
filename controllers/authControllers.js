
const { JsonWebTokenError } = require("jsonwebtoken");
const jwt = require('jsonwebtoken');
const asyncWrapper = require("../utils/asyncwrapper");
const bcrypt = require('bcrypt');
const AppError = require("../middlewares/AppError");




const tokenGenerator = (payLoad) => {

    const token = jwt.sign({email: payLoad.email}, process.env.JWT_SECRET, {expiresIn: '1d'})
    // console.log(payLoad)
    return token

}




const login = asyncWrapper(
    (req, res, next) => {
            const body = req.body;

            // console.log('I got here')

            if(!body.email || !body.password) {
                // console.log('I entered the error block')
                    next(new AppError('Please, provide the neccesary details', 401));
                   
                    return;
            }

           const token =  tokenGenerator(body);

            res.status(200).json({
                status: 'success',
                msg: token
            })



    }
)

module.exports = {
    login
}