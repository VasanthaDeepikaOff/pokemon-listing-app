import type { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Define User type
type APIUser = {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
};

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Record<"username" | "password", string> | undefined      ): Promise<User | null> {
        try {
          const response = await fetch("https://dummyjson.com/users");
          const data = await response.json();
          const userList: APIUser[] = data.users;

          // Find user
          const user = userList.find(
            (u) =>
              u.username === credentials?.username &&
              u.password === credentials?.password
          );

          if (user) {
            return {
              id: String(user.id),
              name: `${user.firstName} ${user.lastName}`,
              email: user.email,
            };
          } else {
            return null;
          }
        } catch (error) {
          console.error("Authentication Error:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 300, // Session expires after 5 minutes (300 seconds)
  },
  pages: {
    signIn: "/login",
  },
};
