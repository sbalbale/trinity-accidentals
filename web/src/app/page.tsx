import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { getSiteStats } from "@/lib/sanity";

export const revalidate = 60;

export default async function Home() {
  let stats = {
    membersCount: 15,
    performancesCount: 500,
    currentMembersCount: 15,
  }; // Fallback values

  try {
    const fetchedStats = await getSiteStats();
    if (fetchedStats) {
      stats = fetchedStats;
    }
  } catch (e) {
    console.error("Error fetching stats:", e);
  }

  const currentYear = new Date().getFullYear();
  const yearsOfLegacy = currentYear - 1993;

  return (
    <div className="min-h-screen bg-[#07294b]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-[#07294b] text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/musical-notes-pattern.jpg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance">
              The Trinity College <span className="text-gold">Accidentals</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 text-balance">
              A brotherhood united by harmony, tradition, and excellence in
              collegiate a cappella
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gold text-navy hover:bg-gold/90 font-semibold"
              >
                Book Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-navy bg-transparent"
              >
                Listen Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0b3c6b]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: `${yearsOfLegacy}+`, label: "Years of Legacy" },
              { number: `${stats.performancesCount}+`, label: "Performances" },
              {
                number: `${stats.currentMembersCount}`,
                label: "Active Members",
              },
              { number: "12", label: "Albums Released" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-white/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Performance Section */}
      <section className="py-20 bg-[#07294b] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Experience the <span className="text-gold">Harmony</span>
              </h2>
              <p className="text-lg leading-relaxed text-white/80 mb-8">
                From intimate campus concerts to regional competitions, the
                Accidentals deliver powerful performances that showcase our
                tight harmonies, dynamic stage presence, and passion for a
                cappella music. Every show is a celebration of our brotherhood
                and musical journey.
              </p>
              <Button
                size="lg"
                className="bg-gold text-navy hover:bg-gold/90 font-semibold"
              >
                View Performance Schedule
              </Button>
            </div>
            <div className="relative aspect-video bg-light-gray/10 rounded-lg overflow-hidden">
              <img
                src="/college-a-cappella-group-performing.jpg"
                alt="Accidentals performing on stage"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
