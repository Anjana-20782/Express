import express from "express";
import { createUsers, getAverageAge, getUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", createUsers);            // Create users
router.get("/average-age", getAverageAge); // Get average age
router.get("/", getUsers);                // Get all users

export default router;
