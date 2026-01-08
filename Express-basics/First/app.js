import express from "express";

import helloRoute from "./routes/hello.route.js";
import greetRoute from "./routes/greet.route.js";
import searchRoute from "./routes/search.route.js";
import statusRoute from "./routes/status.route.js";
import errorRoute from "./routes/error.route.js";
import postRoute from "./routes/post.route.js";

const app = express();

app.use(express.json());

app.use(express.static("public"));

// routes
app.use("/api", helloRoute);        
app.use("/greet", greetRoute);
app.use("/search",searchRoute)  
app.use("/status", statusRoute);
app.use("/error", errorRoute); 
app.use("/post", postRoute);  

export default app;
