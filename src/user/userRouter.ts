import { create } from "domain";
import express from "express"
import { createUser ,loginUser} from "./userController";

const userRouter = express.Router();
//Adding Routes for my project 
userRouter.post('/register',createUser);    

userRouter.post('/login', loginUser)


export default userRouter;