import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Server Connected");
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};
