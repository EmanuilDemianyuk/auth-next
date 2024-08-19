import { type User, DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

interface UserWithRole extends User {
  role: "USER" | "ADMIN";
}

declare module "next-auth" {
  interface Session {
    user: UserWithRole;
    expires: DefaultSession["expires"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: "USER" | "ADMIN";
  }
}
