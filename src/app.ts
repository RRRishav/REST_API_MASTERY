import express,{NextFunction, Request,Response} from 'express';
import { HttpError } from 'http-errors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();



app.use(express.json());


//Routes


//HTTP METHODS
app.get('/', (req, res,next) => {
    res.json({
        message: "Welcome to the API"
    })
});








export default app;