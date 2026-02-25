import './globals.css';
import { Inter } from 'next/font/google';

// Professional font setup
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'JSS Originals | Secure Login',
  description: 'Production ready authentication system by JSS Originals',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
