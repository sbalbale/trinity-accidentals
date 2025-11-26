import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  return (
    <section className="py-20 bg-background text-foreground flex-grow">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Interested in booking the Accidentals for your event? Fill out the
              form below and we&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
