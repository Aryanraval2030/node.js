import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
      trim: true,
    },
    duration: {
      type: String,
    },
    fees: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

export const course = mongoose.model("course", courseSchema);
