// routes/auth.route.js
import express from "express";
import { body, validationResult } from "express-validator";
import User from "../models/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

// signup
router.post(
  "/signup",
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;
    console.log(password,"before hash");
    

    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log(hashedPassword);
      

      // Save user with hashed password
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
      });

      console.log(user,"after hash");

      

      res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
      if (error.code === 11000)
        return res.status(400).json({ error: "Email already exists" });
      res.status(500).json({ error: error.message });
    }
  }
);

// login
router.post(
  "/login",
  body("email").isEmail(),
  body("password").exists(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: "User not found" });

      // Compare password
      console.log(user,"user");
      
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: "Incorrect password" });

      // Create JWT token
      const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET || "your_jwt_secret",
        { expiresIn: "1h" }
      );
        
      res.json({ message: "Login Successful ", token });
     

      
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

export default router;