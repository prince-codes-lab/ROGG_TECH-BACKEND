require('dotenv').config({
    path: `${process.cwd()}/.env`
});
const express = require('express');
const app = require("express")();
const PORT = process.env.PORT || 5050;
const cors = require('cors');
const errHandler = require('./utils/errorHandler');
const authRouter = require('./routers/authRoute');
const userRouter = require('./routers/userRoute');
const newsLetterRoutes = require('./routers/newsLetter');
const dbConnect = require('./db/dbConnect');



app.use(cors());

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use('/tech/auth', authRouter)
app.use('/tech/user', userRouter)
app.use('/tech/newsletter', newsLetterRoutes)
app.use('/tech/admin', require('./routers/checkAdmin'))

app.use(errHandler)



dbConnect();
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
});
//