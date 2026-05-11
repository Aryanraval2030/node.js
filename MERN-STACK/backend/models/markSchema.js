import mongoose from "mongoose";

const marksSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student",
      required: true,
    },
    subject: {
      type: String,
      required: true,
      trim: true,
    },
    marks: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const marks = mongoose.model("marks", marksSchema);
