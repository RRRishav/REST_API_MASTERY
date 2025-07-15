
import express from "express"
import { createBook } from "./bookController";
import multer from "multer";
import path from "node:path";

const bookRouter = express.Router();

//file local storage -> cloudinary
const upload = multer({
    dest: path.resolve(__dirname,'../../public/data/uploads'), // Directory to store uploaded files
    limits: {fileSize:3e7} // Limit file size to 30MB 

})
//Adding Routes for my project 
bookRouter.post('/',upload.fields([
    { name: 'coverImage', maxCount: 1 }, // For cover image
    { name: 'file', maxCount: 1 } // For PDF file    
]),createBook);




export default bookRouter;