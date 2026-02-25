import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "User", // Jab tak banda naam na bataye, "User" dikhayenge
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true, // Ek email se do account nahi banne chahiye
  },
  image: {
    type: String, // Profile photo ka URL (future ke liye)
  },
  role: {
    type: String,
    default: 'user', // Future mein Admin panel banaoge toh ye kaam aayega
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Next.js Hot Reload Fix (Same as OTP model)
export default mongoose.models.User || mongoose.model('User', UserSchema);
