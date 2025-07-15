import express from 'express';
const app = express();





app.use(express.json());


//Routes


//HTTP METHODS
app.get('/', (req, res,next) => {
    res.json({
        message: "Welcome to the API"
    })
});








export default app;