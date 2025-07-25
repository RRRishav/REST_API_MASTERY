import express,{NextFunction, Request,Response} from 'express';
import { HttpError } from 'http-errors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './user/userRouter';
import bookRouter from './book/bookRouter';
const app = express();




app.use(express.json());
app.use('/api/users',userRouter)
app.use('/api/books',bookRouter)

//Routes


//HTTP METHODS
app.get('/', (req, res,next) => {
    res.json({
        message: "Welcome to the API"
    })
});








export default app;