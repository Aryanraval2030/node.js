import mongoose from "mongoose";

const postLike = new mongoose.Schema({
 likes: {
  type: [mongoose.Schema.Types.ObjectId],
  ref: "user",
  default: []
}
});

export const likePost = mongoose.model("likes", postLike);
