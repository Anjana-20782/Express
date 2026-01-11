import express from "express";
import productRoutes from "./routes/product.route.js";
import AppError from "./utils/AppError.js";

const app = express();

app.use(express.json());

// routes
app.use("/api/products", productRoutes);

// app error handleer
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
/* ------------------------------------------------ */

export default app;
