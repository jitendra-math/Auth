import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOtpEmail(email, otp) {
  const logoUrl = 'https://iili.io/qflVTfn.md.png';

  try {
    const data = await resend.emails.send({
      from: 'Jitendra Singh (JSS Originals) <jitendra@jssoriginals.online>',
      to: [email],
      subject: `Regarding Official Website — Sahkari Society Nimod`,
html: `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f2f3f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f2f3f7;padding:40px 0;">
<tr>
<td align="center">

<table width="100%" cellpadding="0" cellspacing="0" style="max-width:900px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 25px 70px rgba(0,0,0,0.12);">

<!-- top black bar -->
<tr>
<td style="background:#0b0b0c;padding:16px 30px;text-align:center;">
<span style="color:#fff;font-size:12px;letter-spacing:2px;">
JSS ORIGINALS — DIGITAL INFRASTRUCTURE & WEB SYSTEMS
</span>
</td>
</tr>

<tr>
<td style="padding:40px 24px;">

<!-- logo -->
<div style="text-align:center;margin-bottom:8px;">
<img src="${logoUrl}" width="62" style="border-radius:14px;">
</div>

<!-- confidential -->
<div style="text-align:center;font-size:12px;color:#9aa0a6;letter-spacing:2px;margin-bottom:22px;">
PRIVATE & CONFIDENTIAL COMMUNICATION
</div>

<!-- heading -->
<div style="text-align:center;font-size:42px;font-weight:700;color:#111;margin-bottom:28px;letter-spacing:-0.5px;">
Official Digital Infrastructure Proposal
</div>

<!-- society card -->
<div style="text-align:center;margin-bottom:35px;">
<div style="display:inline-block;background:#f6f7fb;border:1px solid #e6e7ec;border-radius:16px;padding:22px 30px;">
<div style="font-size:18px;font-weight:700;color:#111;">
बहुउद्देशीय प्राथमिक ग्राम सेवा सहकारी सोसायटी निमोद
</div>
<div style="font-size:13px;color:#6b7280;margin-top:6px;">
Multipurpose Primary Gram Seva Sahkari Society Nimod
</div>
</div>
</div>

<!-- letter -->
<div style="font-size:16px;color:#333;line-height:1.9;">

आदरणीय महोदय,<br><br>

सादर नमस्कार।  
मैं <b>जितेन्द्र सिंह</b>, निमोद का निवासी एवं  
<b>वेबसाइट व डिजिटल सिस्टम डेवलपमेंट</b> के क्षेत्र में पेशेवर रूप से कार्यरत हूँ।  

वर्तमान समय में अधिकांश सहकारी संस्थाएँ अपनी आधिकारिक वेबसाइट के माध्यम से  
सदस्यों को योजनाएँ, सूचनाएँ, सेवाएँ एवं आवश्यक जानकारी ऑनलाइन उपलब्ध करा रही हैं,  
जिससे संस्था की विश्वसनीयता और पहुँच दोनों मजबूत होती हैं।  

यदि भविष्य में सोसायटी की  
<b>आधिकारिक वेबसाइट एवं डिजिटल उपस्थिति</b>  
को विकसित करने की योजना हो, तो इस हेतु एक पेशेवर प्रस्ताव प्रस्तुत करने का अवसर प्रदान करें।  

निमोद का निवासी होने के नाते अपनी स्थानीय संस्था के लिए  
उच्च गुणवत्ता एवं जिम्मेदारी के साथ कार्य करना मेरे लिए गर्व का विषय होगा।

</div>

<!-- call -->
<div style="margin-top:30px;font-size:16px;font-weight:600;color:#111;">
आपकी सुविधा अनुसार संक्षिप्त चर्चा हेतु उपलब्ध हूँ।
</div>

<!-- signature -->
<div style="margin-top:50px;padding-top:25px;border-top:1px solid #eee;">

<div style="font-size:18px;font-weight:700;color:#111;">
Jitendra Singh
</div>

<div style="font-size:14px;color:#6b7280;margin-top:6px;">
Director — JSS Originals
</div>

<div style="font-size:14px;color:#6b7280;">
Digital Infrastructure & Web Systems
</div>

<div style="font-size:14px;color:#6b7280;margin-top:8px;">
Nimod, Rajasthan
</div>

<div style="font-size:14px;color:#6b7280;">
jitendra@jssoriginals.online
</div>

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
