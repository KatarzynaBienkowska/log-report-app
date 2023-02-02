import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/dbConn.js";
import logRoute from "./routes/log.js";

const app = express();
const PORT = 8080;
dotenv.config();

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/log", logRoute);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
