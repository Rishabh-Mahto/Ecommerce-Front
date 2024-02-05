import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Order.findOne({ _id: req.query?.id }));
    } else if (req.query?.email) {
      res.json(await Order.find({ userEmail: req.query.email }));
    } else {
      res.json(await Order.find());
    }
  }

  if (method === "PUT") {
    if (req.query?.id) {
      res.json(
        await Order.updateOne(
          { _id: req.query?.id },
          { status: req.body.status }
        )
      );
    }
  }
}
