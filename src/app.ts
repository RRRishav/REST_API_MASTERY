import express from 'express';
const app = express();


//Routes

app.use(express.json());

//HTTP METHODS
app.get('/', (req, res) => {
    res.send('Hello World!');
});








export default app;