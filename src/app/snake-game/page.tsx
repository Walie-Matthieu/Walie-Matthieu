"use client";

export default function SnakeGamePage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-4 sm:p-6">
      <div className="mx-auto w-full max-w-5xl">
        <h1 className="mb-4 text-xl font-semibold sm:text-2xl">Snake Game</h1>
        <div className="w-full overflow-hidden rounded-xl border border-white/20 bg-black">
          <iframe
            src="/snake-game/index.html"
            title="Snake Game"
            className="block h-[78vh] min-h-[560px] w-full"
          />
        </div>
      </div>
    </main>
  );
}
