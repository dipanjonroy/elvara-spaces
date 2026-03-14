"use client";

import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type ImageShutterProps = {
  children: React.ReactNode;
  className: string;
};

export default function ImageShutter({
  children,
  className,
}: ImageShutterProps) {
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!imageRef.current) return;

      gsap.fromTo(
        imageRef.current,
        { clipPath: "inset(0% 0% 100% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
          },
        },
      );
    },
    { scope: imageRef },
  );

  return (
    <div
      ref={imageRef}
      style={{ clipPath: "inset(0% 0% 100% 0%)" }}
      className={className}
    >
      {children}
    </div>
  );
}
