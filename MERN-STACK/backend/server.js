import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { userRoutes } from "./routes/authRoutes/authRoutes.js";
import { studRoutes } from "./routes/studentRoutes/stuRoutes.js";
import { teachRoutes } from "./routes/teacherRoutes/teacherRoutes.js";
import { courseRoutes } from "./routes/courseRoutes/courseRoutes.js";
import { attendRoutes } from "./routes/students/attendRoutes.js";
dotenv.config();

const app = express();
app.use(express.json());

// routes
app.use("/api/auth", userRoutes);
app.use("/api", studRoutes);
app.use("/api", teachRoutes);
app.use("/api", courseRoutes);
app.use("/api",attendRoutes)

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

// for async error handle in whole backend
process.on("unhandledRejection", (error) => {
  console.log(`unhandledRejection error ${error.message}`);
});

// for sync error handle in whole backend
process.on("uncaughtException", (error) => {
  console.log(`uncaughtException error ${error.message}`);
});
