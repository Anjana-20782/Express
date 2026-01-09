import express from "express";
import User from "../models/User.model.js";

const router = express.Router();

/* 23 – CREATE RECORD */
router.post("/", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    if (error.code === 11000) {                             //http://localhost:5050/users--post
      return res.status(400).json({
        error: "Email already exists"
      });
    }
    next(error);
  }
});

/* 24 – FIND BY ID */
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {                                                         //http://localhost:5050/users/65b1c2e4f91a3c7d8a9b1234--get
    res.status(500).json({ error: error.message });
  }
});

// 25 – UPDATE USER BY ID
router.put("/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(          //http://localhost:5050/users/65b1c2e4f91a3c7d8a9b1234---put
    req.params.id,
    { email: req.body.email },
    { new: true }
  );
  res.json(user);
});


export default router;
