import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  res.send(`Data captured from form: ${req.body.name}`);
});

export default router;
