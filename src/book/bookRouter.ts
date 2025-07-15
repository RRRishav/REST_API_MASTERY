
import express from "express"
import { createBook } from "./bookController";

const bookRouter = express.Router();
//Adding Routes for my project 
bookRouter.post('/', createBook);




export default bookRouter;