import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect("#####");
    console.log("MongoDB Connected..");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
