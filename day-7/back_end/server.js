import express from "express";
import mongoose from "mongoose";
import bookRoutes from "./routes/bookRoutes.js";

const app = express();

app.use(express.json());

// DB connection
mongoose
  .connect(
    "mongodb+srv://aryan2030:aryan682007@cluster0.wcopjgy.mongodb.net/books",
  )
  .then(() => console.log("DB connected"))
  .catch((error) => console.error(error));

app.use("/api", bookRoutes);

app.listen(6419, () => {
  console.log("server is running...");
});
