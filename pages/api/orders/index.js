import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";

export default async function handle(req, res) {
  await mongooseConnect();
  const id = req.body.id;
  res.json(await Order.findOne({ _id: id }));
}
