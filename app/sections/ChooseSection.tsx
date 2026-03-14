"use client";

import EntryBottom from "@/components/animation/EntryBottom";
import SectionHeader from "@/components/shared/SectionHeader";
import { whyUs } from "@/lib/whyUs";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import useWindowWidth from "@/hooks/useWindowWidth";

gsap.registerPlugin(ScrollTrigger);

export default function ChooseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const itemCardRef = useRef<HTMLDivElement>(null);

  const windowWidth = useWindowWidth();

  useGSAP(() => {
    if (windowWidth >= 1024) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 25%",
        end: "bottom bottom",
        pin: stickyRef.current,
        pinSpacing: false,
        anticipatePin: 0,
        scrub: false,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [windowWidth]);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLDivElement>(
      itemCardRef.current!.children,
    );

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          y: 30,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "bottom top",
            toggleActions: "play reverse play reverse",
          },
        },
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-25 lg:py-30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-22 xl:gap-40">
          <div className="relative">
            <div
              ref={stickyRef}
              style={{ willChange: "transform", transform: "translateZ(0)" }}
            >
              <SectionHeader
                badge="Why us"
                title="Why Clients Trust Us With Their Spaces"
              />
              <EntryBottom>
                <p className="mt-6">
                  We combine expert design, meticulous execution, and
                  personalized solutions for every project. From homes to
                  offices, kitchens to full renovations, our clients experience
                  lasting quality and seamless transformations.
                </p>
              </EntryBottom>
            </div>
          </div>

          <div className="w-full">
            <div ref={itemCardRef} className="space-y-14 lg:space-y-20">
              {whyUs.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="bg-(--foreground)/90 p-10 md:p-14 xl:p-16 rounded-3xl"
                  >
                    <div className="space-y-6">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-(--foreground) flex items-center justify-center text-(--background) text-3xl">
                        <Icon />
                      </div>
                      <h3 className="text-(--background) font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-(--background)">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
