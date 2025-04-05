'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirm) {
      return setError('Passwords do not match.');
    }

    try {
      setLoading(true);
      // Placeholder for Firebase sign-up logic
      console.log('Signing up with:', email);

      // Simulate success
      setTimeout(() => {
        router.push('/auth/verify-email');
      }, 1500);
    } catch (err) {
      setError('Failed to create account.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/images/sign_up-bg.png')" }}
    >
      <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Create an Account</h1>
          <p className="text-white/80">Start your journey with Trad</p>
        </div>

        {error && (
          <div className="bg-red-500/20 backdrop-blur-sm text-white p-3 rounded-lg mb-6 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-white mb-2 text-sm font-medium">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-white/50"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-white mb-2 text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-white/50"
              placeholder="••••••••"
              required
              minLength={6}
            />
          </div>

          <div>
            <label htmlFor="confirm" className="block text-white mb-2 text-sm font-medium">
              Confirm Password
            </label>
            <input
              id="confirm"
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-white/50"
              placeholder="••••••••"
              required
              minLength={6}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg transition-all font-medium ${
              loading
                ? 'bg-black/50 text-white/70'
                : 'bg-black text-white hover:bg-white/30'
            }`}
          >
            {loading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-white">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-white font-medium hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
