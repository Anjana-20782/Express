import express from "express";

import helloRoute from "./routes/hello.route.js";
import greetRoute from "./routes/greet.route.js";
import searchRoute from "./routes/search.route.js"

const app = express();

app.use(express.json());

// routes
app.use("/api", helloRoute);        
app.use("/greet", greetRoute);
app.use("/search",searchRoute)  

export default app;
