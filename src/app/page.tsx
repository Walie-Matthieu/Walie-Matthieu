"use client";

import Image from "next/image";
import { useRef } from "react";
import dynamic from "next/dynamic";
// import ProjectList from "./projects/ProjectList";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsCarousel from "./components/ProjectsCarousel";
import EmailButton from "./components/EmailButton";
import useIsMobile from "./useIsMobile";

const ScrollWidget = dynamic(() => import("./components/ScrollWidget"), {
  ssr: false,
});

export default function Home() {
  const isMobile = useIsMobile();
  const projectsSectionRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () =>
    document
      .getElementById("intro-section")
      ?.nextElementSibling?.scrollIntoView({ behavior: "smooth" });

  const introSection = () => (
    <div
      id="intro-section"
      className="relative min-h-screen px-4 flex flex-col items-center justify-center text-center gap-6 bg-gradient-to-br from-blue-900 to-gray-800 "
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
      <button //Version desktop du bouton de scroll
        type="button"
        aria-label="Aller à la section suivante"
        onClick={scrollToNext}
        className="hidden lg:block absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors cursor-pointer" //Cache le bouton de scroll sur les petits écrans
      >
        <svg
          xmlns="http://www.w3.org/2000/svg" // Lien de l'indication de scroll
          viewBox="0 0 24 48"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-16"
        >
          <rect x="5" y="1" width="14" height="24" rx="7" />
          <path d="M12 6v5" />
          <path d="M7 30l5 5 5-5" />
          <path d="M7 38l5 5 5-5" />
        </svg>
      </button>
      <button //Version mobile du bouton de scroll
        type="button" 
        aria-label="Aller à la section suivante"
        onClick={scrollToNext}
        className="lg:hidden sm:absolute sm:bottom-6 sm:left-1/2 sm:-translate-x-1/2 text-emerald-400 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 30"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <polygon points="2,2 14,12 26,2 26,7 14,17 2,7" />
          <polygon points="2,13 14,23 26,13 26,18 14,28 2,18" />
        </svg>
      </button>
      {/* <ScrollWidget projectsSectionRef={projectsSectionRef} /> */}
    </div>
  );

  

  const footer = () => (
    <div className="bg-red-900 rounded-t-2xl p-6 text-center space-y-4 z-50 gap-2 flex flex-col items-center sticky">
      <p className="text-xl font-bold -mb-4">Interested in working together?</p>
      <EmailButton />
      {/* Bouton vers le jeu Snake */}
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
      {/* {projectsSection()} */}
      <ExperienceSection />
      <ProjectsCarousel />
      {/* Affichage du footer (contient le bouton Snake) */}
      {footer()}
    </main>
  );
}
