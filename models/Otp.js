import mongoose from 'mongoose';

const OtpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 300, // ⚠️ Magic Line: 300 seconds (5 Min) baad ye document gayab ho jayega
  },
});

// Next.js Hot Reload Fix:
// Agar model pehle se memory mein hai to wahi use karo, nahi to naya banao.
// Ye error rokne ke liye zaroori hai.
export default mongoose.models.Otp || mongoose.model('Otp', OtpSchema);
