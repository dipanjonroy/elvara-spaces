"use client";

import LinkButton from "@/components/ui/LinkButton";
import SectionHeader from "@/components/shared/SectionHeader";
import { projects } from "@/lib/projects";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import EntryBottom from "@/components/animation/EntryBottom";
import useWindowWidth from "@/hooks/useWindowWidth";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSection() {
  const contentRef = useRef<HTMLDivElement>(null);
  const windowWidth = useWindowWidth();

  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLDivElement>(
      contentRef.current!.querySelectorAll(".project-card"),
    );

    const triggers: ScrollTrigger[] = [];

    const getStartValue = ()=>{
      if(windowWidth < 640) return "top 19%";
      return "top 22%"
    }

    const initAnimations = () => {
      triggers.forEach((st) => st.kill());
      triggers.length = 0;

      const startValue = getStartValue();

      items.forEach((item, i) => {
        const isLast = i === items.length - 1;
        const tween = gsap.to(item, {
          scale: isLast ? 1 : 0.7 + 0.2 * (i / (items.length - 1)),
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: startValue,
            endTrigger: contentRef.current,
            scrub: true,
            pin: item,
            pinSpacing: false,
            invalidateOnRefresh: true,
          },
        });

        const st = ScrollTrigger.getById(tween.scrollTrigger?.vars.id ?? "");
        if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
      });

      ScrollTrigger.refresh();
    };

    if (document.readyState === "complete") {
      requestAnimationFrame(initAnimations);
    } else {
      window.addEventListener("load", initAnimations, { once: true });
    }
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
                path="#"
                className="bg-(--foreground) text-(--background)"
                iconClass="bg-(--background) text-(--text-color)"
              />
            </EntryBottom>
          </div>

          {/* Projects */}
          {projects.map((item) => (
            <div
              key={item.id}
              className="project-card w-full lg:w-220 2xl:w-260 h-130 lg:h-120 2xl:h-140 mx-auto relative mt-[50vh] rounded-3xl overflow-hidden"
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

              <div className="absolute inset-x-6 md:inset-x-20 bottom-6 md:bottom-20">
                <div className="w-full md:w-max p-7 bg-black/10 lg:bg-black/30 backdrop-blur-sm rounded-2xl text-white">
                  <span className="text-sm">{item.category}</span>
                  <h3 className="mt-4">{item.title}</h3>
                  <span className="font-light text-sm opacity-70">
                    {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-screen"></div>
    </section>
  );
}
