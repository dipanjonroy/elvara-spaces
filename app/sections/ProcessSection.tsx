"use client";

import EntryBottom from "@/components/animation/EntryBottom";
import SectionHeader from "@/components/shared/SectionHeader";
import { processData } from "@/lib/process";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessSection() {
  const processRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!processRef.current) return;

    const mm = gsap.matchMedia();

    const cards = gsap.utils.toArray<HTMLElement>(processRef.current!.children);

    mm.add("(min-width: 640px)", () => {
      gsap.set(cards, {
        opacity: 0,
        y: 100,
        scale: 0.92,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 80%",
          end: "+=500",
          scrub: 1.2,
        },
      });

      tl.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.35,
        ease: "power2.out",
      });
    });

    mm.add("(max-width:639px)", () => {
      cards.forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 100,
          scale: 0.92,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });
    });
  });

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div>
          <div className="w-full max-w-200 mx-auto">
            <SectionHeader
              badge="Process"
              title="A Structured Approach to Exceptional Interiors"
              align="center"
            />
            <EntryBottom>
              <p className="text-center mt-5">
                We follow a structured, transparent process to ensure every
                project runs smoothly. From understanding your needs to
                delivering the final space, each step is carefully planned and
                executed.
              </p>
            </EntryBottom>
          </div>

          <div
            ref={processRef}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-15"
          >
            {processData.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="process-card bg-(--foreground)/90 h-70 lg:h-80 xl:h-105 2xl:h-90 rounded-3xl p-8"
                >
                  <div className="w-full h-full flex flex-col items-center justify-start space-y-3">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-(--foreground) flex items-center justify-center text-(--background) text-3xl">
                      <Icon />
                    </div>
                    <h3 className="text-(--background) text-center font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-(--background)/75 text-center">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
