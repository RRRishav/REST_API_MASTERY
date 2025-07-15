import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();
(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME as string, // Click 'View API Keys' above to copy your Cloud name
        api_key: process.env.API_KEY as string, // Click 'View API Keys' above to copy your API ke
        api_secret: process.env.API_SECRET as string // Click 'View API Keys' above to copy your API secret
    });
    

})();




export default cloudinary;