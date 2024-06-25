import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://amriarendy:amriarendy@cluster0.yynrcbu.mongodb.net/");
    console.log("MongoDB Connected..");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
