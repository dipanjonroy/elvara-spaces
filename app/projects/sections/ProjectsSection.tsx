"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import ProjectSkeleton from "@/components/skeletons/ProjectSkeleton";

const TABS: string[] = [
  "all",
  "residential",
  "commercial",
  "kitchen",
  "renovation",
  "bedroom",
  "ceiling",
];

export default function ProjectsSection() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [activeTab, setActiveTab] = useState<string>("all");
  const projectsRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => activeTab === project.category);

  useGSAP(() => {
    if (isLoading) return;
    const ctx = gsap.context(() => {
      if (!projectsRef.current) return;

      const mm = gsap.matchMedia();

      const breakPoints = {
        isMobile: "(max-width:768px)",
        isDesktop: "(min-width:769px)",
      };

      mm.add(breakPoints, (context) => {
        const { isMobile } = context;

        const cards = gsap.utils.toArray<HTMLAnchorElement>(
          projectsRef.current!.querySelectorAll(".projectCard"),
        );

        cards.forEach((card) => {
          const cardInfo = card.querySelector(".projectText");

          gsap.set(card, { clipPath: "inset(0% 0% 100% 0%)" });
          if (isMobile) {
            gsap.set(cardInfo, { scale: 0, opacity: 0 });
          }

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          });

          tl.to(card, {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 0.8,
          });

          if (isMobile && cardInfo) {
            tl.to(
              cardInfo,
              {
                scale: 1,
                opacity: 1,
                duration: 0.8,
              },
              "+=0.1",
            );
          }
        });
      });
    });

    return () => ctx.revert();
  }, [filteredProjects]);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  });

  return (
    <section className="py-20 md:py-25 lg:30 relative z-3 bg-(--background)">
      <div className="container mx-auto">
        <div className="space-y-16 xl:space-y-20">
          {/* Filter Tab Button */}
          <div className="w-full overflow-x-auto scrollbar-hide">
            <div className="flex items-center justify-center gap-3 min-w-max px-2">
              {TABS.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(item)}
                  className={`text-sm md:text-base lg:text-xl capitalize whitespace-nowrap cursor-pointer px-4 md:px-5 py-2 rounded-lg transition-colors ${
                    item === activeTab
                      ? "text-(--background) bg-(--foreground)"
                      : "bg-(--foreground)/20"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Filtered projects */}
          <div
            ref={projectsRef}
            className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-9"
          >
            {isLoading
              ? Array(6)
                  .fill(0)
                  .map((_, i) => <ProjectSkeleton key={i} />)
              : filteredProjects.map((item) => (
                  <Link key={item.id} href="#" className="projectCard">
                    <div className="relative w-full aspect-16/20 rounded-xl overflow-hidden group">
                      <div className="absolute inset-0 transform origin-center transition-transform duration-500 ease-in-out group-hover:scale-110 ">
                        <Image
                          src={item.images[0]}
                          alt={item.title}
                          fill
                          sizes="(max-width:640px) 100vw, (max-width:1280px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </div>

                      <div className="projectText absolute inset-x-5 bottom-5 bg-(--background) p-4 rounded-lg transform lg:translate-y-40 transition-transform duration-500 ease-in-out group-hover:lg:translate-y-0">
                        <span className="capitalize opacity-60 text-sm">
                          {item.category}
                        </span>
                        <h3 className="text-xl">{item.title}</h3>
                      </div>
                    </div>
                  </Link>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}
