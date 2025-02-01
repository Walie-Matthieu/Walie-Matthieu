"use client";

import Image from "next/image";
import { useRef } from "react";
import ProjectBox from "./components/ProjectBox";
import ScrollWidget from "./components/ScrollWidget";

export default function Home() {
  const projectsSectionRef = useRef<HTMLDivElement>(null);

  const introSection = () => (
    <div
      id="intro-section"
      className="min-h-screen flex flex-col items-center justify-center text-center gap-6"
    >
      <div className="relative w-48 h-48">
        <Image
          src="/PFP.jpg"
          alt="PFP"
          fill
          objectFit="cover"
          className="rounded-full transition-opacity duration-500 hover:opacity-0"
        />
        <Image
          src="/PFP_Laser.png"
          alt="PFP Hover"
          fill
          objectFit="cover"
          className="rounded-full absolute top-0 left-0 opacity-0 transition-opacity duration-500 hover:opacity-100"
        />
      </div>
      <div className="justify-items-center space-y-4">
        <h1 className="text-2xl sm:text-5xl font-bold text-white">
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
      <ScrollWidget projectsSectionRef={projectsSectionRef} />
    </div>
  );

  const projectsSection = () => {
    return (
      <div ref={projectsSectionRef} className="p-6 md:p-12 lg:p-16 text-center">
        <h2 className="text-2xl font-bold mb-8 text-white">Key Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProjectBox
            title="Riskophobe"
            image="/logos/Riskophobe.png"
            color="#6B46C1"
          >
            Fully designed and developed a platform for crypto users to trade
            tokens with flexibility and reclaim collateral, enhancing risk
            management. Smart contracts in Solidity with hardhat, Subgraph
            GraphQL, Frontend in Next.js with Wagmi and TailwindCSS.
          </ProjectBox>
        </div>
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
