import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/token';
import connectToDatabase from '@/lib/db';
import User from '@/models/User';

export async function GET() {
  try {
    // 1. Cookie se Token nikalo
    const cookieStore = cookies();
    const token = cookieStore.get('auth-token');

    if (!token) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    // 2. Token Verify karo (Digital ID check)
    // Agar token fake ya expired hai to null milega
    const payload = await verifyToken(token.value);

    if (!payload) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    // 3. Database se taza data lao
    await connectToDatabase();
    
    // Password wapas mat bhejna (waise humare schema mein password hai hi nahi)
    // .select('-password') likhne ki aadat daal lo future ke liye
    const user = await User.findById(payload.id).select('-password');

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ 
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role
      } 
    });

  } catch (error) {
    console.error('Me API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
