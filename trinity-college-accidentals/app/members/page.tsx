import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-[#07294b]">
      <Navigation />

      <section className="py-20 bg-[#07294b]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Meet the Brothers</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Our talented ensemble of singers, each bringing their unique voice and energy to the group.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="bg-[#0b3c6b] rounded-lg p-4 hover:shadow-xl hover:shadow-gold/20 transition-all">
                <div className="aspect-square bg-navy rounded-lg mb-3 overflow-hidden">
                  <img
                    src={`/college-student-portrait-.jpg?height=200&width=200&query=college+student+portrait+${i + 1}`}
                    alt={`Member ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="font-serif font-semibold text-white">Member Name</div>
                <div className="text-sm text-white/60">Class of 2025</div>
                <div className="text-xs text-gold font-semibold mt-1">Tenor</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
