import express from "express";
import helmet from "helmet";
import productRoutes from "./routes/product.route.js";
import errorHandler from "./middleware/error.middleware.js";
import rateLimiter from "./middleware/rateLimiter.js";

const app = express();

app.use(express.json());
// app.use(helmet());               // Q42
// app.use(rateLimiter);            // Q41

app.use("/api/products", productRoutes);

app.use(errorHandler);

export default app;
