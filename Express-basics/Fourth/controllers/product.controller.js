import Product from "../models/Product.model.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/AppError.js";

// export const getProducts = async (req, res) => {
//   const products = await Product.find();             //36
//   res.json(products);
// };

// export const getProducts = catchAsync(async (req, res) => {
//   throw new Error("Test error from catchAsync");            //37
// });


export const getProducts = catchAsync(async (req, res, next) => {
  const products = await Product.find();

  if (!products.length) {
    return next(new AppError("No products found", 404));
  }

  res.status(200).json({
    status: "success",
    results: products.length,
    data: products,
  });
});

// export const createProduct = async (req, res) => {
//   const product = await Product.create(req.body);
//   res.status(201).json(product);
// };

export const createProduct = catchAsync(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    status: "success",
    data: product,
  });
});