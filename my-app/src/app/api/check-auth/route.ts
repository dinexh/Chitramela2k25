import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
interface ErrorResponse {
  error: string;
}

interface AuthResponse {
  authenticated: boolean;
}
export async function GET(request: Request): Promise<NextResponse<ErrorResponse | AuthResponse>> {
  try {
    const token = request.headers.get('cookie')?.split('token=')[1]?.split(';')[0];

    if (!token) {
      return NextResponse.json({ error: 'No token found' }, { status: 401 });
    }

    // Verify the token
    await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );

    return NextResponse.json({ authenticated: true }, { status: 200 });
  } catch {
    // Optional: log error if debugging
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
}
