import rateLimit from "express-rate-limit";

const rateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 100, // limit each IP to 100 requests per window
  message: {
    status: "fail",
    message: "Too many requests, please try again after 1 hour",
  },
});

export default rateLimiter;
