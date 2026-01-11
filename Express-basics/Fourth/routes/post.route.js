import express from "express";
import { createPost, getPosts } from "../controllers/post.controller.js";

const router = express.Router();

router.post("/", createPost); // Create posts
router.get("/", getPosts);    // Get posts with populated author

export default router;
