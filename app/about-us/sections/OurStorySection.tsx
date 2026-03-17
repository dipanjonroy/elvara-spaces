import EntryBottom from "@/components/animation/EntryBottom";
import ImageShutter from "@/components/animation/ImageShutter";
import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";

export default function OurStorySection() {
  return (
    <section className="py-20 md:py-25 lg:py-30 relative z-3 bg-(--background)">
      <div className="container mx-auto">
        <div className="w-full xl:max-w-160">
          <SectionHeader
            badge="Our Story"
            title="Our Journey in Designing Meaningful Spaces"
          />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-12 mt-8">
          <ImageShutter className="w-full aspect-16/10 relative overflow-hidden rounded-3xl">
            <Image
              src="/aboutpage/OurStory.jpg"
              alt="Interior designers team"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </ImageShutter>

          <div className="flex flex-col justify-between gap-9">
            <div className="space-y-4">
              <EntryBottom>
                <p>
                  Our studio began with a simple belief — that every space has a
                  story to tell. From the very first sketch to the final
                  styling, we aim to create interiors that are not just
                  beautiful, but also deeply personal and functional.
                </p>
              </EntryBottom>

              <EntryBottom className="mt-5">
                <p>
                  For me, interior design is about more than aesthetics. It’s
                  about understanding people’s lives and crafting spaces that
                  make daily life feel effortless, inspiring, and truly
                  enjoyable.
                </p>
              </EntryBottom>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <EntryBottom className="w-full space-y-3">
                <h5 className="font-bold text-2xl">Our Mission</h5>
                <p>
                  To craft living and working spaces that reflect individuality,
                  comfort, and timeless style.
                </p>
              </EntryBottom>

              <EntryBottom className="w-full space-y-3">
                <h5 className="font-bold text-2xl">Our Vision</h5>
                <p>
                  To be recognized as a studio that transforms ordinary spaces
                  into extraordinary experiences, where design meets lifestyle
                  seamlessly.
                </p>
              </EntryBottom>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
