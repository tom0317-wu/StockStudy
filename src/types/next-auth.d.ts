import type { DefaultSession } from "next-auth";

// 讓 session.user 帶上資料庫的 user id（供 API 讀寫進度使用）。
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
  }
}
