import HeroTextStagger from "@/components/animation/HeroTextStagger";
import ImageShutter from "@/components/animation/ImageShutter";
import Reveal from "@/components/animation/Reveal";
import Image from "next/image";

export default function ContactHeroSection() {
  return (
    <section className="relative overflow-hidden w-full h-140">
      <ImageShutter className="absolute inset-0">
        <div className="w-full h-full relative">
          <Image
            src="/contact/Contact.jpg"
            alt="Beautifull interior design"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-x-0 bottom-14 z-3">
          <div className="container mx-auto">
            <div className="w-full max-w-160">
              <HeroTextStagger
                text="Let’s Bring Your Dream Space to Life"
                delay={1.1}
                className="text-(--background)"
              />
              <Reveal delay={1.6} className="mt-3">
                <p className="text-(--background)">
                  Have a project in mind? Reach out to us and let’s turn your
                  ideas into a beautifully designed space.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Shadow */}
        <span className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-(--foreground) to-transparent" />
      </ImageShutter>
    </section>
  );
}
