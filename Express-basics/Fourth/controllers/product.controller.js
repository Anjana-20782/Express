import Product from "../models/Product.model.js";
import catchAsync from "../utils/catchAsync.js";

// export const getProducts = async (req, res) => {
//   const products = await Product.find();             //36
//   res.json(products);
// };

export const getProducts = catchAsync(async (req, res) => {
  throw new Error("Test error from catchAsync");            //37
});


export const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
};
