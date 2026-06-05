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
    title: "Baccalaureate in Electrical and Connected Systems",
    company: "Robert Keller Vocational High School",
    companyUrl: "https://example.com",
    description:
      "MELEC: Electrical and Connected Systems.",
    dates: "2017",
  },
  {
    title: "Licence (BA) in History",
    company: "Paris-Sorbonne University (Paris 4)",
    companyUrl: "https://example.com",
    description:
      "History (BA), Year 2 – Paris-Sorbonne University (Paris 4) Strengthened skills in research methods and critical analysis.",
    dates: "2017 - 2019",
  },
  {
    title: "LLCER-English Studies",
    company: "Institut Catholique de Paris (ICP)",
    companyUrl: "https://example.com",
    description:
      "(Languages, Literatures, and Foreign & Regional Civilizations).",
    dates: "2019 - 2020",
  },
  {
    title: "MIIT Program (Network Administration)",
    company: "Learneo academie",
    companyUrl: "https://example.com",
    description:
      "Deepening network concepts and basic administration system.",
    dates: "2020 - 2021",
  },
  {
    title: "CCNA certification level (Cisco)",
    company: "Learneo academie",
    companyUrl: "https://example.com",
    description:
      "Networking foundations: equipment setup and key routing/switching principles.",
    dates: "2021",
  },
  {
    title: "Cybersecurity Assistant Training",
    company: "Pop School",
    companyUrl: "https://example.com",
    description:
      "Awareness and introductory practices in cybersecurity and system protection.",
    dates: "2022",
  },
  {
    title: "IT & Web",
    company: "National Red Cross (Paris)",
    companyUrl: "https://example.com",
    description:
      "Application Development Lead.",
    dates: "2023",
  },
  {
    title: "Full-Stack Web Developer Training",
    company: "Studi",
    companyUrl: "https://example.com",
    description:
      "Class in web development and digital tools (HTML/CSS/JS, best practices).",
    dates: "2024 - 2025",
  },

  {
    title: "IT internship",
    company: "Fundação Vitor Reis Morais (Lisbon)",
    companyUrl: "https://example.com",
    description:
      "Modernizing an old website. Supervising and finding suitable tools. Participating in testing, bug fixing and improving the user experience on the developed interfaces.",
    dates: "2026",
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
            Here are some of my educational and professional experiences, showcasing my journey in the IT and web development fields. Each experience has contributed to my growth and skills in different ways, from foundational education to hands-on internships.
          </p>
        </div>

        <div className="relative pb-8 pl-10 sm:pl-14 md:pl-0 before:absolute before:left-4 md:before:left-1/2 before:top-0 before:h-full before:w-[2px] before:-translate-x-1/2 before:bg-[#64ffda]/45">
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
                  className={`relative w-full rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-sm transition-all duration-700 ease-out sm:p-6 md:w-[calc(50%-2rem)] before:hidden md:before:block md:before:absolute md:before:top-8 md:before:h-3 md:before:w-3 md:before:rounded-full md:before:border md:before:border-[#0a192f] md:before:bg-[#64ffda] md:before:shadow-[0_0_0_6px_rgba(100,255,218,0.12)] ${
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

          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0.5 left-4 h-3.5 w-3.5 -translate-x-1/2 rotate-45 border-b-2 border-r-2 border-[#64ffda] md:left-1/2"
          />
        </div>
      </div>
    </section>
  );
}
