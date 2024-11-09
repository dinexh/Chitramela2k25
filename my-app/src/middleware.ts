import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token');
  const url = req.nextUrl.clone();
  const isAdminRoute = url.pathname.startsWith('/auth/dashboard');
  
  if (isAdminRoute) {
    if (!token || !token.value) {
      url.pathname = '/auth/login';
      url.searchParams.set('error', 'Please login to access this page');
      return NextResponse.redirect(url);
    }

    try {
      jwt.verify(token.value, process.env.ACCESS_TOKEN_SECRET as string);
      return NextResponse.next();
    } catch (error) {
      url.pathname = '/auth/login';
      url.searchParams.set('error', 'Session expired. Please login again');
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/auth/dashboard'],
};
