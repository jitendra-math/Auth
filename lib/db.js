import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

// Safety Check: Production mein galti se bhi URI miss na ho
if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

/**
 * Global Cache Strategy (Production Ready)
 * Next.js serverless hota hai. Har API call par naya connection banega toh
 * database crash ho jayega. Isliye hum connection ko "Cache" karte hain.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  // Agar pehle se connection zinda hai, toh wahi use karo
  if (cached.conn) {
    return cached.conn;
  }

  // Agar connection process mein nahi hai, toh naya shuru karo
  if (!cached.promise) {
    const opts = {
      bufferCommands: false, // Production optimization
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("✅ New Database Connection Established");
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectToDatabase;
