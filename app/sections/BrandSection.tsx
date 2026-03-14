import BrandSlider from "@/components/shared/BrandSlider";

export default function BrandSection() {
  return (
    <section className="pt-20 pb-10 md:pt-25 md:pb-20 lg:pt-40">
      <div className="container mx-auto">
        <div className="w-full flex flex-col lg:flex-row items-center gap-6 xl:gap-20 overflow-hidden">
          <div className="w-full lg:w-1/6">
            <span className="text-lg lg:text-xl">
              Trusted by +50 ambitous
              <br /> brands worldwide
            </span>
          </div>
          <div className="w-full lg:flex-1 overflow-hidden">
            <BrandSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
