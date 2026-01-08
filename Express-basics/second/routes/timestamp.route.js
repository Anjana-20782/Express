import express from "express";
const router = express.Router();

router.use((req,res,next)=>{
    req.requestTime = Date.now()
    next();
})

router.get("/",(req,res)=>{
    res.json({ arrivalTime: req.requestTime })
});
export default router;