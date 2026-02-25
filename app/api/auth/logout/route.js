import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  try {
    // 1. Cookie Delete karo
    // Hum browser ko bol rahe hain: "Is cookie ki expiry abhi turant khatam kar do"
    cookies().delete('auth-token');

    return NextResponse.json({ 
      success: true, 
      message: 'Logged out successfully' 
    });

  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
