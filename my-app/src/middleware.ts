import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith('/admin/dashboard')) {
    return NextResponse.next();
  }

  const token = request.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    // Only verify the token, without destructuring the payload
    await jwtVerify(token, secret, {
      algorithms: ['HS256'],
    });

    return NextResponse.next();
  } catch (error) {
    console.error('Token verification failed:', error);
    const response = NextResponse.redirect(new URL('/admin/login', request.url));
    response.cookies.delete('token');
    return response;
  }
}

export const config = {
  matcher: ['/admin/dashboard/:path*']
}; 