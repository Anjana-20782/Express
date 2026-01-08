import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  const userAgent = req.headers["user-agent"];
  res.send(`Your browser info: ${userAgent}`);
});

export default router;