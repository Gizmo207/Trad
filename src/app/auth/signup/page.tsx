'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '@/firebase/firebaseConfig';

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      router.push('/auth/verify_email');
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        setError('That email is already in use. Try logging in instead.');
      } else if (err.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Invalid email address.');
      } else {
        setError('Something went wrong. Please try again.');
      }
      console.error('Signup error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 text-white"
      style={{ backgroundImage: "url('/images/sign_up-bg.png')" }}
    >
      <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl shadow-lg p-8 w-full max-w-md text-center space-y-6">
        <h1 className="text-2xl font-bold">Create Your Account</h1>
        <p className="text-white/80 text-sm">Start your journey with Trad today.</p>

        {error && (
          <div className="bg-red-500/20 text-white p-3 rounded-md text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50"
          />

          <input
            type="password"
            name="new-password"
            autoComplete="new-password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg transition font-medium ${
              loading ? 'bg-black/50 text-white/70' : 'bg-black text-white hover:bg-white/30'
            }`}
          >
            {loading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>

        <div>
          <p className="text-white text-sm">
            Already have an account?{' '}
            <Link href="/auth/login" className="font-medium hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
