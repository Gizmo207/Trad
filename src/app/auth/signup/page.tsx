'use client';
import { sendEmailVerification } from 'firebase/auth';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/firebaseConfig';

export default function SignUpPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      router.push('/auth/verify_email'); // Redirect after signup
      await sendEmailVerification(userCredential.user);
      router.push('/auth/verify_email');
    } catch (err: any) {
      console.error(err);
      switch (err.code) {
        case 'auth/email-already-in-use':
          setError('This email is already in use.');
          break;
        case 'auth/invalid-email':
          setError('Invalid email address.');
          break;
        case 'auth/weak-password':
          setError('Password should be at least 6 characters.');
          break;
        default:
          setError('Failed to create account. Please try again.');
      }
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
        <h1 className="text-2xl font-bold">Create Account</h1>
        <p className="text-white/80 text-sm">
          Sign up to start your journey with Trad.
        </p>

        {error && <p className="text-red-300 font-medium">{error}</p>}

        <form onSubmit={handleSignUp} className="space-y-4">
          <input
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50"
          />
          <input
            type="password"
            placeholder="Create password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-black text-white hover:bg-white/30 transition font-medium"
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <div>
          <Link
            href="/auth/login"
            className="text-sm text-white/70 hover:underline"
          >
            Already have an account? Log in
          </Link>
        </div>
      </div>
    </main>
  );
}
