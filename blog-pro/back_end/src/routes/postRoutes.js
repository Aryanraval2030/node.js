import express from "express";
import {
  comment,
  createPost,
  deletePost,
  getComments,
  getPost,
  getSiglePost,
  likesPost,
  updatePost,
} from "../controllers/postController.js";
import { authMiddlware } from "../middleware/authMiddleware.js";
import { ownershipMiddleware } from "../middleware/ownershipMiddleware.js";

export const curdRoutes = express.Router();

curdRoutes.post("/create", authMiddlware, createPost);
curdRoutes.get("/", authMiddlware, getPost);
curdRoutes.get("/post/:id", authMiddlware, getSiglePost);
curdRoutes.put("/update/:id", authMiddlware, ownershipMiddleware, updatePost);
curdRoutes.delete("/delete/:id", authMiddlware, deletePost);
curdRoutes.post("/comment/:postId", authMiddlware, comment);
curdRoutes.get("/getcomments/:postId", getComments);
curdRoutes.post("/like/:postId", authMiddlware, likesPost);
