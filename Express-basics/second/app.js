import express from "express";
import calculatorRoute from "./routes/calculator.route.js";
import formRoute from "./routes/form.route.js";
import usersRoute from "./routes/users.route.js";
import localsRoute from "./routes/locals.route.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));//form data
app.use(express.static("public"));


app.use("/calc", calculatorRoute); 
app.use("/form", formRoute);  // /form.html
app.use("/users", usersRoute); 
app.use("/locals", localsRoute); 

export default app;
