// if (authHeader && authHeader.startsWith("Bearer ")) {
import jwt from "jsonwebtoken";

export const authMiddleware =  (req, res, next) => {
  try {
    const authHeader = req.headers.token;
    if (!authHeader) {
      return res.status(404).json({
        status: false,
        message: "token not found",
      });
    }
    const token = authHeader.split(" ")[1];

    const authVerification = jwt.verify(token, process.env.JWT_SECRET);

    req.user = authVerification;
    next();
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in auth-varification ${error.message}`,
    });
  }
};

