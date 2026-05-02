import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";

export const middleWare =  (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "no token here" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log(decoded);
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export const validate =  (req, res, next) => {
  try {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({
        status: false,
        errors: error.array(),
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      status: false,
      errors: error.message,
    });
  }
};
