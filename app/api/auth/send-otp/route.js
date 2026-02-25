import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Otp from '@/models/Otp';
import { sendOtpEmail } from '@/lib/resend';

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // 1. Database Connect (Crash se bachne ke liye)
    await connectToDatabase();

    // 2. OTP Generate (6 Digit Random)
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // 3. Purana Kachra Saaf Karo (Cleanup)
    // Agar is user ka pehle se koi OTP pada hai to delete karo
    await Otp.deleteMany({ email });

    // 4. Naya OTP Save Karo (5 minute baad apne aap udd jayega)
    await Otp.create({ email, otp });

    // 5. Email Bhejo
    const emailResult = await sendOtpEmail(email, otp);

    if (!emailResult.success) {
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'OTP sent successfully' });

  } catch (error) {
    console.error('OTP Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
