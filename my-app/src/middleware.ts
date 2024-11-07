import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify, createRemoteJWKSet } from 'jose';

export async function middleware(request: NextRequest) {
  // Only apply middleware to dashboard routes
  if (!request.nextUrl.pathname.startsWith('/admin/dashboard')) {
    return NextResponse.next();
  }

  const token = request.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  try {
    // Convert JWT_SECRET to Uint8Array for jose
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    
    // Verify the token
    const { payload } = await jwtVerify(token, secret, {
      algorithms: ['HS256'], // Specify the algorithm
    });

    // Verify successful, continue
    return NextResponse.next();
  } catch (error) {
    console.error('Token verification failed:', error);
    // Clear the invalid token
    const response = NextResponse.redirect(new URL('/admin/login', request.url));
    response.cookies.delete('token');
    return response;
  }
}

export const config = {
  matcher: ['/admin/dashboard/:path*']
}; 