import { redirect } from 'next/navigation';

export default function RootPage() {
  // Jab koi main domain par aaye, usse login par bhej do
  redirect('/login');
}

