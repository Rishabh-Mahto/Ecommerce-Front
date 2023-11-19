import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";

export default async function handler(req, res) {
  await mongooseConnect();
  try {
    const {
      productId,
      isRentOrder,
      status,
      userEmail,
      isDelivery,
      deliveryAddress,
      price,
    } = req.body;

    if (!productId) {
      return res
        .status(400)
        .json({ error: "productId is required in the request body" });
    }

    if (isRentOrder) {
      const newOrder = new Order({
        productId,
        isRentOrder,
        status,
        userEmail,
      });

      const savedOrder = await newOrder.save();

      res
        .status(201)
        .json({ message: "Order created successfully", data: savedOrder });
    } else {
      const newOrder = new Order({
        productId,
        isRentOrder,
        status,
        userEmail,
        isDelivery,
        deliveryAddress,
        price,
      });

      const savedOrder = await newOrder.save();

      res
        .status(201)
        .json({ message: "Order created successfully", data: savedOrder });
    }
  } catch (error) {
    console.log(error, "errored");
  }
}
