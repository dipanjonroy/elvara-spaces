"use client";

import SectionHeader from "@/components/shared/SectionHeader";
import LinkButton from "@/components/ui/LinkButton";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import Counter from "@/components/animation/Counter";
import EntryBottom from "@/components/animation/EntryBottom";
import ImageShutter from "@/components/animation/ImageShutter";
import { gsap } from "@/lib/gsap";

export default function AboutSection() {
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      {
        clipPath: "inset(0% 0% 100% 0%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
        },
      },
    );
  });

  return (
    <section className="py-20 md:py-25 lg:py-30">
      <div className="container mx-auto">
        <div className="w-full max-w-180">
          <SectionHeader
            badge="About us"
            title="Where Experience Meets Intentional Design"
          />
        </div>

        <div className="flex flex-col xl:flex-row gap-10 lg:gap-20 mt-10">
          <ImageShutter className="w-full aspect-8/6 relative rounded-3xl overflow-hidden">
            <Image
              src="/About_Image.jpg"
              alt="About us image"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </ImageShutter>

          <div className="w-full flex flex-col gap-10 xl:gap-0 lg:justify-between">
            <div className="space-y-9">
              <EntryBottom>
                <p className="w-full xl:max-w-140">
                  We believe interior design is not decoration — it&apos;s
                  problem-solving through space. We believe great interiors are
                  built on understanding how people live, work, and move through
                  a space. Every project is guided by thoughtful planning,
                  honest communication, and a commitment to creating spaces that
                  feel functional, comfortable, and timeless.
                </p>
              </EntryBottom>

              <EntryBottom>
                <LinkButton
                  name="Explore More"
                  className="bg-(--foreground) text-(--background)"
                  iconClass="bg-(--background) text-(--foreground)"
                  path=""
                />
              </EntryBottom>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-0 sm:justify-between">
              <div className="">
                <Counter
                  end={60}
                  duration={2}
                  suffix="+"
                  className="font-bold text-4xl lg:text-6xl"
                />
                <span className="font-medium opacity-80">
                  Projects Completed
                </span>
              </div>
              <span className="w-full sm:w-px h-px sm:h-14 bg-(--foreground)" />
              <div className="">
                <Counter
                  end={10}
                  duration={1}
                  suffix="+"
                  className="font-bold text-4xl lg:text-6xl"
                />
                <span className="font-medium opacity-80">
                  Years of Experience
                </span>
              </div>
              <span className="w-full sm:w-px h-px sm:h-14 bg-(--foreground)" />
              <div className="">
                <Counter
                  end={30}
                  duration={1}
                  suffix="+"
                  className="font-bold text-4xl lg:text-6xl"
                />
                <span className="font-medium opacity-80">
                  Awards & Recognition
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
