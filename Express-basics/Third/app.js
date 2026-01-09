import express from "express";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoute);
app.use("/api/auth", authRoute);

export default app;
