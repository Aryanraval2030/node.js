import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDb } from "./config/db.js";
import routes from "./routes/studentRoutes.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", routes);

const serverStart = async () => {
  try {
    await connectDb();
    app.listen(process.env.PORT, () => {
      console.log(`server is runnig in ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(`error in server file : ${error.message}`);
    process.exit(1);
  }
};

serverStart();

// for handle async error in whole server

process.on("unhandledRejection", (error) => {
  console.error("unhandledRejection error : ", error.message);
  process.exit(1);
});

// for handle sync error in whole server

process.on("uncaughtException", (error) => {
  console.log("uncaughtException error : ", error.message);
  process.exit(1);
});
