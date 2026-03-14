"use client";

import HappyCustomers from "@/components/shared/HappyCustomers";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

import heroImage from "@/public/Hero-Image.jpg";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const customerRef = useRef<HTMLDivElement>(null);

  const heroText =
    "Functional, Elegant & Fully Customized Interiors — Residential to Commercial";

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        heroImageRef.current,
        { clipPath: "inset(0% 0% 100% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          delay: 0.6,
          ease: "power4.inout",
        },
      );

      if (h1Ref.current) {
        const words = h1Ref.current.querySelectorAll(".word");

        tl.fromTo(
          words,
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: {
              each: 0.07,
              ease: "power2.out",
            },
            ease: "back.out(1.4)",
          },
          "-=0.3",
        );
      }

      if (btnRef.current) {
        tl.fromTo(
          btnRef.current,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: "back.out(1.4)",
          },
          "-=0.4",
        );
      }

      if (customerRef.current) {
        tl.fromTo(
          customerRef.current,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: "back.out(1.4)",
          },
          "-=0.4",
        );
      }
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="w-full h-screen">
      <div className="relative w-full h-full">
        <div
          ref={heroImageRef}
          style={{ clipPath: "inset(0% 0% 100% 0%)" }}
          className="w-full h-full relative bg-(--background)"
        >
          <Image
            src={heroImage}
            alt="Modern Interior Design"
            fill
            priority
            placeholder="blur"
            sizes="100vw"
            className="object-cover"
          />

          <span className="absolute inset-x-0 bottom-0 h-150 bg-linear-to-t from-(--foreground)/80 to-transparent z-1 pointer-events-none" />
        </div>

        <div className="absolute inset-0 pb-20 z-3">
          <div className="container h-full mx-auto">
            <div className="w-full h-full flex flex-col justify-end">
              <div className="flex items-end justify-between">
                <div className="w-full sm:w-2/3 xl:w-1/2 2xl:w-2/3">
                  <h1
                    ref={h1Ref}
                    className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-(--background) leading-tight"
                  >
                    {heroText.split(" ").map((word, i) => (
                      <span key={i} className="word inline-block me-2 lg:me-3">
                        {word}
                      </span>
                    ))}
                  </h1>

                  <div ref={btnRef} style={{ opacity: 0, y: 50 }}>
                    <PrimaryButton
                      onClick={() => console.log("Btn Clicked")}
                      name="Book Free Consultation"
                      className="bg-(--background) text-(--text-color) mt-8"
                      iconClass="bg-(--foreground) text-(--background)"
                    />
                  </div>
                </div>

                <div
                  ref={customerRef}
                  style={{ opacity: 0, y: 50 }}
                  className="hidden flex-1 sm:flex items-end justify-end"
                >
                  <HappyCustomers />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
