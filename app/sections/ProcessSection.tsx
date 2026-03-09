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

  useGSAP(
    () => {
      const processCards = gsap.utils.toArray<HTMLElement>(
        processRef.current!.children,
      );

      gsap.from(processCards, {
        y: 150,
        duration: 0.8,
        ease: "power3.out",
        stagger: {
          each: 0.2,
          from: "start",
        },
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: processRef },
  );

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
                  className="bg-(--foreground)/90 h-70 lg:h-80 xl:h-90 rounded-3xl p-8"
                >
                  <div className="w-full h-full flex flex-col items-center justify-start space-y-3">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-(--foreground) flex items-center justify-center text-(--background) text-3xl">
                      <Icon />
                    </div>
                    <h3 className="text-(--background) font-semibold">
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
