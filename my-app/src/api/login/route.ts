import { NextResponse } from 'next/server';
import pool from '@/config/db';
import jwt from 'jsonwebtoken';
import { RowDataPacket, FieldPacket } from 'mysql2/promise';

interface AdminRow extends RowDataPacket {
  id: number;
  username: string;
  password: string;
}
export async function POST(request: Request) {
  try {
    console.log('Login attempt started');
    const { username, password } = await request.json();
    
    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    // Test database connection first
    let connection;
    try {
      connection = await pool.getConnection();
      console.log('Database connected successfully');
    } catch (dbError) {
      console.error('Database connection error:', dbError);
      return NextResponse.json(
        { error: 'Database connection failed', details: dbError instanceof Error ? dbError.message : 'Unknown error' },
        { status: 500 }
      );
    }

    try {
      // Get admin from the database
      console.log('Querying database for user');
      const [rows]: [AdminRow[], FieldPacket[]] = await connection.query(
        'SELECT * FROM admin WHERE username = ? AND password = ?',
        [username, password]
      );
      console.log('Query completed, found rows:', rows.length);

      if (rows.length === 0) {
        console.log('Invalid credentials - no matching user found');
        return NextResponse.json(
          { error: 'Invalid credentials' },
          { status: 401 }
        );
      }

      const admin = rows[0];
      console.log('User found, creating JWT');

      const token = jwt.sign(
        { id: admin.id, username: admin.username },
        process.env.JWT_SECRET || 'default_secret',
        { expiresIn: '1d' }
      );
      console.log('JWT created successfully');

      const response = NextResponse.json(
        { success: true, message: 'Login successful' },
        { status: 200 }
      );

      response.cookies.set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 86400,
        path: '/',
      });
      console.log('Cookie set successfully');

      return response;
    } finally {
      connection.release();
    }

  } catch (error: unknown) {
    console.error('Login error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error details:', errorMessage);
    return NextResponse.json(
      { error: 'Internal server error', details: errorMessage },
      { status: 500 }
    );
  }
}
