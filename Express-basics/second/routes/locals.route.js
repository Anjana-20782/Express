import express from "express";
const router = express.Router();

router.use((req,res,next)=>{
    res.locals.user = "Admin";
    next();
})

router.get("/",(req,res)=>{
    res.send(`Access ${res.locals.user}`)
})

export default router;