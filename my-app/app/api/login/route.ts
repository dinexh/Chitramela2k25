import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // Ensure the request has the correct content-type
    if (req.headers.get('content-type') !== 'application/json') {
      return NextResponse.json(
        { success: false, error: 'Invalid content type' },
        { status: 400 }
      );
    }

    const { username, password } = await req.json();
    
    // Validate input
    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: 'Username and password are required' },
        { status: 400 }
      );
    }

    // Handle login logic here, e.g., validate credentials
    if (username === 'admin' && password === 'password123') {
      return NextResponse.json(
        { success: true },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, error: 'Invalid credentials' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Login API error:', error);
    return NextResponse.json(
      { success: false, error: 'An error occurred during login' },
      { status: 500 }
    );
  }
} 