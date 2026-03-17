"use client";

import Achievements from "@/components/shared/Achievements";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
const HEADINGTEXT =
  "Our design-driven approach transforms trust into meaningful milestones. Every project reflects our commitment to thoughtful design, attention to detail, and spaces that enhance everyday living.";

export default function AchievementSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!headingRef.current) return;

      const chars = headingRef.current.querySelectorAll(".char");

      gsap.fromTo(
        chars,
        { opacity: 0.3 },
        {
          opacity: 1,
          stagger: 1,
          ease: "none",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top bottom",
            end: "top 10%",
            scrub: 1,
          },
        },
      );
    },
    { scope: headingRef },
  );
  return (
    <section className="pt-20 md:pt-25 lg:pt-30">
      <div className="bg-(--foreground) py-20 lg:py-22 xl:py-30">
        <div className="container mx-auto">
          <div className="flex flex-col items-center w-full max-w-300 mx-auto gap-16">
            <h2
              ref={headingRef}
              className="text-center text-(--background) leading-tight"
            >
              {HEADINGTEXT.split(" ").map((word, i) => (
                <span key={i} className="inline-block me-4">
                  {word.split("").map((char, charIndex) => (
                    <span
                      key={charIndex}
                      className="char inline-block"
                      style={{ opacity: 0.3, willChange: "opacity" }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </h2>

            <Achievements
              className="flex flex-col sm:flex-row text-center items-center justify-center gap-16 sm:gap-8 lg:gap-18 xl:gap-24"
              itemAlign="center"
              color="white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
