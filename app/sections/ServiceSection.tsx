"use client";

import SectionHeader from "@/components/shared/SectionHeader";
import { services } from "@/lib/services";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EntryBottom from "@/components/animation/EntryBottom";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [prevActiveIndex, setPrevActiveIndex] = useState<number | null>(null);

  const btnWrapperRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const handleServiceChange = (i: number) => {
    if (i === activeIndex) return;

    setPrevActiveIndex(activeIndex);
    setActiveIndex(i);
  };

  // Btns Animation
  useEffect(() => {
    if (!btnWrapperRef.current) return;

    const ctx = gsap.context(() => {
      const btns = gsap.utils.toArray<HTMLButtonElement>(
        btnWrapperRef.current!.children,
      );

      btns.forEach((btn) => {
        gsap.from(btn, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "expo.out",
          scrollTrigger: {
            trigger: btn,
            start: "top bottom",
            toggleActions: "play none none reverse",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  // Image enter animation
  useEffect(() => {
    if (!imageWrapperRef.current) return;

    const firstImage = imageWrapperRef.current!.children[0];

    gsap.from(firstImage, {
      scale: 1.2,
      opacity: 0,
      duration: 3,
      ease: "expo.out",
      scrollTrigger: {
        trigger: firstImage,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  // Image change animation
  useEffect(() => {
    if (prevActiveIndex === null) return;

    const imageElements = imageRef.current?.children;
    const textElements = textRef.current?.children;

    if (!imageElements || !textElements) return;

    const [oldImage, newImage] = imageElements;
    const [oldText, newText] = textElements;

    const tl = gsap.timeline();

    // IMAGE
    tl.set(newImage, { opacity: 0, scale: 1.1 });

    tl.to(
      oldImage,
      {
        opacity: 0,
        scale: 1.05,
        duration: 0.6,
        ease: "power2.out",
      },
      0,
    );

    tl.to(
      newImage,
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      },
      0,
    );

    // TEXT
    tl.set(newText, { opacity: 0, y: 20 }, 0);

    tl.to(
      oldText,
      {
        opacity: 0,
        y: -20,
        duration: 0.4,
      },
      0,
    );

    tl.to(
      newText,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
      },
      0,
    );
  }, [activeIndex, prevActiveIndex]);

  return (
    <section className="py-20 md:py-25 lg:py30">
      <div className="container mx-auto">
        <div className="w-full">
          <div className="w-full mx-auto">
            <SectionHeader
              badge="Our Services"
              title="Our Interior Design & Renovation Services"
              align="center"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-20 mt-14 lg:mt-24">
            <div
              ref={btnWrapperRef}
              className="w-full flex flex-col gap-6 lg:gap-8"
            >
              {services.map((item, i) => {
                const isActive = activeIndex === i;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleServiceChange(i)}
                    className="text-left pb-6 lg:pb-8 border-b cursor-pointer"
                  >
                    <span className="flex items-center justify-between">
                      <span
                        className={`text-xl lg:text-2xl transition-all duration-400 ${isActive ? "font-bold" : "font-normal"}`}
                      >
                        {item.name}
                      </span>
                      <Image
                        src="/services/up-arrow.png"
                        alt="Arrow Image"
                        width={70}
                        height={5}
                        className={`hidden lg:block w-auto h-auto transition-all duration-1000 ease-in-out ${isActive ? "translate-x-0 opacity-100" : "-translate-x-30 opacity-0"}`}
                      />
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Services Info */}
            <div ref={imageWrapperRef} className="w-full h-auto">
              <div
                ref={imageRef}
                className="w-full h-70 md:h-80 lg:h-100 xl:h-120 relative rounded-3xl overflow-hidden"
              >
                {prevActiveIndex !== null && (
                  <div className="absolute inset-0">
                    <Image
                      src={services[prevActiveIndex].img}
                      alt={services[prevActiveIndex].name}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                      loading="eager"
                    />
                  </div>
                )}

                <div className="absolute inset-0">
                  <Image
                    src={services[activeIndex].img}
                    alt={services[activeIndex].name}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                    loading="eager"
                  />
                </div>
              </div>

              <EntryBottom>
                <div ref={textRef} className="relative w-full mt-5 min-h-15">
                  {prevActiveIndex !== null && (
                    <p className="absolute inset-0">
                      {services[prevActiveIndex].desc}
                    </p>
                  )}

                  <p className="absolute inset-0">
                    {services[activeIndex].desc}
                  </p>
                </div>
              </EntryBottom>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
