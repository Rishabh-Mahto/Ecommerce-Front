import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handler(req, res) {
  await mongooseConnect();
  try {
    const products = await Product.find({});
    res.status(200).json({ name: "All Products", data: products });
  } catch (error) {
    console.log(error);
  }
}
