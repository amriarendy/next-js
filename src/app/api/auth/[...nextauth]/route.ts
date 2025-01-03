import { login } from "@/lib/firebase/service";
import { compare } from "bcrypt";
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
                fullname: {label: "Full Name", type: "text"},
                email: { label: "Email", type: "email"},
                password: { label: "Password", type: "password"},
            },
            async authorize(credentials) {
                const { email, password } = credentials as {
                    email: string,
                    password: string,
                }
                const user: any = await login({ email });
                console.log("user: ", password);
                if (user) {
                    const passwordConfirm = await compare(password, user.password);
                    if (passwordConfirm) {
                        return user;
                    }
                    return null;
                } else {
                    return null;
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