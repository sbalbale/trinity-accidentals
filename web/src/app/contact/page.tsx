import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#07294b] flex flex-col flex-grow">
      <Navigation />

      <section className="py-20 bg-[#07294b] text-white flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Get in Touch
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Interested in booking the Accidentals for your event? Fill out
                the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="bg-[#0b3c6b] rounded-lg p-8 border border-white/10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
