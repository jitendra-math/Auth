import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOtpEmail(email, otp) {
  try {
    const data = await resend.emails.send({
      from: 'JSS Originals <auth@jssoriginals.online>', // Apna domain yahan update karna
      to: [email],
      subject: `Your Login OTP: ${otp} 🔐`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; text-align: center;">
          <h2>JSS Originals</h2>
          <p>Your OTP for login is:</p>
          <h1 style="color: #0070f3; font-size: 32px; letter-spacing: 5px;">${otp}</h1>
          <p>This code will expire in 5 minutes.</p>
          <p style="color: #888; font-size: 12px;">If you didn't request this, ignore this email.</p>
        </div>
      `,
    });

    return { success: true, data };
  } catch (error) {
    console.error('Email Error:', error);
    return { success: false, error };
  }
}
