import express from "express";

export const markRoutes = express.Router();

markRoutes.post("/marks", addMarks);
