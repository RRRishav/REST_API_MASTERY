import { create } from "domain";
import express from "express"
import { createUser } from "./userController";

const userRouter = express.Router();
//Adding Routes for my project 
userRouter.post('/register',createUser);    



export default userRouter;