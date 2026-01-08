import express from "express";
const router = express.Router();

router.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

router.get("/home", (req, res) => {
  res.send("Welcome to Home!");
});

export default router;