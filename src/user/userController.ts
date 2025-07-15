import { NextFunction } from "express";
import { Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel"; 
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import {sign} from 'jsonwebtoken'
import dotenv from 'dotenv';
import { access } from "fs";





dotenv.config();

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
    
    
    const newUser = await userModel.create({
        name,
        email,
        password: hashedPassword
    });

    //Token generation


    const token = sign({
        sub: newUser._id,

    },process.env.JWT_SECRET as string,{
        expiresIn: '1d'
    })


    //Resonse




res.status(201).json({
    accessToken: token,   
    
});



}



const loginUser = async (req:Request, res:Response,next:NextFunction) => {

const { email, password } = req.body;

if(!email || !password) {
    const error = createHttpError(400, "Please provide both email and password.");
    return next(error);
}

//Database call
const user = await userModel.findOne({
    email
});

if(!user) {
    const error = createHttpError(404, "User not found with this email.");
    return next(error);
}

const isMatch = await bcrypt.compare(password, user.password);

if(!isMatch) {
    const error = createHttpError(401, "Invalid password.");
    return next(error);
}


//Token generation
const token = sign({
    sub: user._id,
}, process.env.JWT_SECRET as string, {
    expiresIn: '1d'
});




res.status(200).json({
    message: "Login successful" ,accessToken: token,
})

}

    


export {createUser, loginUser};