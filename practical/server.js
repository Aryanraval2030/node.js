import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./src/config/db.js";
import { userRoutes } from "./src/routes/userRoutes.js";
import { taskRoutes } from "./src/routes/taskRoutes.js";

const app = express();
app.use(express.json());
app.use("/api/auth", userRoutes);
app.use("/api",taskRoutes);
dotenv.config();

const serverRun = async () => {
  try {
    await connectDb();
    app.listen(process.env.PORT, () => {
      console.log(`server is runing in ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(`error in serverRun ${error.message}`);
  }
};

serverRun();
