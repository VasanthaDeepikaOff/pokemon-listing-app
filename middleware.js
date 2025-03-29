export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/pokemon/:path*", "/pokemon"], // Protect all subpaths
};
