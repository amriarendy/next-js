import connectToDB from "@/config/database";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: "#####",
      clientSecret: "#####",
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.providers === "google") {
        const { name, email } = user;
        try {
          await connectToDB();
          const isUserExists = await User.findOne({ email });
          if (!isUserExists) {
            const res = await fetch("/api/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name, email }),
            });
            if (res.success) {
              return user;
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
      return user;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
