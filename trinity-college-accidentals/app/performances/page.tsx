import { Card } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PerformancesPage() {
  return (
    <div className="min-h-screen bg-[#07294b]">
      <Navigation />

      <section className="py-20 bg-[#07294b]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Upcoming Shows</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Join us for unforgettable performances throughout the year
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { date: "March 15, 2025", event: "Spring Concert", venue: "Trinity Chapel" },
              { date: "April 2, 2025", event: "ICCA Quarterfinals", venue: "Boston, MA" },
              { date: "April 20, 2025", event: "Alumni Weekend Performance", venue: "Hamlin Hall" },
              { date: "May 10, 2025", event: "Senior Showcase", venue: "Austin Arts Center" },
            ].map((show, i) => (
              <Card key={i} className="p-6 bg-[#0b3c6b] border-2 border-white/10 hover:border-gold transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <Calendar className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-serif text-xl font-bold text-white mb-1">{show.event}</h3>
                      <p className="text-white/70">{show.venue}</p>
                    </div>
                  </div>
                  <div className="text-white font-semibold md:text-right">{show.date}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
