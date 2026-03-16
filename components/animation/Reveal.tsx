"use client"

import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export default function Reveal({ children, delay, className }: RevealProps) {
  const elRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!elRef.current) return;

      gsap.from(elRef.current, {
        y: 40,
        opacity:0,
        delay,
        duration: 1.2,
        ease: "back.out(1.4)",
      });
    },
    { scope: elRef },
  );

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
}
