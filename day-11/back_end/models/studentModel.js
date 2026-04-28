import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  course: {
    type: String,
    required: true,
  },
  fees: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
  },
});

export const userModel = mongoose.model("users", userSchema);
