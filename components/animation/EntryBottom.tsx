"use client";

import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

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
          start: "top 90%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  return (
    <div ref={animRef} className={`w-full ${className}`}>
      {children}
    </div>
  );
}
