'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // TODO: Integrate with Firebase reset password logic
    setSubmitted(true);
  };

  return (
    <main
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 text-white"
      style={{ backgroundImage: "url('/images/reset-password-bg.png')" }}
    >
      <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl shadow-lg p-8 w-full max-w-md text-center space-y-6">
        <h1 className="text-2xl font-bold">Reset Your Password</h1>
        <p className="text-white/80 text-sm">
          Create a new password for your account.
        </p>

        {submitted ? (
          <p className="text-green-300 font-medium">
            ✅ Password reset! You can now log in with your new credentials.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              placeholder="New password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50"
            />
            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-black text-white hover:bg-white/30 transition font-medium"
            >
              Reset Password
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
