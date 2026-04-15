import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDb = async () => {
  try {
    const mongoUrl = process.env.MONGO_URI;
    await mongoose.connect(mongoUrl);
    console.log(`mongodb is connected`);
  } catch (error) {
    console.error("mongodb connection error:", error.message);
    process.exit(1);
  }
};
