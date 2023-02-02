import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  log: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Log", logSchema);
