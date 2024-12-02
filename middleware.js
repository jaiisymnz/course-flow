import { middleware as adminMiddleware } from "./middlewares/admin";

export async function middleware(req) {
  const pathname = new URL(req.url).pathname;

  if (pathname.startsWith("/admin")) {
    return adminMiddleware(req);
  }

  return Response.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
