import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

const connectDB=async ()=>{
            const connectionInstance=await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
            .then(() => console.log("MongoDB Connected"))
            .catch((err) => console.log("MongoDB Connection Error:", err));
}

export default connectDB