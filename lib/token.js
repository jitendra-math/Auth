import { SignJWT, jwtVerify } from 'jose';

// Secret key ko encode karna padta hai Edge Runtime ke liye
const secretKey = new TextEncoder().encode(process.env.JWT_SECRET);

// 1. Token Banana (Login ke waqt)
export async function signToken(payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d') // User 7 din tak login rahega (Session Time)
    .sign(secretKey);
}

// 2. Token Check Karna (Middleware/API mein)
export async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, secretKey);
    return payload; // Agar sahi hai to data wapas milega
  } catch (error) {
    return null; // Agar fake/expired hai to null
  }
}
