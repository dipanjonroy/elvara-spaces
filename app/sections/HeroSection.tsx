"use client";

import HappyCustomers from "@/components/shared/HappyCustomers";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import Image from "next/image";
import { useRef } from "react";

import heroImage from "@/public/Hero-Image.jpg";
import ImageShutter from "@/components/animation/ImageShutter";
import HeroTextStagger from "@/components/animation/HeroTextStagger";
import Reveal from "@/components/animation/Reveal";
import { useModalStore } from "@/store/ModalStore";
import BookingModal from "@/components/modals/BookingModal";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const {openModal} = useModalStore();

  const heroText =
    "Functional, Elegant & Fully Customized Interiors — Residential to Commercial";

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "50% 50%",
          scrub: true,
        },
      });

      tl.to(contentRef.current, { y: -200, ease: "none" }, 0).to(
        sectionRef.current,
        { y: 160, ease: "none" },
        0,
      );
    });

    return () => ctx.revert();
  });

  return (
    <section ref={sectionRef} className="relative w-full h-svh overflow-hidden">
      <ImageShutter className="relative w-full h-full">
        <div className="absolute inset-0">
          <div className="w-full h-full relative bg-(--background)">
            <Image
              src={heroImage}
              alt="Modern Interior Design"
              fill
              priority
              placeholder="blur"
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div ref={contentRef} className="absolute inset-0 pb-14 lg:pb-20 z-3">
          <div className="container h-full mx-auto">
            <div className="w-full h-full flex flex-col justify-end">
              <div className="flex items-end justify-between">
                <div className="w-full sm:w-2/3 xl:w-1/2 2xl:w-2/3">
                  <HeroTextStagger
                    text={heroText}
                    delay={1.1}
                    className="text-(--background)"
                  />

                  <Reveal delay={2.2}>
                    <PrimaryButton
                      onClick={() => openModal("bookingModal",<BookingModal/>,"center")}
                      name="Book Free Consultation"
                      className="bg-(--background) text-(--text-color) mt-6 lg:mt-8"
                      iconClass="bg-(--foreground) text-(--background)"
                    />
                  </Reveal>
                </div>

                <Reveal
                  delay={2.5}
                  className="hidden flex-1 sm:flex items-end justify-end"
                >
                  <HappyCustomers />
                </Reveal>
              </div>
            </div>
          </div>
        </div>

        <span className="absolute inset-x-0 bottom-0 h-150 bg-linear-to-t from-(--foreground)/80 to-transparent z-1 pointer-events-none" />
      </ImageShutter>
    </section>
  );
}
