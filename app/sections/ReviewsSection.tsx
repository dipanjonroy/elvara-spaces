import EntryBottom from "@/components/animation/EntryBottom";
import ReviewSlider from "@/components/shared/ReviewSlider";
import SectionHeader from "@/components/shared/SectionHeader";

export default function ReviewsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center gap-12">
          <div className="w-full xl:w-150">
            <SectionHeader
              badge="Testimonials"
              title="Experiences That Speak for Our Work"
            />
            <EntryBottom>
              <p className="mt-5">
                Our work is best measured by the satisfaction of our clients.
                Here&apos;s what homeowners and businesses say about their
                experience—from design to final handover.
              </p>
            </EntryBottom>
          </div>

          {/* Review area */}
          <div className="relative flex-1">
            <div className="w-full flex gap-6 ">
              <ReviewSlider direction="up" />
              <div className="hidden md:block">
                <ReviewSlider direction="down" />
              </div>
            </div>

            <div className="absolute top-0 inset-x-0 h-1/3 bg-linear-to-b from-(--background) to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-1/3 bg-linear-to-t from-(--background) to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
