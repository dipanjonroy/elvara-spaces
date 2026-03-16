import HeroTextStagger from "@/components/animation/HeroTextStagger";
import ImageShutter from "@/components/animation/ImageShutter";
import Reveal from "@/components/animation/Reveal";
import Image from "next/image";

const HEROTEXT = "Spaces That Speak Your Story";

export default function AboutHeroSection() {
  return (
    <section className="relative w-full h-svh">
      <ImageShutter className="relative w-full h-full">
        <Image
          src="/aboutpage/AboutHero.jpg"
          alt="About page hero image"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </ImageShutter>

      <div className="absolute inset-0 pb-20 z-3">
        <div className="container h-full mx-auto">
          <div className="w-full h-full flex items-end ">
            <div className="w-full md:max-w-130 space-y-2">
              <HeroTextStagger
                text={HEROTEXT}
                delay={1.1}
                className="text-(--background)"
              />
              <Reveal delay={1.6}>
                <p className="text-(--background)">
                  Our interiors reflect who you are — thoughtful, unique, and
                  designed to enhance the way you live every day.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
