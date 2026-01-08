import express from "express";

import helloRoute from "./routes/hello.route.js";
import greetRoute from "./routes/greet.route.js";

const app = express();

app.use(express.json());

// routes
app.use("/api", helloRoute);        // Task 1
app.use("/greet", greetRoute);   // Task 2

export default app;
