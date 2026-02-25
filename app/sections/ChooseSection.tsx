import SectionHeader from "@/components/ui/SectionHeader";
import { whyUs } from "@/lib/whyUs";

export default function ChooseSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-22 xl:gap-40">
          <div className="relative">
            <div className="lg:sticky lg:top-[30%]">
              <SectionHeader
                badge="Why us"
                title="Why Clients Trust Us With Their Spaces"
              />
              <p className="mt-6">
                We combine expert design, meticulous execution, and personalized
                solutions for every project. From homes to offices, kitchens to
                full renovations, our clients experience lasting quality and
                seamless transformations.
              </p>
            </div>
          </div>

          <div className="w-full">
            <div className="space-y-14 lg:space-y-20">
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
