import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://lukezhuang_db_user:7KIvhiOC5m5gAQql@cluster0.jfmptcs.mongodb.net/?appName=Cluster0"
    );
    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.error("Error connecting to MONGODB", error);
  }
};
