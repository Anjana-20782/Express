import express from "express";
import User from "../models/User.model.js";
import { protect } from "../middlewares/auth.middleware.js";
import upload  from "../uploads/upload.multer.js";

const router = express.Router();

/* CREATE USER (PUBLIC) */
router.post("/", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ error: "Email already exists" });
    }
    next(error);
  }
});

//34. pagination

router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const users = await User.find()
      .skip(skip)
      .limit(limit);

    const totalUsers = await User.countDocuments();

    res.json({
      page,
      limit,
      totalUsers,
      usersReturned: users.length,
      users
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//profile upload

router.post(
  "/upload",
  upload.single("image"),
  (req, res) => {
    res.json({
      message: "File uploaded successfully",
      file: req.file
    });
  }
);


/* GET USER BY ID (PROTECTED) */
router.get("/:id", protect, async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

/* UPDATE USER (PROTECTED) */
router.put("/:id", protect, async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { email: req.body.email },
    { new: true }
  );
  res.json(user);
});

/* DELETE USER (PROTECTED) */
router.delete("/:id", protect, async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User Deleted" });
});

export default router;
