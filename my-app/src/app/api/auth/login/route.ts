"use server";

import { pool } from "../../../../config/db";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

async function isAuth(username: string, password: string) {
    try {
        console.log('Attempting authentication for username:', username);
        
        const query = `
            SELECT username, name, role, active, id
            FROM users 
            WHERE username = ? AND password = ? AND role = 'Admin'
            LIMIT 1
        `;
        
        console.log('Executing query:', query);
        console.log('Parameters:', [username, password]);

        const [rows] = await pool.query(query, [username, password]);
        
        console.log('Query result:', rows);

        const users = rows as any[];
        
        if (users.length === 0) {
            console.log('No user found');
            return null;
        }

        console.log('User found:', users[0]);
        return users[0];
    } catch (error) {
        console.error('Database query error:', error);
        console.error('Stack trace:', error instanceof Error ? error.stack : 'No stack trace');
        throw error;
    }
}

export async function POST(req: NextRequest) {
    try {
        console.log('Login request received');
        
        const body = await req.json();
        console.log('Request body:', { ...body, password: '[REDACTED]' });

        const { username, password } = body;

        if (!username || !password) {
            console.log('Missing credentials');
            return NextResponse.json(
                { message: "Username and password are required" },
                { status: 400 }
            );
        }

        console.log('Attempting authentication');
        const user = await isAuth(username, password);

        if (!user) {
            console.log('Authentication failed');
            return NextResponse.json(
                { message: "Invalid credentials" },
                { status: 401 }
            );
        }

        if (!user.active) {
            console.log('Account suspended');
            return NextResponse.json(
                { message: "Account suspended" },
                { status: 403 }
            );
        }

        console.log('Setting cookies');
        const expirationTime = new Date();
        expirationTime.setTime(expirationTime.getTime() + 15 * 60 * 1000);

        const cookieStore = cookies();
        cookieStore.set("authenticated", "true", {
            sameSite: "lax",
            secure: false,
            httpOnly: false,
            expires: expirationTime,
        });

        cookieStore.set("role", "Admin", {
            sameSite: "lax",
            secure: false,
            httpOnly: false,
            expires: expirationTime,
        });

        console.log('Authentication successful');
        return NextResponse.json({
            message: "Authenticated",
            id: user.id,
            username: user.username,
            name: user.name,
            role: user.role,
        });

    } catch (error: any) {
        console.error('Login error:', error);
        console.error('Error details:', {
            message: error.message,
            stack: error.stack,
            code: error.code,
            errno: error.errno,
            sqlMessage: error.sqlMessage,
            sqlState: error.sqlState
        });
        
        return NextResponse.json(
            { 
                message: "Internal server error",
                error: error.message,
                details: process.env.NODE_ENV === 'development' ? {
                    code: error.code,
                    errno: error.errno,
                    sqlMessage: error.sqlMessage
                } : undefined
            },
            { status: 500 }
        );
    }
}