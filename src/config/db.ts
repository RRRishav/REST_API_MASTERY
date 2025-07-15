import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


const connectDB = async ()=>{

    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log('MongoDB connected successfully');
        mongoose.connection.on('connected',()=>{
            console.log('Mongoose connected to DB successfully');
        });

        mongoose.connection.on('error', (err) => {
            console.error(`Mongoose connection error: ${err}`);
        });
    }
    catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process with failure
    }   
}

export default connectDB;