import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { userRoutes } from "./routes/userRoutes.js";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/auth", userRoutes);

const serverStart = () => {
  try {
    connectDB();
    app.listen(process.env.PORT, () => {
      console.log("Server Is Running");
    });
  } catch (error) {
    console.log(`error in serverRun ${error.message}`);
  }
};

serverStart();

// for async error handle
process.on("unhandledRejection", (error) => {
  console.log(`unhandledRejection error ${error.message}`);
});

// for sync error handle
process.on("uncaughtException", (error) => {
  console.log(`uncaughtException error ${error.message}`);
});
