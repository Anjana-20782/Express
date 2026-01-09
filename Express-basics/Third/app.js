import express from "express";
import userRoute from "./routes/user.route.js";
import cors from 'cors'

const app = express();

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:true}))



app.get("/",(req,res)=>{
    console.log("working");
    
})

app.use("/users", userRoute);

export default app;