import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(404).send("404 Page Not Found");
});

export default router;
