import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/fourth");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("DB connection failed", error.message);
    process.exit(1);
  }
};

export default connectDB;
