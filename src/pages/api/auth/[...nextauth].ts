import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"

const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        // script auth credentials
        // CredentialsProvider({
        //     type: 'credentials',
        //     name: "Credentials",
        //     credentials: {
        //         email: {label: "Email", type: "email"},
        //         fullname: {label: "Full Name", type: "text"},
        //         password: { label: "Password", type: "password"}
        //     },
        //     async authorize(credentials) {
        //         const { email, password, fullname} = credentials as {
        //             email: string,
        //             password: string,
        //             fullname: string,
        //         };
        //         const user: any = { id: 1, email: email, password: password, fullname: fullname, };
        //         if (user) {
        //             return user;
        //         } else {
        //             return null
        //         }
        //     }
        // })
        GoogleProvider({
            clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || "",
        })
    ],
    callbacks: {
        async jwt({token, account, profile, user}: any) {
            if (account?.provider==="credentials") {
                token.email = user.email;
                token.fullname = user.fullname;
            }
            if (account?.provider === "google") {
                const data = {
                    fullname: user.name,
                    email: user.email,
                    image: user.image,
                    type: "google"
                }
                token.email = data.email;
                token.fullname = data.fullname;
                token.type = data.type;
                token.image = data.image;
            }
            return token
        },

        async session({session, token}: any) {
            if ("email" in token) {
                session.user.email = token.email
            }
            if ("fullname" in token) {
                session.user.fullname = token.fullname
            }
            if ("image" in token) {
                session.user.image = token.image
            }
            if ("role" in token) {
                session.user.role = token.role
            }
            console.log("session: ", session);
            
            return session
        }
    }
}

export default NextAuth(authOptions);