import { getPerformances, Performance, urlFor } from "@/lib/sanity";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import BookingForm from "@/components/BookingForm";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";

export const revalidate = 60;

export default async function PerformancesPage() {
  let performances: Performance[] = [];
  let error: string | null = null;

  try {
    performances = await getPerformances();
  } catch (e) {
    error = e instanceof Error ? e.message : "Failed to fetch performances";
    console.error("Error fetching performances:", e);
  }

  return (
    <div className="min-h-screen bg-[#07294b] flex flex-col flex-grow">
      <Navigation />

      <main>
        {/* Header */}
        <section className="py-20 bg-[#07294b] text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Performances
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Catch the Accidentals live in concert or at events around campus.
            </p>
          </div>
        </section>

        {/* Upcoming Performances */}
        <section className="pb-20 px-4 container mx-auto">
          {error && (
            <div className="text-center p-8 bg-red-900/20 border border-red-500/50 rounded-lg max-w-2xl mx-auto mb-12">
              <p className="text-red-400 mb-4 font-semibold">
                Error loading performances: {error}
              </p>
            </div>
          )}

          {!error && performances.length === 0 && (
            <div className="text-center p-12 bg-[#0b3c6b] rounded-lg border border-white/10">
              <p className="text-xl text-white/80">
                No upcoming performances scheduled at the moment.
              </p>
              <p className="mt-2 text-white/60">Check back soon for updates!</p>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {performances.map((perf) => (
              <div
                key={perf._id}
                className="bg-[#0b3c6b] rounded-lg overflow-hidden border border-white/10 hover:border-gold transition-colors flex flex-col md:flex-row"
              >
                {perf.image && (
                  <div className="md:w-1/3 relative h-64 md:h-auto">
                    <Image
                      src={urlFor(perf.image).url()}
                      alt={perf.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-8 flex-1">
                  <div className="text-sm font-bold text-gold mb-2 uppercase tracking-wide">
                    {new Date(perf.date).toLocaleDateString(undefined, {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                    })}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">
                    {perf.title}
                  </h3>
                  <div className="text-white/70 mb-4 flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-gold" />
                    {perf.location}
                  </div>
                  <div className="prose prose-invert prose-sm max-w-none text-white/80">
                    <PortableText value={perf.description} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-20 bg-[#051d36]">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                Hire Us
              </h2>
              <p className="text-lg text-white/70">
                Want the Accidentals at your next event? Fill out the form below
                and we'll be in touch!
              </p>
            </div>

            <BookingForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
