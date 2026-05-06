import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectDB } from "./config/Db.js";
import router from "./Routes/userRoutes.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", router);

const serverRun = () => {
  try {
    connectDB();

    app.listen(process.env.PORT, () => {
      console.log("Server Is Running");
    });
  } catch (error) {
    console.log(`error in serverRun ${error.message}`);
  }
};

serverRun();
