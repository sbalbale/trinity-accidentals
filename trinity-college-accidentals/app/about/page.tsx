import { Card } from "@/components/ui/card"
import { Users, Music, Award } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#07294b]">
      <Navigation />

      <section className="py-20 bg-[#07294b]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Our Legacy</h1>
            <p className="text-lg leading-relaxed text-white/80">
              Since our founding, the Trinity College Accidentals have been more than just a vocal group—we're a
              brotherhood bound by our love of music and commitment to excellence. Through generations of performers,
              we've carried forward a tradition of artistry, camaraderie, and unforgettable performances.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Users,
                title: "Brotherhood",
                description: "We're not just singers—we're brothers who support each other on stage and in life.",
              },
              {
                icon: Music,
                title: "Musical Excellence",
                description: "Our dedication to perfect harmony and innovative arrangements sets us apart.",
              },
              {
                icon: Award,
                title: "Storied Tradition",
                description: "Decades of performances at Trinity and beyond have built our prestigious reputation.",
              },
            ].map((value, i) => (
              <Card key={i} className="p-8 bg-[#0b3c6b] border-2 border-white/10 hover:border-gold transition-colors">
                <value.icon className="h-12 w-12 text-gold mb-4" />
                <h3 className="font-serif text-2xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
