import mongoose from "mongoose";

const assingmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  file: {
    type: String,
    required: true,
  },
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teacher",
    required: true,
  },
 courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "course",
    required: true,
  },

  dueDate: {
    type: Date,
    required: true,
  },
},  { timestamps: true },
);

export const assignment = mongoose.model("assingment", assingmentSchema);
