import jwt from "jsonwebtoken";
import { postUser } from "../models/postModel.js";

export const ownershipMiddleware = async (req, res, next) => {
  try {
    const { id } = req.params; // postId

    const findPost = await postUser.findById(id);

    if (!findPost) {
      return res.status(404).json({
        status: false,
        message: "post not found",
      });
    }

    if (findPost.authorId.toString() !== req.user.id) {
      return res.status(403).json({
        status: false,
        message: "you are not owner of this post",
      });
    }

    next();
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in ownershipMiddleware ${error.message}`,
    });
  }
};
