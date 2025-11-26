import { getPerformances, Performance, urlFor } from "@/lib/sanity";

import BookingForm from "@/components/BookingForm";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Play, ExternalLink } from "lucide-react";

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
    <main className="flex-grow">
      {/* Header */}
      <section className="py-20 bg-background text-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Performances
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Catch the Accidentals live in concert or at events around campus.
          </p>
        </div>
      </section>

      {/* Upcoming Performances */}
      <section className="pb-20 bg-background">
        <div className="container px-4 mx-auto flex flex-col items-center justify-center">
          {error && (
            <div className="text-center p-8 bg-red-900/20 border border-red-500/50 rounded-lg max-w-2xl mx-auto mb-12">
              <p className="text-red-400 mb-4 font-semibold">
                Error loading performances: {error}
              </p>
            </div>
          )}

          {!error && performances.length === 0 && (
            <div className="text-center p-12 bg-card rounded-lg border border-border">
              <p className="text-xl text-foreground/80">
                No upcoming performances scheduled at the moment.
              </p>
              <p className="mt-2 text-muted-foreground">
                Check back soon for updates!
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex items-center justify-center w-full">
            {performances.map((perf) => {
              const PerformanceCard = (
                <div
                  className={`flex items-center justify-center bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-colors flex flex-col md:flex-row ${perf.recordingUrl ? "cursor-pointer" : ""}`}
                >
                  {perf.image && (
                    <div className="md:w-1/3 relative h-64 md:h-auto">
                      <Image
                        src={urlFor(perf.image).url()}
                        alt={perf.title}
                        fill
                        className="object-cover"
                      />
                      {perf.recordingUrl && (
                        <div className="absolute top-4 right-4 bg-primary rounded-full p-2 shadow-lg">
                          <Play className="w-5 h-5 text-primary-foreground fill-current" />
                        </div>
                      )}
                    </div>
                  )}
                  <div className="p-8 flex-1">
                    <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">
                      {new Date(perf.date).toLocaleDateString(undefined, {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                      })}
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                      {perf.title}
                      {perf.recordingUrl && (
                        <ExternalLink className="inline-block w-4 h-4 ml-2 opacity-70" />
                      )}
                    </h3>
                    <div className="text-muted-foreground mb-4 flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      {perf.location}
                    </div>
                    <div className="prose prose-invert prose-sm max-w-none text-foreground/80">
                      <PortableText value={perf.description} />
                    </div>
                  </div>
                </div>
              );

              if (perf.recordingUrl) {
                return (
                  <Link
                    key={perf._id}
                    href={perf.recordingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    {PerformanceCard}
                  </Link>
                );
              }

              return (
                <div key={perf._id} className="w-full">
                  {PerformanceCard}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hire Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Want the Accidentals at your next event? Fill out the form below
              and we&apos;ll be in touch!
            </p>
          </div>

          <BookingForm />
        </div>
      </section>
    </main>
  );
}
