"use client";

import { useEffect, useRef, useState } from "react";

type Experience = {
  title: string;
  company: string;
  companyUrl: string;
  description: string;
  dates: string;
};

const experiences: Experience[] = [
  {
    title: "Développeur Frontend",
    company: "Entreprise A",
    companyUrl: "https://example.com",
    description:
      "Création d'interfaces React et Next.js, amélioration des performances et maintenance de l'UI.",
    dates: "Jan 2025 - Present",
  },
  {
    title: "Stagiaire Développement Web",
    company: "Entreprise B",
    companyUrl: "https://example.com",
    description:
      "Développement de fonctionnalités, correction de bugs et collaboration avec l'équipe produit.",
    dates: "Jul 2024 - Dec 2024",
  },
  {
    title: "Freelance Frontend",
    company: "Client C",
    companyUrl: "https://example.com",
    description:
      "Intégration responsive, optimisation Lighthouse et déploiement de projets web.",
    dates: "Jan 2024 - Jun 2024",
  },
  {
    title: "Développeur Full Stack Junior",
    company: "Startup D",
    companyUrl: "https://example.com",
    description:
      "Développement d'API Node.js et d'interfaces React avec une base de tests unitaires.",
    dates: "Jul 2023 - Dec 2023",
  },
  {
    title: "Alternant Développeur Web",
    company: "Société E",
    companyUrl: "https://example.com",
    description:
      "Refonte de pages marketing et maintenance de composants partagés au sein de l'équipe front.",
    dates: "Jan 2023 - Jun 2023",
  },
  {
    title: "Contributeur Open Source",
    company: "Projet F",
    companyUrl: "https://example.com",
    description:
      "Corrections de bugs, revue de pull requests et amélioration progressive de la documentation.",
    dates: "Jul 2022 - Dec 2022",
  },
  {
    title: "Développeur WordPress",
    company: "Agence G",
    companyUrl: "https://example.com",
    description:
      "Création de thèmes sur mesure et optimisation SEO technique pour des sites vitrines.",
    dates: "Jan 2022 - Jun 2022",
  },
  {
    title: "Assistant Développement",
    company: "Organisation H",
    companyUrl: "https://example.com",
    description:
      "Support applicatif, correctifs front-end et suivi des incidents en production.",
    dates: "Jul 2021 - Dec 2021",
  },
];

export default function ExperienceSection() {
  const itemRefs = useRef<Array<HTMLElement | null>>([]);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const index = Number((entry.target as HTMLElement).dataset.index);

          setVisibleItems((current) =>
            current.includes(index) ? current : [...current, index],
          );
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -80px 0px" },
    );

    itemRefs.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#0a192f] px-4 py-12 sm:px-6 sm:py-16 md:px-12 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Experiences
          </h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Une timeline verticale pour présenter ton parcours professionnel.
          </p>
        </div>

        <div className="relative pl-10 sm:pl-14 md:pl-0 before:absolute before:left-4 md:before:left-1/2 before:top-0 before:h-full before:w-px before:-translate-x-1/2 before:bg-gradient-to-b before:from-transparent before:via-[#64ffda]/40 before:to-transparent">
          {experiences.map((experience, index) => {
            const isVisible = visibleItems.includes(index);
            const isLeftAligned = index % 2 === 0;

            return (
              <div
                key={`${experience.title}-${experience.company}`}
                className={`relative mb-10 flex w-full ${
                  isLeftAligned
                    ? "md:justify-start md:pr-8"
                    : "md:justify-end md:pl-8"
                }`}
              >
                <article
                  ref={(node) => {
                    itemRefs.current[index] = node;
                  }}
                  data-index={index}
                  className={`relative w-full rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-sm transition-all duration-700 ease-out sm:p-6 md:w-[calc(50%-2rem)] before:absolute before:left-4 sm:before:left-4 before:top-7 before:h-3 before:w-3 before:-translate-x-1/2 before:rounded-full before:border before:border-[#0a192f] before:bg-[#64ffda] before:shadow-[0_0_0_6px_rgba(100,255,218,0.12)] md:before:top-8 ${
                    isLeftAligned
                      ? "md:before:right-[-1.5rem] md:before:left-auto md:before:translate-x-1/2"
                      : "md:before:left-[-1.5rem] md:before:-translate-x-1/2"
                  } ${
                    isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="max-w-2xl">
                      <h3 className="text-xl font-semibold text-white sm:text-2xl">
                        {experience.title}
                      </h3>
                      <a
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                          className="mt-2 inline-flex w-fit rounded-full border border-[#64ffda]/20 bg-[#64ffda]/5 px-3 py-1 text-sm font-medium text-[#64ffda] transition-colors hover:border-[#64ffda]/40 hover:bg-[#64ffda]/10 hover:text-[#7fffe2]"
                      >
                        {experience.company}
                      </a>
                        <p className="mt-4 text-sm leading-7 text-slate-300/95 sm:text-base">
                        {experience.description}
                      </p>
                    </div>

                      <div className="text-sm font-medium tracking-[0.18em] text-slate-400 sm:whitespace-nowrap sm:text-right sm:text-base">
                      {experience.dates}
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
