import express from 'express';
 import mongoose from "mongoose"
 import dotenv from 'dotenv'
 import userRouter from './routes/user.route.js';
 
 dotenv.config()
mongoose.connect(process.env.MONGO)
.then(()=>{
 console.log("connected to mongodb");   
}).catch((err)=>{
    console.log("error mongodb:",err);
})



const app = express();

app.listen(3000,()=>{
    console.log("server running hruday...ok");
});

app.use('/api/user',userRouter);