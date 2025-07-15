import cloudinary from "../config/cloudinary";
import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";  
import path from "node:path";
import filepath from "node:path";

const createBook = async (req:Request, res:Response,next:NextFunction) => {
     
    //const {} = req.body;
    console.log('files',req.files);
    
      const files = req.files as {[fileName: string]: Express.Multer.File[]};

      const coverImageMimeType = files.coverImage[0].mimetype.split('/')[1];
      const fileName = files.coverImage[0].filename;
      const filePath =path.resolve(__dirname, '../../public/data/uploads',fileName); 

      console.log('filePath', filePath);

         const uploadResult = await cloudinary.uploader
             .upload(
                filePath, {
                     filename_override:__filename,
                     folder: 'books',
                     format:coverImageMimeType,

                 }
             )
             .catch((error) => {
                 console.log(error);
             });
          
          console.log(uploadResult);
          
        


    res.json({ message: "Book created successfully"
    }); 

}

export { createBook };