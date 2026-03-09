"use client";

import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import { useState } from "react";

export default function BeforeAfterSection() {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="pb-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <SectionHeader title="From Outdated to Outstanding" align="center" />

          <div
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            className="w-full relative mt-10"
          >
            <div
              onMouseMove={handleMove}
              className="relative w-full max-w-250 aspect-video overflow-hidden m-auto rounded-3xl select-none"
            >
              <Image
                src="/After.jpg"
                alt="After renovation image"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 600px) 100vw, 1000px"
              />

              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src="/Before.jpg"
                  alt="Before renovation image"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 600px) 100vw, 1000px"
                />
              </div>

              <div
                className="absolute inset-y-0 w-1 bg-white cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute w-4 h-4 bg-white rounded-full top-1/2 -left-1.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
