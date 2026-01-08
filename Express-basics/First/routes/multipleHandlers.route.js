import express from "express";
const router = express.Router();

const step1 = (req, res, next) => {
  console.log("Step 1");
  next();
};

const step2 = (req, res) => {
  console.log("Step 2");
  res.send("Completed all steps!");
};

router.get("/", step1, step2);

export default router;