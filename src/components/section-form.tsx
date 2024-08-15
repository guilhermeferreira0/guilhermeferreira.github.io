import { ContactForm } from "./contact-form";
import { SectionTitle } from "./section-title";
export function SectionForm() {

  return (
    <section id="contact" className="default-px py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950">
      <div className="w-ful max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="contato"
          className="items-center text-center"
        >
          Vamos trabalhar juntos? Entre em contato
        </SectionTitle>

        <ContactForm />
      </div>
    </section>
  );
}
