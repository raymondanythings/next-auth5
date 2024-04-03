import type { AdapterUser } from "@auth/core/adapters";
import type { DefaultJWT } from "/@auth/core/jwt";
import type { DefaultSession } from "next-auth";
import { UserRole } from "@prisma/client";

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
  id: string;
} & AdapterUser;

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
