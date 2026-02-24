import BrandSlider from "@/components/shared/BrandSlider";

export default function BrandSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="w-full flex flex-col items-center gap-10 xl:gap-18 overflow-hidden">
          <h2 className="font-semibold leading-8 ">
            Our Trusted Brands
          </h2>
          <div className="w-full lg:w-200 overflow-hidden">
            <BrandSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
