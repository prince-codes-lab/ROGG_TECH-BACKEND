
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
            const payLoad = {
                email: body.email,
                password: body.password,
                role: User.findOne({email: body.email}).role
            }

            // console.log('I got here')

            if(!body.email || !body.password) {
                // console.log('I entered the error block')
                    next(new AppError('Please, provide the neccesary details', 401));
                   
                    return;
            }

           const token =  tokenGenerator(payLoad);

            res.status(200).json({
                status: 'success',
                msg: token
            })



    }
)


const verifyToken = asyncWrapper(
    async (req, res, next) => {

        const token = req.headers.authorization;

        if(!token || !token.startsWith('Bearer ')) {
            return next(new AppError('No token provided', 401));
        }

        const tokenLiteral = token.split(' ')[1];

        const decoded = jwt.verify(tokenLiteral, process.env.JWT_SECRET);

        if(!decoded){

            return next(new AppError('Invalid token', 401));
        }

        req.user = decoded;
        decoded.password = undefined;

        next();

    }



);


const authorizeAdmin = asyncWrapper(

    async(req, res, next) => {
        // Logic to check if the user is an admin

        const checker = req.user.role;
        

        if(checker !== 'admin'){
            return next(new AppError('Unauthorized access', 403));
        }

        return res.status(200).json({ isAdmin });

        next(); 
    }

);

module.exports = {
    login,
    verifyToken,
    authorizeAdmin
}