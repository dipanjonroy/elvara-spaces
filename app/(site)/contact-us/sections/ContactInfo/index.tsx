import ImageShutter from "@/components/animation/ImageShutter";
import ContactInforForm from "./ContactInforForm";
import ContactInfoText from "./ContactInfoText";
import Image from "next/image";

export default function ContactInfo() {
  return (
    <section className="py-20 md:py-25 lg:py-30">
      <div className="container mx-auto">
        <div className="w-full flex gap-20">
          {/* Content area */}
          <div className="w-full space-y-15">
            <ContactInfoText />
            <ContactInforForm />
          </div>

          {/* Image area */}
          <div className="hidden lg:block w-full h-fit sticky top-28 2xl:top-30">
            <ImageShutter className="w-full aspect-4/4.5 relative rounded-3xl overflow-hidden">
              <Image
                src="/contact/Contact_side.jpg"
                alt="Stunning office decor"
                fill
                sizes="(max-width:768px) 50vw, 100vw"
                className="object-cover"
              />
            </ImageShutter>
          </div>
        </div>
      </div>
    </section>
  );
}
