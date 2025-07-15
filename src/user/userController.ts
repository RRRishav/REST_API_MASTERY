import { NextFunction } from "express";
import { Request, Response } from "express";


const createUser = async (req:Request, res:Response,next:NextFunction) => {


res.status(201).json({
    message: "User created successfully",   
    
});



}

export {createUser};