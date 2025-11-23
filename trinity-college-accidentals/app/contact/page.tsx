import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#07294b]">
      <Navigation />

      <section className="py-20 bg-[#07294b] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="h-16 w-16 text-gold mx-auto mb-6" />
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Interested in booking the Accidentals for your event? Want to learn more about joining our brotherhood?
              We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold text-navy hover:bg-gold/90 font-semibold">
                Book a Performance
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-navy bg-transparent"
              >
                Audition Info
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
