import { Request, Response, NextFunction } from 'express';
import { HttpError } from 'http-errors';


//GLOBAL ERROR HANDLER
const globalErrorhandler = ((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;

    return res.status(statusCode).json({
        status: 'error',
        errorStack: err.stack,
        message: err.message || 'Internal Server Error',
    }); 
});



export default globalErrorhandler;

