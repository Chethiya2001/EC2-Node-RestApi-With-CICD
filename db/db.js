import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose.set("strictQuery", false);

const uri = process.env.MONGO_DB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection established");
    console.log(uri);
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1);
  }
};

// Use ES module export
export default connectDB;
