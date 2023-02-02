import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.DATABASE_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
