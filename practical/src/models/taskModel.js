import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: "String",
      required: true,
    },
    description: {
      type: "String",
    },
    status: {
      type: String,
      default: "pending",
    },
    priority: {
      type: "String",
      required: true,
    },
    deadline: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userRegister",
    },
  },
  { timestamps: true },
);

export const userTask = mongoose.model("userTask", taskSchema);
