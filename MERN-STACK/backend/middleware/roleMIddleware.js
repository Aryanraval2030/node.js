import jwt from "jsonwebtoken";

export const roleMiddleware = async (req, res, next) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({
        status: false,
        message: "Access denied. Only admin can add students or teachers",
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in role middleware ${error.message}`,
    });
  }
};
