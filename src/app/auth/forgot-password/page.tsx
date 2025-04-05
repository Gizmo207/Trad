'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with Firebase password reset later
    setSubmitted(true);
  };

  return (
    <main
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 text-white"
      style={{ backgroundImage: "url('/images/forgot-password-bg.png')" }}
    >
      <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl shadow-lg p-8 w-full max-w-md text-center space-y-6">
        <h1 className="text-2xl font-bold">Forgot Password?</h1>
        <p className="text-white/80 text-sm">
          Enter the email address associated with your account and we’ll send you a link to reset your password.
        </p>

        {submitted ? (
          <p className="text-green-300 font-medium">
            ✅ Link sent! Check your email.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-black text-white hover:bg-white/30 transition font-medium"
            >
              Send Reset Link
            </button>
          </form>
        )}

        <div>
          <Link
            href="/auth/login"
            className="text-sm text-white/70 hover:underline"
          >
            ← Back to Login
          </Link>
        </div>
      </div>
    </main>
  );
}
