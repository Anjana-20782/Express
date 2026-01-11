import fs from "fs";
import mongoose from "mongoose";
import Product from "../models/Product.model.js"; // <-- corrected path
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "../config/db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const start = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/fourthApp");
    console.log("MongoDB connected");

    await connectDB(); 

    const data = JSON.parse(
      fs.readFileSync(path.join(__dirname, "products.json"), "utf-8")
    );

    await Product.insertMany(data);
    console.log("DB Seeded Successfully");

    process.exit();
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exit(1);
  }
};

start();
