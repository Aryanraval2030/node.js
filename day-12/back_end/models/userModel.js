import mongoose from "mongoose";

const userRegisterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 4,
      max: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
      max: 8,
    },
    role: {
      type: String,
      enum: ["user", "seller"],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const userRegister = mongoose.model("userRegi", userRegisterSchema);
// name, email, password, role = user/seller
