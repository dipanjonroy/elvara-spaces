"use client";

import { reviewsData } from "@/lib/reviews";
import ReviewCard from "./ReviewCard";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type Props = {
  direction: "up" | "down";
};

export default function ReviewSlider({ direction = "up" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Tween | null>(null);

  const reviews = [...reviewsData, ...reviewsData];

  useGSAP(() => {
    const el = containerRef.current;

    if (!el) return;

    const distance = el.scrollHeight / 2;
    timelineRef.current = gsap.fromTo(
      el,
      { y: direction === "up" ? 0 : -distance },
      {
        y: direction === "up" ? -distance : 0,
        ease: "none",
        repeat: -1,
        duration: 20,
      },
    );
  });

  const slow = () => {
    timelineRef.current?.timeScale(0.3);
  };

  const normal = () => {
    timelineRef.current?.timeScale(1);
  };

  return (
    <div
      onMouseEnter={slow}
      onMouseLeave={normal}
      className="overflow-hidden h-200"
    >
      <div ref={containerRef} className="flex flex-col">
        {reviews.map((item, i) => (
          <ReviewCard key={i} review={item} />
        ))}
      </div>
    </div>
  );
}
