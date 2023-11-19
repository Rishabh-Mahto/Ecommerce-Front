import { mongooseConnect } from "@/lib/mongoose";
import { User } from "@/models/User";

export default async function handler(req, res) {
  await mongooseConnect();
  const email = req.body.email;
  const phone = `+91${req.body.phone.toString()}`;
  try {
    await User.updateOne(
      { email: email },
      {
        $set: {
          phone: phone,
        },
      }
    );
    res.status(200).json({ message: "Phone number added successfully" });
  } catch (error) {
    console.log("Error Adding Phone", error);
  }
}
