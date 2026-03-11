import Image from "next/image";

const BRAND_LOGOS = [
  "/brands/brand-1.png",
  "/brands/brand-2.png",
  "/brands/brand-3.png",
  "/brands/brand-4.png",
  "/brands/brand-5.png",
  "/brands/brand-6.png",
  "/brands/brand-7.png",
  "/brands/brand-8.png",
];

export default function BrandSlider() {
  return (
    <div className="w-full relative">
      <div className="flex w-max animate-marquee">
        {
          [...BRAND_LOGOS, ...BRAND_LOGOS].map((item,i)=>(
            <div key={i} className="w-44 h-14 relative mx-6">
              <Image
                src={item}
                alt="Brand Logo"
                fill
                className="object-contain"
                sizes="176px"
              />
            </div>
          ))
        }
      </div>

      <span className="absolute inset-y-0 left-0 w-40 lg:w-140 bg-linear-to-r from-(--background) to-transparent pointer-events-none"/>
      <span className="absolute inset-y-0 right-0 w-40 lg:w-140 bg-linear-to-l from-(--background) to-transparent pointer-events-none"/>
    </div>
  );
}