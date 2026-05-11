import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    subject: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

export const teacher = mogoose.model("teacher", teacherSchema);
