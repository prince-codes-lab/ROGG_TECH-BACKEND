const fs = require("node:fs");
const AppError = require("../middlewares/AppError")
const path =  require('node:path');


const errHandler = (err, req, res, next) => {
    // console.log('there is an error')
    // console.log(err instanceof AppError)
    if (err instanceof AppError){

        fs.writeFileSync(path.join(process.cwd(), 'errorLogs.txt'), err.stack, {flag: 'a'})
        console.log(err.stack)
        res.status(err.statusCode).json(
            {
                status: 'failed',
                message: err.message
            }
        )
    }
    
    else {
        fs.writeFileSync(path.join(process.cwd(), 'errorLogs.txt'), err.stack, {flag: 'a'})
        
        console.log(err.message)
        return res.status(500).json({
            
            status: 'failed',
            msg: `check console for error message`
        })
    }
}

module.exports = errHandler;