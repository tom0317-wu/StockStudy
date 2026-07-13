import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";

// Next.js 16 的 proxy 慣例（前身為 middleware）。
// 只載入 edge-safe 的 authConfig（不含 prisma/bcryptjs）。
// NextAuth(authConfig).auth 作為 proxy 函式：由 authConfig.callbacks.authorized
// 執行 /dashboard /course /knowledge 的登入保護。
export default NextAuth(authConfig).auth;

export const config = {
  // 排除靜態資源與 next-auth 自身的 API 路由，其餘皆經過保護判斷。
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
