import NextAuth from "next-auth"
import { UserRole } from "@prisma/client"
import { PrismaAdapter } from "@auth/prisma-adapter"

import { db } from "@/lib/db"
import authConfig from "@/auth.config"
import { getUserById } from "@/data/user"

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async session ({ session, token}) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }
      return session;
    },
    async jwt ({ token }) {
      if (!token.sub) return token;
      // if there is a token, we want to get the user by the token.sub
      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;
      // if there is a user, we want to assign user role to the token
      token.role = existingUser.role;

      return token;
    },
  },
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt"},
    ...authConfig,
})