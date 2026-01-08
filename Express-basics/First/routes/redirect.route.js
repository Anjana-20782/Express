import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/old/new");  
});

router.get("/new", (req, res) => {
  res.send("You have been redirected to /old/new!");
});

export default router;
