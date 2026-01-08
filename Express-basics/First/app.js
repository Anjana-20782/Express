import express from "express";

import helloRoute from "./routes/hello.route.js";
import greetRoute from "./routes/greet.route.js";
import searchRoute from "./routes/search.route.js";
import statusRoute from "./routes/status.route.js";
import errorRoute from "./routes/error.route.js";
import postRoute from "./routes/post.route.js";
import redirectRoute from "./routes/redirect.route.js";
import browserRoute from "./routes/browser.route.js";
import multipleRoute from "./routes/multipleHandlers.route.js";
import bodyparserRoute from "./routes/bodyParser.route.js";
import middlewareRoute from "./routes/LoggerMiddleware.route.js";
import authRoute from "./routes/simpleAuth.route.js";

const app = express();

app.use(express.json());

app.use(express.static("public"));

// routes
app.use("/api", helloRoute);        
app.use("/greet", greetRoute);
// app.use("/search",searchRoute) ; 
app.use("/status", statusRoute);
app.use("/error", errorRoute); 
app.use("/", postRoute);  
app.use("/old",redirectRoute);
app.use("/browser",browserRoute);
app.use("/handlers",multipleRoute)
app.use("/parse",bodyparserRoute)
app.use("/",middlewareRoute)
app.use("/",authRoute)

export default app;
