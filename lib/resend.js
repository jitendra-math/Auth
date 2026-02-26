import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOtpEmail(email, otp) {
  const logoUrl = 'https://i.ibb.co/BV88qHp3/IMG-20260224-105608.png';

  try {
    const data = await resend.emails.send({
      from: 'JSS Originals <login@jssoriginals.online>',
      to: [email],
      subject: `Website Proposal for Multipurpose Primary Gram Seva Sahkari Society Nimod`,
html: `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f5f6f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:50px 0;background:#f5f6f8;">
<tr>
<td align="center">

<table width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;background:#ffffff;border-radius:22px;padding:56px 46px;box-shadow:0 25px 70px rgba(0,0,0,0.08);">

<!-- logo -->
<tr>
<td align="center" style="padding-bottom:26px;">
<img src="${logoUrl}" width="72" style="border-radius:18px;">
</td>
</tr>

<!-- brand -->
<tr>
<td align="center" style="padding-bottom:6px;">
<div style="font-size:13px;letter-spacing:2px;color:#8e8e93;text-transform:uppercase;">
JSS Originals
</div>
</td>
</tr>

<!-- heading -->
<tr>
<td align="center" style="padding-bottom:18px;">
<div style="font-size:28px;font-weight:600;color:#0b0b0c;letter-spacing:-0.3px;">
Digital Presence Proposal
</div>
</td>
</tr>

<!-- greeting -->
<tr>
<td align="center" style="padding-bottom:28px;">
<div style="font-size:15px;color:#6e6e73;line-height:1.8;max-width:520px;">
आदरणीय महोदय,<br><br>
सादर नमस्कार।  
मैं <strong style="color:#111;">जितेन्द्र सिंह</strong>, निमोद का निवासी एवं  
<strong style="color:#111;">JSS Originals</strong> के अंतर्गत वेबसाइट एवं डिजिटल समाधान पर कार्य करता हूँ।
</div>
</td>
</tr>

<!-- society name highlight -->
<tr>
<td align="center" style="padding-bottom:28px;">

<div style="
display:inline-block;
padding:20px 28px;
border-radius:16px;
background:linear-gradient(180deg,#fbfbfc,#f1f2f6);
border:1px solid #e6e6eb;
box-shadow:0 10px 30px rgba(0,0,0,0.05);
">

<div style="font-size:16px;color:#111;font-weight:600;">
बहुउद्देशीय प्राथमिक ग्राम सेवा सहकारी सोसायटी निमोद
</div>

<div style="font-size:13px;color:#8e8e93;margin-top:6px;">
Multipurpose Primary Gram Seva Sahkari Society Nimod
</div>

</div>

</td>
</tr>

<!-- message -->
<tr>
<td align="center" style="padding-bottom:28px;">
<div style="font-size:15px;color:#5f6368;line-height:1.9;max-width:520px;">
वर्तमान समय में अधिकांश सहकारी समितियाँ अपनी आधिकारिक वेबसाइट के माध्यम से  
सेवाएँ, सूचनाएँ एवं योजनाएँ ऑनलाइन उपलब्ध करा रही हैं, जिससे सदस्यों एवं आम नागरिकों के लिए  
जानकारी अधिक सरल और विश्वसनीय बनती है।  

यदि भविष्य में सोसायटी अपनी आधिकारिक वेबसाइट या डिजिटल उपस्थिति विकसित करने पर विचार करे,  
तो मुझे एक पेशेवर प्रस्ताव प्रस्तुत करने का अवसर प्रदान करें।  
निमोद का निवासी होने के नाते अपनी स्थानीय संस्था के लिए गुणवत्तापूर्ण कार्य करना मेरे लिए गर्व की बात होगी।
</div>
</td>
</tr>

<!-- call line -->
<tr>
<td align="center" style="padding-bottom:34px;">
<div style="font-size:15px;color:#111;font-weight:500;">
आपकी सुविधा अनुसार संक्षिप्त चर्चा हेतु उपलब्ध हूँ।
</div>
</td>
</tr>

<!-- divider -->
<tr>
<td align="center">
<div style="height:1px;background:#f0f0f2;width:100%;margin:10px 0 24px 0;"></div>
</td>
</tr>

<!-- signature -->
<tr>
<td align="center">

<div style="font-size:16px;font-weight:600;color:#0b0b0c;">
जितेन्द्र सिंह
</div>

<div style="font-size:13px;color:#8e8e93;margin-top:6px;">
Founder — JSS Originals
</div>

<div style="font-size:13px;color:#8e8e93;margin-top:6px;">
Web & Digital Solutions
</div>

<div style="font-size:13px;color:#8e8e93;margin-top:6px;">
Nimod, Rajasthan
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
