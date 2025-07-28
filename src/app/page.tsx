"use client";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white">
      <h1 className="text-5xl font-extrabold mb-8 tracking-tight">SmokeLess Token</h1>
      <div className="flex gap-6">
        <a
          href="https://twitter.com/SmokelessToken"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-lg transition"
        >
          Twitter
        </a>
        <a
          href="https://t.me/SmokelessToken"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold text-lg transition"
        >
          Telegram
        </a>
      </div>
    </main>
  );
}