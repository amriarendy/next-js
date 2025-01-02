import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials"
import { signIn } from "next-auth/react";

const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialProvider({
            type: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email"},
                fullname: {label: "Full Name", type: "text"},
                password: { label: "Password", type: "password"},
            },
            async authorize(credentials) {
                        const { email, password, fullname} = credentials as {
                            email: string,
                            password: string,
                            fullname: string,
                        };
                // const user: any = { id: 1, email: email, password: password, fullname: fullname, };
                const user: any = {
                    id: 1,
                    fullname: "Jhon Doe",
                    email: "jhon@gmail.com",
                    role: "admin"
                }
                if (user) {
                    return user;
                } else {
                    return null
                }
            }
        }),
    ],
    callbacks: {
        async jwt({token, account, profile, user}: any) {
            if (account?.provider === "credentials") {
                token.email = user.email;
                token.fullname = user.fullname;
                token.role = user.role;
            }
            return token;
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
            return session
        }
    },
    pages: {
        signIn: '/login',
    },
}

const handlre = NextAuth(authOptions);

export {
    handlre as GET, handlre as POST
}