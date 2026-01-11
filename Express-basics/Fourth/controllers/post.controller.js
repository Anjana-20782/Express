import mongoose from "mongoose";
import Post from "../models/Post.model.js";
import catchAsync from "../utils/catchAsync.js";

// Create posts
export const createPost = catchAsync(async (req, res) => {
  const data = Array.isArray(req.body)
    ? req.body.map(item => ({ ...item, author: new mongoose.Types.ObjectId(item.author) }))
    : { ...req.body, author: new mongoose.Types.ObjectId(req.body.author) };

  const posts = await Post.insertMany(Array.isArray(data) ? data : [data]);
  res.status(201).json({ status: "success", data: posts });
});

// Get posts with populated authors
export const getPosts = catchAsync(async (req, res) => {
  const posts = await Post.find().populate("author");
  res.json({ status: "success", data: posts });
});
