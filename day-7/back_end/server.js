import express from "express";
import bookRoutes from "./routes/bookRoutes.js";
import { connectDb } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config;

const app = express();
app.use(express.json());

await connectDb();

app.use("/api", bookRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running port ${port}`);
});
