"use client"

import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

type ScrollTextRevealType = {
  text: string;
  className?: string;
};

export default function ScrollTextReveal({
  text,
  className,
}: ScrollTextRevealType) {
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
    <h2 ref={headingRef} className={className}>
      {text.split(" ").map((word, i) => (
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
  );
}
