import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

import connectDB from './db/db.js';
import './db/dotenv.js'
import express from 'express'

const app=express();

connectDB()

/*( async ()=>{
    try {
       await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)

       app.on("error",(error)=>{
        console.log("ERROR:",error);
        throw error;
       })

       app.listen(process.env.PORT,()=>{
        console.log("Server Running at PORT:",process.env.PORT);
        
       })

    } catch (error) {
        console.log("ERROR:",error);
        
    }
})()*/