"use client";

import PrimaryButton from "@/components/ui/PrimaryButton";
import Image from "next/image";
import ImageShutter from "@/components/animation/ImageShutter";
import EntryBottom from "@/components/animation/EntryBottom";

export default function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="w-full max-w-300 mx-auto p-10 rounded-3xl bg-(--foreground)">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full text-(--background) space-y-5">
              <EntryBottom>
                <h2>Get Expert Guidance for Your Project</h2>
              </EntryBottom>

              <EntryBottom>
                <p className="opacity-70">
                  From concept to completion, we design with purpose.
                </p>
              </EntryBottom>

              <EntryBottom>
                <PrimaryButton
                  name="Get Free Consultation"
                  className="bg-(--background) text-(--text-color)"
                  iconClass="bg-(--foreground) text-(--background)"
                  onClick={() => console.log("Clicked")}
                />
              </EntryBottom>
            </div>

            <ImageShutter className="w-full aspect-12/8 relative overflow-hidden rounded-3xl">
              <Image
                src="/CTAImage.jpg"
                alt="CTA Image"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </ImageShutter>
          </div>
        </div>
      </div>
    </section>
  );
}
