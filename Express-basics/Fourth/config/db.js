import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect("mongodb://127.0.0.1:27017/fourthApp");
      console.log("MongoDB connected");
    } else {
      console.log("MongoDB already connected");
    }
  } catch (err) {
    console.error("DB connection failed", err.message);
  }
};

export default connectDB;
