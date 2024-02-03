import { compare } from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import { users } from "@/schema/user";
import { eq } from "drizzle-orm";
import db from "@/db/database";

const providers = [
  CredentialsProvider({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: "Credentials",

    credentials: {
      email: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials, req) {
      const currentUser = await db.select().from(users).where(eq(users.email, credentials.email));

      let passwordsMatch = await compare(
        credentials.password,
        currentUser[0].password
      );

      if (passwordsMatch) {
        delete currentUser[0].password;
        return currentUser[0];
      } else throw new Error("Invalid Password");
    },
    pages: {
      signIn: "/auth/login",
      // error: '/auth/error',
      // signOut: '/auth/signout'
    },
    callbacks: {
      jwt(params) {
        // update token
        if (params.user?.role) {
          params.token.role = params.user.role;
        }
        // return final_token
        return params.token;
      },
    },
  }),
];

const handler = NextAuth({
  providers,
});

export { handler as GET, handler as POST };
