"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

interface EntryBottomProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function EntryBottom({
  children,
  delay,
  className,
}: EntryBottomProps) {
  const animRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!animRef.current) return;

    gsap.fromTo(
      animRef.current,
      {
        y: 40,
        opacity: 0,
        filter: "blur(8px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: animRef.current,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      },
    );
  }, {scope: animRef});

  return (
    <div ref={animRef} className={`w-full ${className}`}>
      {children}
    </div>
  );
}
