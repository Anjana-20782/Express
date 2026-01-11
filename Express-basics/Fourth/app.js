import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import rateLimiter from "./middleware/rateLimiter.js";
import AppError from "./utils/AppError.js";
import cookieParser from "cookie-parser";
import cookieRoutes from "./routes/cookie.route.js";

import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import productRoutes from "./routes/product.route.js"; // if you already have

const app = express();

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/fourthApp")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use(express.json());

// Add cookie parser middleware
app.use(cookieParser());

// Security headers
app.use(helmet());

// Rate limiting
app.use(rateLimiter);

// Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/products", productRoutes); // optional
// Routes
app.use("/api/cookie", cookieRoutes);


// 404 handler
app.use((req, res, next) => {
  next(new AppError(`Cannot find ${req.originalUrl}`, 404));
});

// Global error handler
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  res.status(err.statusCode).json({
    status: "error",
    message: err.message,
  });
});

export default app;
