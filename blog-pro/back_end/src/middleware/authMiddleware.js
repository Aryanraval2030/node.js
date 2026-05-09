import jwt from "jsonwebtoken";

export const authMiddlware = (req, res, next) => {
  try {
    const token = req.headers.token;
    if (!token) {
      return res.status(401).json({ message: "no token here" });
    }

    const checkToken = jwt.verify(token, process.env.JWT_SECRET);

    req.user = checkToken;
    next();
  } catch (error) {
    res.status(500).json({
      message: `error in authMiddlware ${error.message}`,
    });
  }
};
