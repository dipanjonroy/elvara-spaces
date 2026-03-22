"use client";

import HeroTextStagger from "@/components/animation/HeroTextStagger";
import ImageShutter from "@/components/animation/ImageShutter";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

type ProjectType = {
  id: number;
  title: string;
  category: string;
  images: string[];
  location: string;
  slug: string;
  clientName: string;
  date: string;
};

export default function SingleProjectHeroSection({
  project,
}: {
  project: ProjectType;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      if (!infoRef.current || !sectionRef.current || !headingRef.current)
        return;

      gsap.to(infoRef.current, {
        y: 0,
        delay: 1,
        ease: "power1.out",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "50% 50%",
          scrub: true,
        },
      });

      tl.to(headingRef.current, { y: -100, ease: "none" }, 0)
        .to(infoRef.current, { y: -160, ease: "none" }, 0)
        .to(sectionRef.current, { y: 160, ease: "none" }, 0);
    });

    return () => ctx.revert();
  });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-25 lg:py-30 w-full h-svh overflow-hidden"
    >
      <ImageShutter className="absolute inset-0">
        <div className="w-full h-full relative">
          <Image
            src={project?.images[0]}
            alt={project?.title}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div
          ref={infoRef}
          style={{ transform: "translateY(200px)", willChange: "transform" }}
          className="absolute inset-x-0 bottom-14 z-3"
        >
          <div className="container mx-auto w-full h-full space-y-5">
            <div ref={headingRef}>
              <HeroTextStagger
                text={project?.title}
                delay={1.1}
                className="text-(--background)"
              />
            </div>
            <div className="w-full rounded-2xl p-10 bg-(--foreground)/10 backdrop-blur-sm border border-(--white-border)">
              <div className="w-full flex flex-col sm:flex-row flex-wrap items-start justify-between gap-8">
                <div className="flex items-center gap-5">
                  <div className="w-px h-15 bg-(--background)" />
                  <div className="text-(--background)">
                    <span className="block font-thin text-sm">Client</span>
                    <span className="font-semibold text-xl">
                      {project?.clientName}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-px h-15 bg-(--background)" />
                  <div className="text-(--background)">
                    <span className="block font-thin text-sm">Location</span>
                    <span className="font-semibold text-xl capitalize">
                      {project?.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-px h-15 bg-(--background)" />
                  <div className="text-(--background)">
                    <span className="block font-thin text-sm">Service</span>
                    <span className="font-semibold text-xl capitalize">
                      {project?.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-px h-15 bg-(--background)" />
                  <div className="text-(--background)">
                    <span className="block font-thin text-sm">Date</span>
                    <span className="font-semibold text-xl capitalize">
                      {project?.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-1/2 bg-linear-to-t from-(--foreground) to-transparent" />
      </ImageShutter>
    </section>
  );
}
