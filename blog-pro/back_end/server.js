import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./src/config/db.js";
import { userRoutes } from "./src/routes/auth_routes.js";
import { curdRoutes } from "./src/routes/post.routes.js";
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
