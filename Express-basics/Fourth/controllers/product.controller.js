import Product from "../models/Product.model.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/AppError.js";


export const getProducts = catchAsync(async (req, res) => {
  const queryObj = {};

  // filter by category
  if (req.query.category) {
    queryObj.category = req.query.category;
  }

  // filter by price greater than
  if (req.query.price_gt) {
    queryObj.price = { $gt: Number(req.query.price_gt) };
  }

  const products = await Product.find(queryObj);

  res.status(200).json({
    count: products.length,
    data: products,
  });
});


// export const getProducts = async (req, res) => {
//   const products = await Product.find();             //36
//   res.json(products);
// };

// export const getProducts = catchAsync(async (req, res) => {
//   throw new Error("Test error from catchAsync");            //37
// });


// export const getProducts = catchAsync(async (req, res, next) => {
//   const products = await Product.find();

//   if (!products.length) {
//     return next(new AppError("No products found", 404));               // 38
//   }

//   res.status(200).json({
//     status: "success",
//     results: products.length,
//     data: products,
//   });
// });

// export const createProduct = async (req, res) => {
//   const product = await Product.create(req.body);                //36 or 37
//   res.status(201).json(product);
// };

export const createProduct = catchAsync(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({                                            //38 or 39
    status: "success",
    data: product,
  });
});