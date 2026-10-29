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

// Sous lg (1024 px), la mise en page passe en version mobile
const MOBILE_QUERY = "(max-width: 1023.98px)";

// Mêmes unités que POSITIONS (heading en px, le reste en rem)
const MOBILE_POSITIONS = {
  heading: { x: 0, y: 0 },
  projectName: { x: 0, y: 0 },
  description: { x: 0, y: 0 },
  images: { x: 0, y: 0 },
  stack: { x: 0, y: 0 },
};

// Pas de hauteur fixe : la photo prend la hauteur restante de la grille
const MOBILE_IMAGE_SIZE = { width: "100%" };

const move = ({ x, y }: { x: number; y: number }) => ({
  transform: `translate(${x}px, ${y}px)`,
});

const moveRem = ({ x, y }: { x: number; y: number }) => ({
  transform: `translate(${x}rem, ${y}rem)`,
});

// Faux au premier rendu (rendu serveur en version PC), puis mis à jour après le montage
function useIsMobileLayout() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_QUERY);
    const update = () => setIsMobile(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return isMobile;
}

export default function ProjectsCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef<number | null>(null);
  const isVisible = useRef(false);
  const isMobile = useIsMobileLayout();
  const positions = isMobile ? MOBILE_POSITIONS : POSITIONS;
  const imageSize = isMobile ? MOBILE_IMAGE_SIZE : IMAGE_SIZE;

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
      className="starry-sky flex min-h-screen max-lg:min-h-dvh flex-col justify-start px-4 pt-0 pb-6 sm:px-6 sm:pt-2 sm:pb-16 md:px-12 lg:px-2"> 
      <div className="relative z-10 mx-auto w-full max-w-none max-lg:flex max-lg:flex-1 max-lg:flex-col">
        {/* Bloc autonome : titre et sous-titre */}
        <div
          className="projects-heading relative text-center"
          style={move(positions.heading)}
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
        <div className="projects-content max-lg:flex max-lg:flex-1 max-lg:flex-col">
          <div
            className={`mt-6 lg:mt-10 overflow-hidden select-none max-lg:flex max-lg:shrink-0 max-lg:grow max-lg:flex-col ${
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
              className={`flex max-lg:grow ${
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
                  className="flex w-full shrink-0 flex-col gap-4 py-4 pl-0 pr-0 text-left lg:gap-6 lg:py-10 lg:pr-10"
                >
                  <h3
                    className="text-2xl font-bold text-white lg:text-3xl"
                    style={moveRem(positions.projectName)}
                  >
                    {project.name}
                  </h3>

                  <div className="grid flex-1 grid-cols-1 grid-rows-[auto_minmax(12rem,1fr)] gap-4 lg:grid-cols-2 lg:grid-rows-none lg:gap-8">
                    <div
                      className="flex flex-col justify-center gap-4"
                      style={moveRem(positions.description)}
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
                      style={{ ...moveRem(positions.images), ...imageSize }}
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
                    style={moveRem(positions.stack)}
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

          <div className="mt-4 flex items-center justify-center gap-4 lg:mt-6">
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
                      : "!w-2.5 !border !border-gray-200 !bg-transparent hover:!border-white"
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
