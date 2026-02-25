import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/token';

export async function middleware(req) {
  // 1. Current Path aur Cookie nikalo
  const path = req.nextUrl.pathname;
  const token = req.cookies.get('auth-token')?.value;

  // 2. Define Public & Protected Routes
  // Wo raaste jahan login ki zaroorat nahi hai (Public)
  const isPublicPath = path === '/login' || path === '/register';
  
  // Wo raaste jahan bina login ke nahi ja sakte (Protected)
  // Hum maan ke chal rahe hain ki dashboard ke andar sab protected hai
  const isProtectedPath = path.startsWith('/dashboard');

  // 3. Token Check (Digital ID Verification)
  const verifiedToken = token && (await verifyToken(token));

  // CASE A: Banda Login hai aur wapas Login page par ja raha hai
  if (isPublicPath && verifiedToken) {
    // Usse wapas Dashboard bhej do (Kyunki wo pehle se login hai)
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
  }

  // CASE B: Banda Login NAHI hai aur Protected page par ja raha hai
  if (isProtectedPath && !verifiedToken) {
    // Usse Login page par kick karo
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }

  // Agar sab sahi hai to jaane do
  return NextResponse.next();
}

// 4. Config (Ye batata hai ki middleware kahan-kahan chalna chahiye)
// Hum static files (images, css) aur api routes ko ignore kar rahe hain
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
