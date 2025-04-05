'use client';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white flex items-center justify-center px-4">
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-xl max-w-md w-full text-center border border-white/30 shadow-2xl">
        <h1 className="text-4xl font-bold mb-4">🎉 You're In!</h1>
        <p className="text-lg text-white/80">
          Welcome to your dashboard. This is just a placeholder page for now, but you're fully authenticated!
        </p>
      </div>
    </main>
  );
}
