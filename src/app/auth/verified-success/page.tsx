'use client';

import Link from 'next/link';

export default function VerifiedSuccessPage() {
  return (
    <main
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 text-white"
      style={{ backgroundImage: "url('/images/verified-success-bg.png')" }}
    >
      <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl shadow-lg p-8 w-full max-w-md text-center space-y-6">
        <div className="text-4xl">✅</div>
        <h1 className="text-2xl font-bold">Email Verified</h1>
        <p className="text-white/80 text-sm">
          Your email has been successfully verified.
          <br />
          You can now access your account.
        </p>

        <Link
          href="/auth/login"
          className="inline-block bg-black hover:bg-white/30 transition text-white py-2 px-6 rounded-lg font-medium"
        >
          Go to Login
        </Link>
      </div>
    </main>
  );
}
