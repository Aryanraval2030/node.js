import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./src/config/db.js";
import { userRoutes } from "./src/routes/authRoutes.js";
import { curdRoutes } from "./src/routes/postRoutes.js";
let app = express();
app.use(express.json());
dotenv.config();
app.use("/api", userRoutes);
app.use("/api", curdRoutes);

const serverStart = () => {
  try {
    connectDb();

    app.listen(process.env.PORT, () => {
      console.log("server is runing");
    });
  } catch (error) {
    console.log("error");
  }
};

serverStart();

// for handle async error
process.on("unhandledRejection", (error) => {
  console.log(`error in unhandledRejection ${error.message}`);
});
// for handle sync error
process.on("uncaughtException", (error) => {
  console.log(`error in uncaughtException ${error.message}`);
});
