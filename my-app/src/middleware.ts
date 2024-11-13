import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const cookieStore = cookies();
  
  const role = cookieStore.get("role")?.value;
  const isAuthenticated = cookieStore.get("authenticated")?.value === "true";

  // Allow home page access without authentication
  if (path === "/") {
    return NextResponse.next();
  }

  // Handle authentication
  if (!isAuthenticated && path !== "/auth/login") {
    const url = req.nextUrl.clone();
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);  
  }

  // Redirect authenticated users trying to access login
  if (path === "/auth/login" && isAuthenticated) {
    const url = req.nextUrl.clone();
    url.pathname = "/admin/Dashboard";
    return NextResponse.redirect(url);
  }

  // Check admin authorization for admin routes
  if (path.startsWith("/admin") && role !== "Admin") {
    return NextResponse.json(
      { message: "You are not authorized to view this page" },
      { status: 401 }
    );
  }

  return NextResponse.next();
}

// Supports both a single string value or an array of matchers
export const config = {
  matcher: ["/", "/auth/login", "/admin/:path*"],
};