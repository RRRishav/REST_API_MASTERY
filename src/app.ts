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



//GLOBAL ERROR HANDLER
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;

    return res.status(statusCode).json({
        status: 'error',
        errorStack: err.stack,
        message: err.message || 'Internal Server Error',
    }); 
});





export default app;