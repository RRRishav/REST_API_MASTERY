import { NextFunction } from "express";
import { Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel"; 
import bcrypt from "bcrypt";



const createUser = async (req:Request, res:Response,next:NextFunction) => {
    const { name, email, password } = req.body;

    //Validation

    if(!name || !email || !password) {
        const error = createHttpError(400, "Please provide all required fields: name, email, and password.");
        return next(error);
       
    }
    
    //Database call

    const User = await userModel.findOne({
        email
    })

    if(User) {
        const error = createHttpError(409, "User already exists with this email.");
        return next(error);
    }
    

    //password hashes
  
    const hashedPassword = await bcrypt.hash(password, 7);
    


    //process

    //Resonse




res.status(201).json({
    message: "User created successfully",   
    
});



}

export {createUser};