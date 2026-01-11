import express from "express";
import productRoutes from "./routes/product.route.js";

const app = express();

app.use(express.json());

// routes
app.use("/api/products", productRoutes);

/* -------- GLOBAL ERROR HANDLER (REQUIRED) -------- */
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
