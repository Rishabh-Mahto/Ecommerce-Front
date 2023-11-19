import { mongooseConnect } from "@/lib/mongoose";
import { User } from "@/models/User";

export default async function handler(req, res) {
  await mongooseConnect();
  const email = req.body.email;
  const address = req.body.address;
  try {
    await User.updateOne(
      { email: email },
      {
        $push: {
          address: {
            city: address.city,
            country: "India",
            state: address.state,
            streetAddress: address.streetAddress,
            postalCode: address.postalCode,
          },
        },
      }
    );
    res.status(200).json({ message: "Address added successfully" });
  } catch (error) {
    console.log("Error Adding Address", error);
  }
}
