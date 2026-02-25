import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'; // Cookie set karne ke liye Next.js ka tool
import connectToDatabase from '@/lib/db';
import Otp from '@/models/Otp';
import User from '@/models/User';
import { signToken } from '@/lib/token';

export async function POST(req) {
  try {
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return NextResponse.json({ error: 'Email and OTP are required' }, { status: 400 });
    }

    // 1. Database Connect
    await connectToDatabase();

    // 2. OTP Verify
    // Hum database mein dhoondenge: "Kya is email ke liye ye OTP exist karta hai?"
    const otpRecord = await Otp.findOne({ email }).sort({ createdAt: -1 });

    if (!otpRecord || otpRecord.otp !== otp) {
      return NextResponse.json({ error: 'Invalid or Expired OTP' }, { status: 401 });
    }

    // 3. User Find or Create (Auto-Register Logic)
    // Agar user pehle se hai to thik, nahi to naya account banao
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    // 4. Generate JWT Token (Digital ID Card) 🎫
    // Is token mein user ki ID chupi hogi
    const token = await signToken({ 
      id: user._id, 
      email: user.email, 
      role: user.role 
    });

    // 5. Set HTTP-Only Cookie 🍪 (The Security Wall)
    // Hum token ko cookie mein daal rahe hain taaki frontend se koi chura na sake
    cookies().set('auth-token', token, {
      httpOnly: true, // JavaScript isse nahi padh sakta (XSS Safe)
      secure: process.env.NODE_ENV === 'production', // Sirf HTTPS par chalega production mein
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 7 Din tak login rahega
      path: '/',
    });

    // 6. Cleanup (Used OTP delete karo)
    // Security Rule: Ek OTP sirf ek baar use hona chahiye
    await Otp.deleteOne({ _id: otpRecord._id });

    return NextResponse.json({ success: true, message: 'Login Successful' });

  } catch (error) {
    console.error('Login Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
