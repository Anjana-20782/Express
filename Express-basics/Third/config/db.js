//21.   DB connection

import mongoose from "mongoose";

const connectDB = async()=>{

    try {
        
        await mongoose.connect("mongodb://127.0.0.1:27017/testdb");
        console.log("DB connected");
        
    } catch (error) {
         console.error("DB Connection Failed");
         process.exit(1)   
    }
};

export default connectDB;