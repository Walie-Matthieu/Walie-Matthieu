"use client";

import { useEffect, useState, RefObject } from "react";

interface ScrollWidgetProps {
  projectsSectionRef: RefObject<HTMLDivElement | null>;
}

export default function ScrollWidget({
  projectsSectionRef,
}: ScrollWidgetProps) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const executeScroll = () => {
    if (projectsSectionRef.current) {
      projectsSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      onClick={executeScroll}
      style={{
        visibility: scrollPosition <= 20 ? "visible" : "hidden",
        opacity: scrollPosition <= 20 ? 1 : 0,
      }}
      className="scrollWidget absolute bottom-6 cursor-pointer flex flex-col items-center font-semibold gap-1"
    >
      <span>Check out my portfolio!</span>
      <span className="arrow text-2xl">👇</span>
    </div>
  );
}
