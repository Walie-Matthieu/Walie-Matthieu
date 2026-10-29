"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type StackItem = string | { name: string; logo: string };

type Project = {
  name: string;
  description: string;
  images: string[]; // 0 à 2 images, chemins dans /public/projects/
  stack: StackItem[]; // texte (badge) ou logo
  url?: string;
};

// Taille visible des logos de stack (largeur et hauteur séparées) : sans impact sur le reste de la mise en page
const STACK_LOGO_SIZE = { width: "4rem", height: "2rem" };

// Espace réservé dans la mise en page pour un logo (ne change pas avec STACK_LOGO_SIZE)
const STACK_LOGO_SLOT = "0rem";

// Projets d'exemple : à remplacer par les vrais projets
const projects: Project[] = [
  {
    name: "West-Fun", //Projet 1
    description:
      "A mobile party game I'm building for fun and also to improve my skills on mobile development, there are multiple game modes with different themes, I know the name could be better but I'm also working on it!",
    images: ["/logos/photo%20appli.png"],
    stack: [{ name: "Flutter", logo: "/logos/flutter-logo.webp" }],
  },
  {
    name: "Project name",
    description: "Short description of the project and what I did on it.",
    images: [],
    stack: ["Next.js", "Tailwind CSS"],
  },
  {
    name: "Project name",
    description: "Short description of the project and what I did on it.",
    images: [],
    stack: ["React", "TypeScript"],
  },
];

const SWIPE_THRESHOLD = 60;

// Positions : x négatif = gauche, positif = droite ; y négatif = haut, positif = bas
// heading (titre + sous-titre) en px, les autres en rem (1 rem = 16 px)
const POSITIONS = {
  heading: { x: 0, y: 0 }, // px
  projectName: { x: 6.25, y: 0 }, // rem
  description: { x: 6.25, y: 0 }, // rem
  images: { x: 0, y: 0 }, // rem
  stack: { x: 6.25, y: 0 }, // rem
};

// Taille de la zone photo en rem (largeur, hauteur)
const IMAGE_SIZE = { width: "26.25rem", height: "25rem" };

const move = ({ x, y }: { x: number; y: number }) => ({
  transform: `translate(${x}px, ${y}px)`,
});

const moveRem = ({ x, y }: { x: number; y: number }) => ({
  transform: `translate(${x}rem, ${y}rem)`,
});

export default function ProjectsCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef<number | null>(null);
  const isVisible = useRef(false);

  const goTo = (next: number) =>
    setIndex(Math.min(Math.max(next, 0), projects.length - 1));

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;
      },
      { threshold: 0.5 },
    );
    observer.observe(section);

    const onKeyDown = (event: KeyboardEvent) => {
      if (!isVisible.current) return;
      if (event.key === "ArrowLeft") setIndex((i) => Math.max(i - 1, 0));
      if (event.key === "ArrowRight")
        setIndex((i) => Math.min(i + 1, projects.length - 1));
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const onPointerDown = (event: React.PointerEvent) => {
    dragStart.current = event.clientX;
    setIsDragging(true);
  };

  const onPointerMove = (event: React.PointerEvent) => {
    if (dragStart.current === null) return;
    setDragX(event.clientX - dragStart.current);
  };

  const endDrag = () => {
    if (dragStart.current === null) return;
    if (dragX <= -SWIPE_THRESHOLD) goTo(index + 1);
    else if (dragX >= SWIPE_THRESHOLD) goTo(index - 1);
    dragStart.current = null;
    setDragX(0);
    setIsDragging(false);
  };

  const arrowClass =
    "!h-12 !w-12 !rounded-full !p-0 !bg-white/10 !text-white hover:!bg-white/20 disabled:opacity-30 disabled:hover:!bg-white/10";

  return (
    <section
      ref={sectionRef}
      className="starry-sky flex min-h-screen flex-col justify-start px-4 pt-0 pb-12 sm:px-6 sm:pt-2 sm:pb-16 md:px-12 lg:px-2"> 
      <div className="relative z-10 mx-auto w-full max-w-none">
        {/* Bloc autonome : titre et sous-titre */}
        <div
          className="projects-heading relative text-center"
          style={move(POSITIONS.heading)}
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Projects
          </h2>
          <span
            aria-hidden="true"
            className="mx-auto mt-4 block h-[2px] w-28 rounded-full bg-[#64ffda]/45"
          />
          <p className="mt-3 text-base font-semibold text-gray-200">
            Some of the projects I&apos;ve worked on.
          </p>
        </div>

        {/* Bloc autonome : carrousel */}
        <div className="projects-content">
          <div
            className={`mt-10 overflow-hidden select-none ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            style={{ touchAction: "pan-y" }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            onPointerCancel={endDrag}
            onDragStart={(event) => event.preventDefault()}
          >
            <div
              className={`flex ${
                isDragging ? "" : "transition-transform duration-500 ease-out"
              }`}
              style={{
                transform: `translateX(calc(${-index * 100}% + ${dragX}px))`,
              }}
            >
              {projects.map((project, i) => (
                <article
                  key={`${project.name}-${i}`}
                  aria-hidden={i !== index}
                  className="flex w-full shrink-0 flex-col gap-6 py-8 pl-0 pr-8 text-left lg:py-10 lg:pr-10"
                >
                  <h3
                    className="text-2xl font-bold text-white lg:text-3xl"
                    style={moveRem(POSITIONS.projectName)}
                  >
                    {project.name}
                  </h3>

                  <div className="grid flex-1 grid-cols-2 gap-8">
                    <div
                      className="flex flex-col justify-center gap-4"
                      style={moveRem(POSITIONS.description)}
                    >
                      <p className="text-base font-semibold leading-7 text-gray-200">
                        {project.description}
                      </p>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-fit text-sm font-semibold text-[#64ffda] hover:text-[#7fffe2]"
                        >
                          View project →
                        </a>
                      )}
                    </div>

                    <div
                      className="flex justify-self-center gap-4"
                      style={{ ...moveRem(POSITIONS.images), ...IMAGE_SIZE }}
                    >
                      {project.images.length === 0 ? (
                        <div className="w-full" />
                      ) : (
                        project.images.slice(0, 2).map((src) => (
                          <div
                            key={src}
                            className="relative flex-1"
                          >
                            <Image
                              src={src}
                              alt={`${project.name} screenshot`}
                              fill
                              draggable={false}
                              className="object-contain"
                            />
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  <ul
                    className="flex flex-wrap gap-2"
                    style={moveRem(POSITIONS.stack)}
                  >
                    {project.stack.map((tech) =>
                      typeof tech === "string" ? (
                        <li
                          key={tech}
                          className="rounded-full border border-[#64ffda]/20 bg-[#64ffda]/5 px-3 py-1 text-xs font-medium text-[#64ffda]"
                        >
                          {tech}
                        </li>
                      ) : (
                        <li
                          key={tech.name}
                          className="relative"
                          style={{
                            height: STACK_LOGO_SLOT,
                            width: STACK_LOGO_SLOT,
                          }}
                        >
                          <div
                            className="absolute left-0 top-1/2 -translate-y-1/2"
                            style={STACK_LOGO_SIZE}
                          >
                            <Image
                              src={tech.logo}
                              alt={tech.name}
                              fill
                              draggable={false}
                              className="object-fill"
                            />
                          </div>
                        </li>
                      ),
                    )}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous project"
              disabled={index === 0}
              onClick={() => goTo(index - 1)}
              className={arrowClass}
            >
              ←
            </button>
            <div className="flex gap-2">
              {projects.map((project, i) => (
                <button
                  key={`${project.name}-dot-${i}`}
                  type="button"
                  aria-label={`Go to project ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => goTo(i)}
                  className={`!h-2.5 !rounded-full !p-0 transition-all ${
                    i === index
                      ? "!w-6 !bg-white"
                      : "!w-2.5 !bg-gray-200 hover:!bg-white"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next project"
              disabled={index === projects.length - 1}
              onClick={() => goTo(index + 1)}
              className={arrowClass}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
