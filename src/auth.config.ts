import type { NextAuthConfig } from "next-auth";

// 這份設定必須是 edge-safe（不可 import prisma / bcryptjs），
// 因為它會被 middleware.ts 載入。真正需要 Node 的 Credentials provider
// 放在 auth.ts 內合併進來。
const protectedPrefixes = ["/learn", "/dashboard", "/course", "/knowledge"];

export const authConfig = {
  // 信任部署主機的 Host header：Vercel 會自動信任，但本機 `next start`
  // 與自訂網域需要顯式開啟，否則登入會回 500（UntrustedHost）。
  trustHost: true,
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [],
  callbacks: {
    // middleware 透過這個 callback 做「樂觀」的路由保護。
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isProtected = protectedPrefixes.some((p) =>
        nextUrl.pathname.startsWith(p),
      );
      if (isProtected) return isLoggedIn; // 未登入 -> 導向 pages.signIn
      return true;
    },
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        if (typeof token.id === "string") session.user.id = token.id;
        if (typeof token.name === "string") session.user.name = token.name;
      }
      return session;
    },
  },
} satisfies NextAuthConfig;
