'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center flex flex-col justify-between"
      style={{ backgroundImage: "url('/images/landing-bg.jpg')" }}
    >
      {/* Welcome Box */}
      <div className="flex-grow flex items-center justify-center px-4 transform translate-y-10">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg text-center max-w-lg w-full border border-white/30">
          <h1 className="text-4xl font-bold text-white mb-4">Welcome to Trad 🕊️</h1>
          <p className="text-white text-md mb-6">Meaningful connections rooted in tradition</p>
          <div className="flex justify-center gap-4">
            <Link href="/signup">
              <button className="px-5 py-2 bg-black text-white rounded hover:bg-white/30 transition">
                Sign Up
              </button>
            </Link>
            <Link href="/login">
              <button className="px-5 py-2 bg-black text-white rounded hover:bg-white/30 hover:text-black transition">
                Log In
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Quotes Section */}
      <div className="w-full flex flex-col items-center gap-6 pb-16 px-4 md:px-20">
        <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl px-6 py-4 max-w-3xl w-full text-white text-center shadow-lg">
          💍 <span className="text-lg md:text-xl font-light">“Love built on values lasts a lifetime.”</span>
        </div>
        <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl px-6 py-4 max-w-3xl w-full text-white text-center shadow-lg">
          👨‍👩‍👧 <span className="text-lg md:text-xl font-light">“Trad isn’t just dating, it’s legacy.”</span>
        </div>
        <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl px-6 py-4 max-w-3xl w-full text-white text-center shadow-lg">
          💒 <span className="text-lg md:text-xl font-light">“Skip the swipes — meet someone serious.”</span>
        </div>
      </div>
    </main>
  );
}
