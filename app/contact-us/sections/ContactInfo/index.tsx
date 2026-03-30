import ContactInforForm from "./ContactInforForm";
import ContactInfoText from "./ContactInfoText";

export default function ContactInfo() {
  return (
    <section className="py-20 md:py-25 lg:py-30">
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-8">
          <ContactInfoText/>
          <ContactInforForm/>
        </div>
      </div>
    </section>
  );
}