import express from "express";
import User from "../models/User.model.js";

const router = express.Router();

console.log("===router");

router.post("/create", async (req, res) => {
  try {
    console.log("post request");

    const user = await User.create(req.body);
    res.status(202).json(user);
  } catch (error) {
    console.log(error);
  }
});
export default router;
