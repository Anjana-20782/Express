import User from "../models/User.model.js";
import catchAsync from "../utils/catchAsync.js";

// Existing function
// export const getAverageAge = catchAsync(async (req, res) => {
//   const result = await User.aggregate([
//     { $group: { _id: null, averageAge: { $avg: "$age" } } }
//   ]);
//   res.json(result[0]);
// });

// // NEW: create multiple users
// export const createUsers = catchAsync(async (req, res) => {
//   const users = await User.insertMany(req.body);
//   res.status(201).json({ status: "success", data: users });
// });

export const createUsers = catchAsync(async (req, res) => {
  const data = Array.isArray(req.body) ? req.body : [req.body];
  const users = await User.insertMany(data);
  res.status(201).json({ status: "success", data: users });
});

// Get average age of all users
export const getAverageAge = catchAsync(async (req, res) => {
  const result = await User.aggregate([
    {
      $group: {
        _id: null,
        averageAge: { $avg: "$age" }
      }
    }
  ]);
  res.json({ status: "success", data: result[0] });
});

// ✅ Get all users (needed for router)
export const getUsers = catchAsync(async (req, res) => {
  const users = await User.find();
  res.json({ status: "success", data: users });
});