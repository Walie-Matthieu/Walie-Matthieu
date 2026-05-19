"use client";

import Image from "next/image";
import EmailButton from "./components/EmailButton";
import ExperienceSection from "./components/ExperienceSection";

export default function Home() {
  const introSection = () => (
    <div
      id="intro-section"
      className="min-h-screen px-4 flex flex-col items-center justify-center text-center gap-6 bg-gradient-to-br from-blue-900 to-gray-800 "
    >
      <div className="relative w-48 h-48">
        <Image
          src="/aigle.jpg"
          alt="PFP"
          fill
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="justify-items-center space-y-4">
        <h1 className="text-2xl sm:text-5xl font-bold text-white">
          Who is Walie Matthieu?
        </h1>
        <h2 className=" text-gray-200 font-semibold max-w-lg">
          Chasing big ideas through humble lines of code.
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 justify-items-center font-medium text-lg">
        <a
          className="bullet-link"
          href="https://github.com/Walie-Matthieu"
          target="_blank"
        >
          <Image src="/logos/Github.png" alt="Github" width={24} height={24} />
          <span className="label">Github</span>
        </a>
        <a
          className="bullet-link"
          href="https://www.linkedin.com/in/walie-matthieu/"
          target="_blank"
        >
          <Image
            src="/logos/LinkedIn.png"
            alt="LinkedIn"
            width={24}
            height={24}
          />
          <span className="label">LinkedIn</span>
        </a>
      </div>
    </div>
  );

  const footer = () => (
    <div className="bg-red-900 rounded-t-2xl p-6 text-center space-y-4 z-50 gap-2 flex flex-col items-center sticky">
      <p className="text-xl font-bold -mb-4">Interested in working together?</p>
      <EmailButton />
      <a
        href="https://snake-game-two-ochre.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 px-6 py-2 bg-white text-red-900 font-semibold rounded hover:bg-gray-200 transition"
      >
        Play the Snake Game I built!
      </a>
      <p>Copyright © Walie Matthieu 2026</p>
    </div>
  );

  return (
    <main className="min-h-screen text-white bg-gray-800">
      {introSection()}
      <ExperienceSection />
      {footer()}
    </main>
  );
}
