import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOtpEmail(email, otp) {
  const logoUrl = 'https://i.ibb.co/BV88qHp3/IMG-20260224-105608.png';

  try {
    const data = await resend.emails.send({
      from: 'JSS Originals <login@jssoriginals.online>',
      to: [email],
      subject: `JSS Originals verification code is ${otp}`,
     html: `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f6f6f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;background:#f6f6f8;">
<tr>
<td align="center">

<table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:20px;padding:55px 42px;box-shadow:0 20px 60px rgba(0,0,0,0.06);">

<!-- logo -->
<tr>
<td align="center" style="padding-bottom:24px;">
<img src="${logoUrl}" width="66" style="border-radius:16px;">
</td>
</tr>

<!-- heading -->
<tr>
<td align="center" style="padding-bottom:8px;">
<div style="font-size:28px;font-weight:600;color:#0b0b0c;letter-spacing:-0.3px;">
JSS ORIGINALS
</div>
</td>
</tr>

<!-- subtitle -->
<tr>
<td align="center" style="padding-bottom:34px;">
<div style="font-size:15px;color:#6e6e73;line-height:1.7;">
A private sign-in request was initiated for<br>
<strong style="color:#111;">Secure Verification</strong>.<br>
Use the secure code below to continue.
</div>
</td>
</tr>

<!-- otp label -->
<tr>
<td align="center" style="padding-bottom:10px;">
<div style="font-size:12px;letter-spacing:2px;color:#9a9aa1;text-transform:uppercase;">
Your private access code
</div>
</td>
</tr>

<!-- OTP box -->
<tr>
<td align="center" style="padding-bottom:38px;">

<div style="
display:inline-block;
padding:26px 36px;
border-radius:16px;
background:linear-gradient(180deg,#fbfbfc,#f1f1f4);
border:1px solid #e6e6eb;
box-shadow:0 8px 25px rgba(0,0,0,0.04);
">

<div style="
font-size:46px;
letter-spacing:14px;
font-weight:700;
color:#111;
font-family:SFMono-Regular,Menlo,Monaco,Consolas,monospace;
">
${otp}
</div>

</div>

</td>
</tr>

<!-- expiry -->
<tr>
<td align="center" style="padding-bottom:30px;">
<div style="font-size:14px;color:#8e8e93;line-height:1.6;">
This code is valid for the next 5 minutes.<br>
Issued securely for your current session.
</div>
</td>
</tr>

<!-- divider -->
<tr>
<td align="center" style="padding:18px 0 0 0;">
<div style="height:1px;background:#f0f0f2;width:100%;"></div>
</td>
</tr>

<!-- footer -->
<tr>
<td align="center" style="padding-top:22px;">
<div style="font-size:12px;color:#b6b6bb;">
© 2026 JSS Originals
</div>
<div style="font-size:12px;color:#b6b6bb;margin-top:4px;">
Rajasthan, India
</div>
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
