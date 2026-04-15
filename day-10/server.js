import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDb } from "./src/config/db.js";
import userRoutes from "./src/routes/inrRoutes.js";

const app = express();
app.use(express.json());

const serverStart = async () => {
  try {
    app.use("/api", userRoutes);
    await connectDb();
    const port = process.env.PORT;

    app.listen(port, () => {
      console.log(`server is running..${port}`);
    });
  } catch (error) {
    console.error("server error:", error.message);
    process.exit(1);
  }
};

serverStart();

// for handle async error in whole server
process.on("unhandledRejection", (error) => {
  console.error("uhandlerehection error:", error.message);
  process.exit(1);
});

// for handle sync error in whole server
process.on("uncaughtException", (error) => {
  console.error("uncaughtexception", error.message);
});
