import NextAuth, { DefaultSession, User } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's. */
      image?: string;
      name: string;
      role: number;
      email?: string;
      facebook?: string;
      school: string;
      database: string;
    };
    // & DefaultSession["user"];
  }
}
