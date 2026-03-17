"use client";

import HeroTextStagger from "@/components/animation/HeroTextStagger";
import ImageShutter from "@/components/animation/ImageShutter";
import Reveal from "@/components/animation/Reveal";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

const HEROTEXT = "Spaces That Speak Your Story";

export default function AboutHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !headingRef.current || !paraRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "50% 50%",
          scrub: true,
        },
      });

      tl.to(headingRef.current,{y: -200,ease:"none"}, 0)
        .to(paraRef.current, {y: -200,ease:"none"},0)
        .to(sectionRef.current,{y:160,ease:"none"},0)
    });

    return () => ctx.revert();
  });

  return (
    <section ref={sectionRef} className="relative w-full h-svh">
      <ImageShutter className="relative w-full h-full">
        <Image
          src="/aboutpage/AboutHero.jpg"
          alt="About page hero image"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </ImageShutter>

      <div className="absolute inset-0 pb-20 z-3">
        <div className="container h-full mx-auto">
          <div className="w-full h-full flex items-end ">
            <div className="w-full md:max-w-130 space-y-2">
              <div ref={headingRef}>
                <HeroTextStagger
                  text={HEROTEXT}
                  delay={1.1}
                  className="text-(--background)"
                />
              </div>
              <Reveal delay={1.6}>
                <p ref={paraRef} className="text-(--background)">
                  Our interiors reflect who you are — thoughtful, unique, and
                  designed to enhance the way you live every day.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
