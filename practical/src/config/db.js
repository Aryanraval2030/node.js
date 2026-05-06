import mongoose from "mongoose";

export const connectDb = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb connected");
  } catch (error) {
    console.log(`mongodb connection error : ${error.message}`);
  }
};
