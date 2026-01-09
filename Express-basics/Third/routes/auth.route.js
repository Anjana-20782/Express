//27 – Input Validation

import express from "express";
import { body, validationResult } from "express-validator";
import User from "../models/User.model.js";

const router = express.Router();

router.post("/signup", body("email").isEmail(),body("password").isLength({ min: 6 }),async (req, res)=>{

     const errors = validationResult(req);
     if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });  // 400 if invalid
    }

    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.status(201).json({ message: "User created", user });
});

export default router;