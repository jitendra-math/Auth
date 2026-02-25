import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOtpEmail(email, otp) {
  const logoUrl = 'https://i.ibb.co/BV88qHp3/IMG-20260224-105608.png';

  try {
    const data = await resend.emails.send({
      from: 'JSS Originals <auth@jssoriginals.online>',
      to: [email],
      subject: `${otp} is your JSS Originals verification code`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
          </style>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, system-ui, sans-serif; background-color: #f4f4f7;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
            <tr>
              <td style="padding: 40px 0 20px 0; text-align: center;">
                <img src="${logoUrl}" alt="JSS Originals" width="80" style="border-radius: 12px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));">
              </td>
            </tr>
            <tr>
              <td style="padding: 20px 40px; text-align: center;">
                <h2 style="color: #1d1d1f; font-size: 24px; font-weight: 700; margin: 0;">Verify your identity</h2>
                <p style="color: #86868b; font-size: 16px; margin-top: 10px;">To continue to <strong>JSS Originals</strong>, use the following secure code.</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 30px 40px; text-align: center;">
                <div style="background-color: #f5f5f7; border-radius: 12px; padding: 24px; display: inline-block;">
                  <span style="font-family: monospace; font-size: 42px; font-weight: 700; letter-spacing: 8px; color: #0071e3; margin: 0;">${otp}</span>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px 40px; text-align: center;">
                <p style="color: #86868b; font-size: 14px; line-height: 1.5;"> This code will expire in 5 minutes. <br> If you did not request this code, please ignore this email.</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 30px 40px; text-align: center; border-top: 1px solid #f5f5f7;">
                <p style="color: #b6b6bb; font-size: 12px; margin: 0;">&copy; 2026 JSS Originals. All rights reserved.</p>
                <p style="color: #b6b6bb; font-size: 12px; margin-top: 5px;">Rajasthan, India</p>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    return { success: true, data };
  } catch (error) {
    console.error('Email Error:', error);
    return { success: false, error };
  }
}
