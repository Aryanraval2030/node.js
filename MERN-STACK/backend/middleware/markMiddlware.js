export const markMiddlware = async (req, res, next) => {
  try {
    if (req.user.role !== "teacher") {
      return res.status(403).json({
        status: false,
        message: "only teachers and admin can give marks",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: `error in mark middlware ${error.message}`,
    });
  }
};
