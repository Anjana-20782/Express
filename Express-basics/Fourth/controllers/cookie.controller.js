// controllers/cookie.controller.js
export const setCookie = (req, res) => {
  res.cookie("username", "anjana", {
    httpOnly: true, // prevents JS access
    secure: false,  // true if using HTTPS
    maxAge: 1000 * 60 * 60 // 1 hour
  });

  res.json({ message: "Cookie set successfully" });
};

export const readCookie = (req, res) => {
  res.json({
    cookie: req.cookies.username || null
  });
};
