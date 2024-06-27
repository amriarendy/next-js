import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/nextdb");
    console.log("MongoDB Connected..");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
