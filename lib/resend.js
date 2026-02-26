import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOtpEmail(email, otp) {
  const logoUrl = 'https://i.ibb.co/BV88qHp3/IMG-20260224-105608.png';

  try {
    const data = await resend.emails.send({
      from: 'Jitendra Singh (JSS Originals) <jitendra@jssoriginals.online>',
      to: [email],
      subject: `Regarding Official Website — Sahkari Society Nimod`,
html: `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#eef1f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:60px 0;background:#eef1f5;">
<tr>
<td align="center">

<table width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;background:#ffffff;border-radius:18px;padding:60px 60px;box-shadow:0 30px 80px rgba(0,0,0,0.08);">

<!-- header brand -->
<tr>
<td style="padding-bottom:28px;text-align:center;">
<div style="font-size:13px;letter-spacing:3px;color:#9aa0a6;text-transform:uppercase;">
JSS Originals
</div>
</td>
</tr>

<!-- logo -->
<tr>
<td align="center" style="padding-bottom:18px;">
<img src="${logoUrl}" width="48" style="border-radius:12px;">
</td>
</tr>

<!-- heading -->
<tr>
<td style="padding-bottom:22px;text-align:center;">
<div style="font-size:34px;font-weight:600;color:#0b0b0c;letter-spacing:-0.4px;">
Official Website Proposal
</div>
</td>
</tr>

<!-- society name -->
<tr>
<td align="center" style="padding-bottom:40px;">

<div style="
display:inline-block;
padding:22px 32px;
border-radius:14px;
background:#f6f7fb;
border:1px solid #e4e6eb;
">

<div style="font-size:18px;font-weight:600;color:#111;">
बहुउद्देशीय प्राथमिक ग्राम सेवा सहकारी सोसायटी निमोद
</div>

<div style="font-size:14px;color:#7b8087;margin-top:6px;">
Multipurpose Primary Gram Seva Sahkari Society Nimod
</div>

</div>

</td>
</tr>

<!-- letter body -->
<tr>
<td style="padding-bottom:26px;">

<div style="font-size:16px;color:#444;line-height:1.9;">

आदरणीय महोदय,<br><br>

सादर नमस्कार।  
मैं <strong style="color:#111;">जितेन्द्र सिंह</strong>, निमोद का निवासी एवं  
<strong style="color:#111;">वेबसाइट व डिजिटल सिस्टम डेवलपमेंट</strong> के क्षेत्र में पेशेवर रूप से कार्यरत हूँ।  

वर्तमान समय में अधिकांश सहकारी संस्थाएँ अपनी आधिकारिक वेबसाइट के माध्यम से  
सदस्यों को योजनाएँ, सूचनाएँ, सेवाएँ एवं आवश्यक जानकारी ऑनलाइन उपलब्ध करा रही हैं,  
जिससे संस्था की विश्वसनीयता, पारदर्शिता एवं पहुँच और अधिक मजबूत होती है।  

इसी संदर्भ में, यदि भविष्य में  
<strong style="color:#111;">सोसायटी की आधिकारिक वेबसाइट एवं डिजिटल उपस्थिति</strong>  
को विकसित करने की योजना हो, तो इस हेतु एक सुव्यवस्थित एवं पेशेवर प्रस्ताव प्रस्तुत करने का  
मुझे अवसर प्रदान करें।  

निमोद का निवासी होने के नाते अपनी स्थानीय संस्था के लिए  
उच्च गुणवत्ता एवं जिम्मेदारी के साथ कार्य करना मेरे लिए गर्व का विषय होगा।

</div>

</td>
</tr>

<!-- call line -->
<tr>
<td style="padding-bottom:34px;">
<div style="font-size:16px;color:#111;font-weight:500;">
आपकी सुविधा अनुसार संक्षिप्त चर्चा हेतु उपलब्ध हूँ।
</div>
</td>
</tr>

<!-- divider -->
<tr>
<td>
<div style="height:1px;background:#eceef2;margin:30px 0;"></div>
</td>
</tr>

<!-- signature -->
<tr>
<td>

<div style="font-size:18px;font-weight:600;color:#0b0b0c;">
Jitendra Singh
</div>

<div style="font-size:14px;color:#7b8087;margin-top:6px;">
Founder — JSS Originals
</div>

<div style="font-size:14px;color:#7b8087;margin-top:4px;">
Web & Digital Systems
</div>

<div style="font-size:14px;color:#7b8087;margin-top:4px;">
Nimod, Rajasthan
</div>

<div style="font-size:14px;color:#7b8087;margin-top:4px;">
jitendra@jssoriginals.online
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
