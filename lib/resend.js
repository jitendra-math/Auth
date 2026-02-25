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
<meta charset="UTF-8">
<title>Verification Code</title>
</head>

<body style="margin:0;padding:0;background-color:#f5f5f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;background:#f5f5f7;">
<tr>
<td align="center">

<table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:18px;padding:50px 40px;box-shadow:0 10px 40px rgba(0,0,0,0.06);">

<!-- Logo -->
<tr>
<td align="center" style="padding-bottom:30px;">
<img src="${logoUrl}" width="64" style="border-radius:14px;">
</td>
</tr>

<!-- Heading -->
<tr>
<td align="center" style="padding-bottom:10px;">
<p style="margin:0;font-size:26px;font-weight:600;color:#0a0a0a;letter-spacing:-0.3px;">
Verify your login
</p>
</td>
</tr>

<!-- Subtitle -->
<tr>
<td align="center" style="padding-bottom:35px;">
<p style="margin:0;font-size:15px;color:#6e6e73;line-height:1.6;">
Use the secure verification code below to continue to<br>
<strong style="color:#0a0a0a;">JSS Originals</strong>
</p>
</td>
</tr>

<!-- OTP Box -->
<tr>
<td align="center" style="padding-bottom:35px;">

<div style="
display:inline-block;
padding:22px 34px;
border-radius:14px;
background:#f2f2f7;
border:1px solid #e5e5ea;
">

<span style="
font-size:42px;
letter-spacing:12px;
font-weight:700;
color:#111111;
font-family:SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace;
">
${otp}
</span>

</div>

</td>
</tr>

<!-- Info -->
<tr>
<td align="center" style="padding-bottom:30px;">
<p style="margin:0;font-size:14px;color:#8e8e93;line-height:1.6;">
This code will expire in 5 minutes.<br>
If you didn’t request this, you can safely ignore this email.
</p>
</td>
</tr>

<!-- Footer -->
<tr>
<td align="center" style="padding-top:25px;border-top:1px solid #f0f0f2;">
<p style="margin:0;font-size:12px;color:#b0b0b5;">
© 2026 JSS Originals
</p>
<p style="margin:6px 0 0 0;font-size:12px;color:#b0b0b5;">
Rajasthan, India
</p>
</td>
</tr>

</table>

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
