import { model, Schema, models } from "mongoose";
import { mongoose } from "mongoose";

const ProductSchema = new Schema({
  title: { type: String, required: true },
  summary: String,
  price: { type: Number, required: true },
  images: [{ type: [String] }],
  category: { type: [String] },
  isRent: { type: Boolean, default: true },
  isBuy: { type: Boolean, default: true },
  languages: { type: [String] },
  discount: { type: Number, default: 0 },
  count: { type: Number },
  isMembership: { type: Boolean, default: false },
});

export const Product = models.Product || model("Product", ProductSchema);
