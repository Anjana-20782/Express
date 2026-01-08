import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body);
   res.send("Parser route is working. Send POST request with JSON.");
  res.json({ message: "JSON received", data: req.body });
});

export default router;
