import express from "express";
import dotenv from "dotenv";
import allRoutes from "./src/routes/allRoutes.js";

import { connectDb } from "./src/config/db.js";
dotenv.config;

const app = express();
app.use(express.json());

await connectDb();

app.use("/api", allRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log("server is runing..");
});
