"use client";

import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

type HeroTextProps = {
  text: string;
  delay: number;
  className: string;
};

export default function HeroTextStagger({
  text,
  delay,
  className,
}: HeroTextProps) {
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!h1Ref.current) return;

      const words = h1Ref.current.querySelectorAll(".word");

      gsap.fromTo(
        words,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay,
          stagger: {
            each: 0.07,
            ease: "power2.out",
          },
          ease: "back.out(1.4)",
        },
      );
    },
    { scope: h1Ref },
  );

  return (
    <h1 ref={h1Ref} className={className}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="word inline-block me-2">
          {word}
        </span>
      ))}
    </h1>
  );
}
