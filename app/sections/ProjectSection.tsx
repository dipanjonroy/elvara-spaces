"use client";

import LinkButton from "@/components/ui/LinkButton";
import SectionHeader from "@/components/shared/SectionHeader";
import { projects } from "@/lib/projects";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import EntryBottom from "@/components/animation/EntryBottom";

export default function ProjectSection() {
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!contentRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLDivElement>(
        contentRef.current!.querySelectorAll(".project-card"),
      );

      const mm = gsap.matchMedia();

      mm.add("(min-width: 640px)", () => {
        cards.forEach((card, i) => {
          const isLast = i === cards.length - 1;

          gsap.to(card, {
            scale: isLast ? 1 : 0.8,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 22%",
              end: "bottom top",
              endTrigger: contentRef.current,
              pin: true,
              pinSpacing: false,
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
        });
      });

      mm.add("(max-width: 639px)", () => {
        cards.forEach((card, i) => {
          const isLast = i === cards.length - 1;

          gsap.to(card, {
            scale: isLast ? 1 : 0.8,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 15%",
              end: "bottom top",
              endTrigger: contentRef.current,
              pin: true,
              pinSpacing: false,
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
        });
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="pt-30 pb-20">
      <div className="container mx-auto">
        <div className="w-full" ref={contentRef}>
          {/* Title */}
          <div className="project-card flex flex-col items-center justify-center gap-3">
            <SectionHeader
              badge="Featured Projects"
              title="Spaces That Speak for Themselves"
              align="center"
            />

            <EntryBottom className="flex items-center justify-center">
              <p className="text-center w-full max-w-200">
                Every project we take on reflects thoughtful design, quality
                execution, and attention to detail.
              </p>
            </EntryBottom>

            <EntryBottom className="mt-4 flex items-center justify-center">
              <LinkButton
                name="View all projects"
                path="/projects"
                className="bg-(--foreground) text-(--background)"
                iconClass="bg-(--background) text-(--text-color)"
              />
            </EntryBottom>
          </div>

          {/* Projects */}
          {projects.map((item) => (
            <div
              key={item.id}
              className="project-card w-full lg:w-220 2xl:w-260 h-150 lg:h-120 2xl:h-140 mx-auto relative mt-[50vh] rounded-3xl overflow-hidden"
            >
              <div className="w-full h-full relative">
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(min-width:1536px) 1040px,(min-width:1024px) 880px, 100vw"
                  loading="eager"
                />
              </div>

              <div className="absolute inset-x-6 md:inset-x-12 bottom-6 md:bottom-12">
                <div className="w-full md:w-max p-6 bg-(--background) rounded-2xl text-(--text-color) shadow-lg">
                  <span className="text-sm">{item.category}</span>
                  <h3 className="mt-3">{item.title}</h3>
                  <span className="font-light text-sm opacity-70">
                    {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-dvh"></div>
    </section>
  );
}
