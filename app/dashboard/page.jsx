'use client'; // Browser par chalega

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Page load hote hi User ka data mango
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/auth/me');
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error);
        }

        setUser(data.user); // Data mil gaya!
      } catch (err) {
        // Agar cookie galat nikli to wapas login pe bhejo
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  // Logout Function
  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/login'); // Cookie delete ho gayi, ab login par jao
      router.refresh(); // Middleware update karne ke liye refresh
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-xl font-semibold text-gray-600">Loading your profile...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-lg">
        {/* Header Section */}
        <div className="flex items-center justify-between border-b pb-6">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="rounded bg-red-500 px-4 py-2 font-medium text-white transition hover:bg-red-600"
          >
            Sign Out
          </button>
        </div>

        {/* User Details Section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-700">Welcome Back! 👋</h2>
          
          <div className="mt-4 rounded-lg bg-blue-50 p-6 border border-blue-100">
            <p className="text-sm uppercase tracking-wide text-gray-500">Your Account</p>
            <p className="mt-2 text-2xl font-bold text-blue-800">
              {user?.email}
            </p>
            <p className="mt-1 text-gray-600">
              Role: <span className="font-mono bg-gray-200 px-2 py-1 rounded text-sm">{user?.role}</span>
            </p>
            <p className="mt-1 text-xs text-gray-400">ID: {user?.id}</p>
          </div>
        </div>

        {/* Content Area */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {/* Dummy Cards to show layout */}
          <div className="h-32 rounded-lg bg-gray-100 p-4 border border-dashed border-gray-300 flex items-center justify-center text-gray-400">
            Project A
          </div>
          <div className="h-32 rounded-lg bg-gray-100 p-4 border border-dashed border-gray-300 flex items-center justify-center text-gray-400">
            Project B
          </div>
          <div className="h-32 rounded-lg bg-gray-100 p-4 border border-dashed border-gray-300 flex items-center justify-center text-gray-400">
            + Add New
          </div>
        </div>
      </div>
    </div>
  );
}
