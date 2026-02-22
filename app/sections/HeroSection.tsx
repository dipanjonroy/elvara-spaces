"use client"

import HappyCustomers from "@/components/shared/HappyCustomers";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full h-screen">
      <div className="relative w-full h-full">
        <div className="w-full h-full relative">
          <Image
            src="/Hero-Image.jpg"
            alt="Modern Interior Design"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <span className="absolute inset-x-0 bottom-0 h-150 bg-linear-to-t from-(--foreground)/80 to-transparent z-1 pointer-events-none" />

        <div className="absolute inset-0 pb-14 2xl:pb-20 z-3">
          <div className="container h-full mx-auto">
            <div className="w-full h-full flex flex-col justify-end">
              <div className="flex items-end justify-between">
                <div className="w-full sm:w-2/3 xl:w-1/2 2xl:w-2/3">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-(--background) leading-tight">
                    Functional, Elegant & Fully Customized Interiors —
                    Residential to Commercial
                  </h1>

                  <PrimaryButton
                    onClick={() => console.log("Btn Clicked")}
                    name="Book Free Consultation"
                    className="bg-(--background) text-(--text-color) mt-8"
                    iconClass="bg-(--foreground) text-(--background)"
                  />
                </div>

                <div className="hidden flex-1 sm:flex items-end justify-end">
                  <HappyCustomers/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
