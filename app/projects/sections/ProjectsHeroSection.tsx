"use client";

import HeroTextStagger from "@/components/animation/HeroTextStagger";
import ImageShutter from "@/components/animation/ImageShutter";
import Reveal from "@/components/animation/Reveal";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

export default function ProjectsHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !headingRef.current || !paraRef.current)
        return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "50% 50%",
          scrub: true,
        },
      });

      tl.to(headingRef.current, { y: -200, ease: "none" },0)
        .to(paraRef.current, { y: -200, ease: "none" },0)
        .to(sectionRef.current, { y: 160, ease: "none" },0);
    });

    return () => ctx.revert();
  });

  return (
    <section ref={sectionRef} className="w-full h-svh">
      <div className="absolute inset-0">
        <ImageShutter className="w-full h-full relative">
          <Image
            src="/projects/ProjectHero.jpg"
            alt="Projects Hero Image"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </ImageShutter>
      </div>

      <div className="absolute inset-0 pb-20 z-2">
        <div className="container mx-auto h-full">
          <div className="w-full h-full flex items-end">
            <div className="w-full md:max-w-130 space-y-3">
              <div ref={headingRef}>
                <HeroTextStagger
                  text="Designs That Turn Vision Into Reality"
                  delay={1.1}
                  className="text-(--background)"
                />
              </div>

              <Reveal delay={1.6}>
                <p ref={paraRef} className="text-(--background)">
                  Explore a collection of thoughtfully crafted spaces where
                  creativity, functionality, and detail come together to create
                  inspiring environments.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
