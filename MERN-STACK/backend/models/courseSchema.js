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

// if same course in mongodb this is fetch error in db 
courseSchema.index(
  {
    courseName: 1,
    duration: 1,
    fees: 1,
  },
  {
    unique: true,
  },
);
export const course = mongoose.model("course", courseSchema);
