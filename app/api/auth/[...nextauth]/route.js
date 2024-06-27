import connectToDB from "@/database";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: "PUT_YOUR_CLIENT_ID",
      clientSecret: "TYPE_YOUR_CLIENT_SECRET",
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { name, email } = user;
        try {
          await connectToDB();
          const isUserExists = await User.findOne({ email });
          if (!isUserExists) {
            const res = await fetch("http://localhost:3000/api/user", {
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
          console.log("console error at /api/auth/nextauth/route.js", error);
        }
      }
      return user;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
