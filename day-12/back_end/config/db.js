import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("mongo is connected");
  } catch (error) {
    console.error(`error in mongodb connection error : ${error.message}`);
  }
};
