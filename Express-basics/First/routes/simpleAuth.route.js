import express from "express";
const router = express.Router();

const authMiddleware = (req,res,next)=>{
    if(req.query.token !== "123"){
        return res.status(401).send("401 Unauthorized")
    }
    next();
};

router.get("/secure",authMiddleware,(req,res)=>{
    res.send("Acess granted")
})
export default router