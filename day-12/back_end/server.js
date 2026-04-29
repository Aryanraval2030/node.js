import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDb } from "./config/db.js";
import route from "./routes/categoryRoute.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", route);

const serverStart = async () => {
  try {
    await connectDb();

    app.listen(process.env.PORT, () => {
      console.log(`server is runnig..${process.env.PORT}`);
    });
  } catch (error) {
    console.error(`error in start server : ${error.message}`);
  }
};

serverStart();

//handle async error in whole backend folders
process.on("unhandledRejection", (err) => {
  console.error(`unhandledRejection error : ${err.message}`);
});

//handle sync error in whole backend folders
process.on("uncaughtException", (err) => {
  console.error(`uncaughtException error : ${err.message}`);
});
