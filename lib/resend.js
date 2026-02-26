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
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background-color: #f8fafc;
      color: #334155;
      line-height: 1.6;
      padding: 20px;
      margin: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 45px;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
      border-top: 4px solid #10b981;
    }
    h2 {
      color: #0f172a;
      font-size: 20px;
      margin-top: 0;
      margin-bottom: 25px;
      font-weight: 600;
    }
    p {
      font-size: 15px;
      margin-bottom: 20px;
      color: #475569;
    }
    .highlight {
      font-weight: 600;
      color: #0f172a;
    }
    .footer {
      margin-top: 45px;
      padding-top: 25px;
      border-top: 1px solid #e2e8f0;
      font-size: 14px;
    }
    .brand {
      font-weight: 700;
      color: #10b981;
      letter-spacing: 0.5px;
      font-size: 13px;
      margin-top: 2px;
    }
    .contact-info {
      color: #64748b;
      margin-top: 8px;
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>प्रस्ताव: निमोद सहकारी समिति का डिजिटल भविष्य</h2>
    
    <p>आदरणीय प्रबंधक महोदय,</p>
    
    <p>सहकारिता और ग्रामीण विकास के क्षेत्र में निमोद ग्राम सेवा सहकारी समिति का जमीनी स्तर पर किया गया कार्य अत्यंत सराहनीय है। एक टेक्नोलॉजी एजेंसी के तौर पर जब हम प्रगतिशील संस्थाओं का अध्ययन करते हैं, तो आपकी संस्था का नाम प्रमुखता से सामने आता है।</p>
    
    <p>हालाँकि, आज के इस दौर में जहाँ युवा किसान, सरकारी विभाग और हर महत्वपूर्ण सुविधा ऑनलाइन हो चुकी है, वहां संस्था की एक <b>आधिकारिक डिजिटल पहचान</b> का न होना एक बड़ी कमी है। डिजिटल उपस्थिति के बिना, संस्था की बेहतरीन सेवाएं और उपलब्धियां अपनी पूरी क्षमता से लोगों और उच्च अधिकारियों तक नहीं पहुँच पा रही हैं।</p>
    
    <p>एक सुरक्षित और आधुनिक वेबसाइट केवल जानकारी देने का माध्यम नहीं है, बल्कि यह आज के समय में किसी भी संस्था की पारदर्शिता, विश्वसनीयता और भविष्य की ग्रोथ का सबसे बड़ा आधार है।</p>
    
    <p>इस डिजिटल गैप को भरने के लिए, हमारी वेब डेवलपमेंट एजेंसी <span class="highlight">JSS Originals</span> ने खास तौर पर आपकी संस्था की ज़रूरतों को ध्यान में रखते हुए एक अति-आधुनिक और सुरक्षित वेब प्लेटफॉर्म का प्रारंभिक डिज़ाइन (Blueprint) तैयार किया है।</p>
    
    <p>क्या समिति अपने कार्यों को आधुनिक रूप देने और अपनी एक मजबूत ऑनलाइन ब्रांडिंग स्थापित करने में रुचि रखती है? यदि हाँ, तो हमें आपके साथ इस डिज़ाइन पर एक संक्षिप्त चर्चा करने में खुशी होगी।</p>
    
    <p>आपके सकारात्मक उत्तर की प्रतीक्षा में।</p>
    
    <div class="footer">
      <div style="font-weight: 600; color: #0f172a; font-size: 16px;">जितेंद्र सिंह</div>
      <div class="brand">JSS ORIGINALS</div>
      <div class="contact-info">
        Full-Stack Web Developer<br>
        contact@jssoriginals.online<br>
        +91 9549626202
      </div>
    </div>
  </div>
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
