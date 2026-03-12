"use client";

import PrimaryButton from "@/components/ui/PrimaryButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
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
          ease: "power2.out",
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
    <section className="py-20">
      <div className="container mx-auto">
        <div className="w-full max-w-300 mx-auto p-10 rounded-3xl bg-(--foreground)">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full text-(--background) space-y-5">
              <h2>Get Expert Guidance for Your Project</h2>
              <p className="opacity-70">
                From concept to completion, we design with purpose.
              </p>
              <PrimaryButton
                name="Get Free Consultation"
                className="bg-(--background) text-(--text-color)"
                iconClass="bg-(--foreground) text-(--background)"
                onClick={() => console.log("Clicked")}
              />
            </div>

            <div
              ref={imageRef}
              style={{ clipPath: "inset(0% 0 100% 0)" }}
              className="w-full aspect-12/8 relative overflow-hidden rounded-3xl"
            >
              <Image
                src="/CTAImage.jpg"
                alt="CTA Image"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
