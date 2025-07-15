import { NextFunction } from "express";
import { Request, Response } from "express";
import createHttpError from "http-errors";


const createUser = async (req:Request, res:Response,next:NextFunction) => {
    const { name, email, password } = req.body;

    //Validation

    if(!name || !email || !password) {
        const error = createHttpError(400, "Please provide all required fields: name, email, and password.");
        return next(error);
       
    }
    
   

    //process

    //Resonse




res.status(201).json({
    message: "User created successfully",   
    
});



}

export {createUser};