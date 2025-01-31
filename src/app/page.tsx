"use client";

import Image from "next/image";
import { RefObject, useEffect, useMemo, useRef, useState } from "react";

export default function Home() {
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollWidgetVisible = useMemo(
    () => scrollPosition <= 20,
    [scrollPosition]
  );

  const executeScroll = (ref: RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollWidget = () => (
    <div
      onClick={() => executeScroll(projectsSectionRef)}
      style={{
        visibility: scrollWidgetVisible ? "visible" : "hidden",
        opacity: scrollWidgetVisible ? 1 : 0,
      }}
      className="scrollWidget absolute bottom-6 cursor-pointer flex flex-col items-center font-semibold"
    >
      <p>Check this out!</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="arrow size-6 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
        />
      </svg>
    </div>
  );

  const introSection = () => (
    <div
      id="intro-section"
      className="min-h-screen flex flex-col items-center justify-center text-center gap-6"
    >
      <div className="relative w-48 h-48">
        <Image
          src="/PFP.jpg"
          alt="PFP"
          layout="fill"
          objectFit="cover"
          className="rounded-full transition-opacity duration-500 hover:opacity-0"
        />
        <Image
          src="/PFP_Laser.png"
          alt="PFP Hover"
          layout="fill"
          objectFit="cover"
          className="rounded-full absolute top-0 left-0 opacity-0 transition-opacity duration-500 hover:opacity-100"
        />
      </div>
      <div>
        <h1 className="text-2xl sm:text-5xl font-bold text-white mb-4 justify-center">
          WTF is Benjamin Azoulay?
        </h1>
        <h2 className=" text-gray-200 font-semibold max-w-lg">
          A bird, a plane, a Full-Stack Web3 Engineer? Let's find out!
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-3 sm:gap-8 justify-items-center font-medium sm:text-lg">
        <a
          className="main-link"
          href="https://github.com/BenAzlay"
          target="_blank"
        >
          <Image src="/logos/Github.png" alt="Github" width={24} height={24} />
          <span>Github</span>
        </a>
        <a
          className="main-link"
          href="https://www.linkedin.com/in/benjaminazoulay1"
          target="_blank"
        >
          <Image
            src="/logos/LinkedIn.png"
            alt="LinkedIn"
            width={24}
            height={24}
          />
          <span>LinkedIn</span>
        </a>
        <a
          className="main-link"
          href="https://blog.benjaminazoulay.com/"
          target="_blank"
        >
          <Image
            src="/logos/Hashnode.png"
            alt="Hashnode"
            width={24}
            height={24}
          />{" "}
          <span>Tutorials</span>
        </a>
      </div>
      {scrollWidget()}
    </div>
  );

  const projectsSection = () => {
    return (
      <div ref={projectsSectionRef} className="p-6 md:p-12 lg:p-16 text-center">
        <h2 className="text-2xl font-bold mb-8 text-white">Key Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"></div>
      </div>
    );
  };

  return (
    <main className="bg-gradient-to-br from-red-900 to-gray-800 min-h-screen text-white">
      {introSection()}
      {projectsSection()}
    </main>
  );
}
