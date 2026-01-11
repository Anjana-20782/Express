import express from "express";
import productRoutes from "./routes/product.route.js";
import AppError from "./utils/AppError.js";
import rateLimiter from "./middleware/rateLimiter.js";
import helmet from "helmet";


const app = express();

app.use(express.json());

// Security headers
app.use(helmet());

// rate limiting
app.use(rateLimiter);


// routes
app.use("/api/products", productRoutes);

// 404 handler
app.use((req, res, next) => {
  next(new AppError(`Cannot find ${req.originalUrl}`, 404));
});

// global error handler
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  res.status(err.statusCode).json({
    status: "error",
    message: err.message,
  });
});

export default app;
