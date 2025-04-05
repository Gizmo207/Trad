'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // TODO: Hook up Firebase logout here later
    console.log('User logged out');

    // Simulate logout delay
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }, [router]);

  return (
    <main
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 text-white"
      style={{ backgroundImage: "url('/images/landing-bg.jpg')" }}
    >
      <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl shadow-lg p-8 w-full max-w-md text-center space-y-6">
        <h1 className="text-2xl font-bold">Logging Out...</h1>
        <p className="text-white/80 text-sm">Hang tight, we're signing you out and sending you home 🕊️</p>
      </div>
    </main>
  );
}
