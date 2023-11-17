import { mongooseConnect } from "@/lib/mongoose";
import { User } from "@/models/User";

export default async function handle(req, res) {
  await mongooseConnect();
  const email = req.body.email;
  res.json(await User.findOne({ email }));
}
