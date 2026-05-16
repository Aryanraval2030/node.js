import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    studentName: {
      type: String,
      required: true,
    },
    rollNumber: {
      type: String,
      required: true,
      unique: true,
    },
    course: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course",
        required: true,
      },
    ],
    semester: {
      type: Number,
      required: true,
    },
    attendance: {
      type: String,
      required: true,
      default: 0,
    },
  },
  { timestamps: true },
);

export const studentSchema = mongoose.model("student", userSchema);
