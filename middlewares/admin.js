import { getUserRole } from "@/lib/checkRole";

export async function middleware(req) {
  const role = await getUserRole(req);
  if (!role) {
    return Response.redirect(new URL("/", req.url));
  } else if (role !== "admin") {
    return Response.redirect(new URL("/admin", req.url));
  }
  return Response.next();
}
export const config = {
  matcher: ["/admin/:path*"],
};
