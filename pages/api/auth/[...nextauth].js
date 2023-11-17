import { mongooseConnect } from "@/lib/mongoose";
import { User } from "@/models/User";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        try {
          await mongooseConnect();
          const foundUser = await User.findOne({ email: profile.email });

          if (!foundUser) {
            const newUser = new User({
              email: profile.email,
              name: profile.name,
              image: profile.picture,
            });
            await newUser.save();
          } else {
            return true;
          }
        } catch (error) {
          console.log(error);
        }
      }
      return true;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_AUTH_TOKEN,
};

export default NextAuth(authOptions);
