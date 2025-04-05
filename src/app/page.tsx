'use client';

import Head from 'next/head';

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Welcome to Trad</title>
        <meta name="description" content="Trad - Find love with timeless values." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/landing-bg.jpg')" }}
      >
        <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-white/30 max-w-xl w-full text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to Trad</h1>
          <p className="mb-6 text-lg">
            A dating app for people who value tradition, commitment, and love that lasts.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <a
              href="/signup"
              className="px-6 py-3 rounded-lg bg-white text-gray-900 font-semibold hover:bg-gray-100 transition"
            >
              Get Started
            </a>
            <a
              href="/login"
              className="px-6 py-3 rounded-lg border border-white text-white hover:bg-white hover:text-gray-900 transition"
            >
              Log In
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
