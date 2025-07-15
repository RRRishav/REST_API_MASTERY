import app from "./src/app";
import conf from 'dotenv';
import { config } from './src/config/config';
import connectDB from './src/config/db';
import { connect } from "http2";


const startServer = async ()=>{

    await  connectDB()
    const PORT = config.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}



startServer();