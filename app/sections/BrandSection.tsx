import BrandSlider from "@/components/shared/BrandSlider";

export default function BrandSection() {
  return (
    <section className="pt-40 pb-20">
      <div className="container mx-auto">
        <div className="w-full flex flex-col lg:flex-row items-center gap-10 xl:gap-20 overflow-hidden">
          <div className="w-full lg:w-1/6">
            <span className="text-xl">
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
