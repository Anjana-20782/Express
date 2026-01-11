const catchAsync = fn => (req, res, next) =>
  fn(req, res, next).catch(next);
                                                //37
export default catchAsync;
