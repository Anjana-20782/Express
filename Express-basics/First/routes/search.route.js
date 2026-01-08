import express from "express"
const router = express.Router()

router.get("/",(req,res)=>{
     const q = req.query.q;
     res.send(`Searching for ${q}`)
    
})
export default router;