import GoogleProvider from "next-auth/providers/google";
import NextAuth, { Session, NextAuthOptions } from "next-auth";
import type { NextApiRequest, NextApiResponse } from "next";

interface CustomSession extends Session {
  accessToken: string;
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, authOptions);
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      const customeSession = session as CustomSession;
      customeSession.accessToken = (token.accessToken as string) ?? "";

      return customeSession;
    },
    async signIn() {
      console.log("サインイン");
      return true;
    },
    async redirect() {
      return "/";
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
};
