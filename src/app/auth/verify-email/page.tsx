'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function VerifyEmailPage() {
  const [resendMessage, setResendMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleResend = () => {
    setLoading(true);
    setTimeout(() => {
      setResendMessage('Verification email resent. Please check your inbox.');
      setLoading(false);
    }, 1500);
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center bg-cover bg-center text-white px-4"
      style={{ backgroundImage: "url('/images/verify_email-bg.png')" }}
    >
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg max-w-md w-full text-center border border-white/30 space-y-6">
        <div className="text-4xl">📩</div>
        <h1 className="text-2xl font-bold">Verify Your Email</h1>
        <p className="text-sm text-white/80">
          We’ve sent a verification link to your email.
          <br />
          Please check your inbox to continue.
        </p>

        {resendMessage && (
          <div className="bg-green-600/20 p-3 rounded text-sm">{resendMessage}</div>
        )}

        <button
          onClick={handleResend}
          disabled={loading}
          className={`w-full py-2 rounded transition-all font-medium ${
            loading
              ? 'bg-black/50 text-white/70 cursor-not-allowed'
              : 'bg-black text-white hover:bg-white/30'
          }`}
        >
          {loading ? 'Resending...' : 'Resend Email'}
        </button>
      </div>
    </main>
  );
}
