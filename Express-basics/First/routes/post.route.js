import express from "express";
const router = express.Router();

router.post("/msg", (req, res) => {
  res.send("Message Received");
});

export default router;
