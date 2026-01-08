import express from "express";
import calculatorRoute from "./routes/calculator.route.js";

const app = express();
app.use(express.json());

app.use("/calc", calculatorRoute); 

export default app;
