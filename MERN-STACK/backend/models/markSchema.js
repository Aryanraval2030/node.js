import mongoose from "mongoose";

const marksSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student",
      required: true,
    },

    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "course",
      required: true,
    },

    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    rollNumber: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    mark: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const marks = mongoose.model("marks", marksSchema);
