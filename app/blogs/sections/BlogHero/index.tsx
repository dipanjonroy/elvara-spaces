"use client";

import HeroTextStagger from "@/components/animation/HeroTextStagger";
import ImageShutter from "@/components/animation/ImageShutter";
import Reveal from "@/components/animation/Reveal";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function BlogHeroSection() {
  // Elements References
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);

  // Scroll effect
  useGSAP(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !headingRef.current || !paraRef.current)
        return;

      // scroll timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "50% 50%",
          scrub: true,
        },
      });

      gsap.set(sectionRef.current, { y: 0 });

      tl.to(headingRef.current, { y: -100, ease: "none" }, 0);
      tl.to(paraRef.current, { y: -100, ease: "none" }, 0);
      tl.to(sectionRef.current, { y: 200, marginTop: -200, ease: "none" }, 0);
    });

    return () => ctx.revert();
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-svh 2xl:h-140 overflow-hidden"
    >
      <ImageShutter className="w-full h-full relative">
        <div className="absolute inset-0">
          <div className="w-full h-full relative">
            <Image
              src="/articles/BlogBanner.jpg"
              alt="Blogs page banner"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="absolute inset-x-0 bottom-6">
            <div className="container mx-auto">
              <div className="w-full max-w-160">
                <div ref={headingRef}>
                  <HeroTextStagger
                    text="Design Stories, Ideas & Inspiration for Every Space"
                    delay={1.1}
                    className="text-(--background)"
                  />
                </div>

                <Reveal delay={1.6} className="mt-3">
                  <p ref={paraRef} className="text-(--background)">
                    From small upgrades to complete makeovers, discover insights
                    that bring your vision to life.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </ImageShutter>
    </section>
  );
}
