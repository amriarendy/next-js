import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  visitors: Number,
  sales: Number,
  month: String,
});

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
