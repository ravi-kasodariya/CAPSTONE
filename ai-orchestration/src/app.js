import express from 'express';
import morgan from 'morgan';

const app = express();

//Middeleware
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.get("/api/ai/healthz", (req,res)=>{
    res.status(200).json({status:"ok"});
});

export default app;
