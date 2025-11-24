import Link from "next/link";
import { Button } from "@/components/ui/button";

import { getSiteStats, getHomePage } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/components/portable-text";

export const revalidate = 60;

export default async function Home() {
  let stats = {
    membersCount: 15,
    performancesCount: 500,
    currentMembersCount: 15,
  }; // Fallback values

  let homeContent: any = {
    heroTitle: "The Trinity College Accidentals",
    heroSubtitle: null,
    featuredTitle: "Experience the Harmony",
    featuredDescription: null,
    heroImage: null,
    featuredImage: null,
  };

  try {
    const fetchedStats = await getSiteStats();
    if (fetchedStats) {
      stats = fetchedStats;
    }

    const fetchedHome = await getHomePage();
    if (fetchedHome) {
      homeContent = {
        heroTitle: fetchedHome.heroTitle,
        heroSubtitle: fetchedHome.heroSubtitle,
        featuredTitle: fetchedHome.featuredTitle,
        featuredDescription: fetchedHome.featuredDescription,
        heroImage: fetchedHome.heroImage,
        featuredImage: fetchedHome.featuredImage,
      };
    }
  } catch (e) {
    console.error("Error fetching content:", e);
  }

  const currentYear = new Date().getFullYear();
  const yearsOfLegacy = currentYear - 1993;

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative bg-background text-foreground py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img
            src={
              homeContent.heroImage
                ? urlFor(homeContent.heroImage).url()
                : "/musical-notes-pattern.jpg"
            }
            alt="Background Pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance">
              {homeContent.heroTitle.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-primary">
                {homeContent.heroTitle.split(" ").slice(-1)}
              </span>
            </h1>
            <div className="text-xl md:text-2xl mb-8 text-foreground/90 text-balance">
              {homeContent.heroSubtitle ? (
                <PortableText
                  value={homeContent.heroSubtitle}
                  components={portableTextComponents}
                />
              ) : (
                <p>
                  A brotherhood united by harmony, tradition, and excellence in
                  collegiate a cappella
                </p>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                >
                  Book Us
                </Button>
              </Link>
              <Link href="/repertoire">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Listen Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { number: `${yearsOfLegacy}`, label: "Years of Legacy" },
              {
                number: `${stats.performancesCount}+`,
                label: "Performances",
              },
              {
                number: `${stats.currentMembersCount}`,
                label: "Active Members",
              },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Performance Section */}
      <section className="py-20 bg-background text-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                {homeContent.featuredTitle.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-primary">
                  {homeContent.featuredTitle.split(" ").slice(-1)}
                </span>
              </h2>
              <div className="text-lg leading-relaxed text-foreground/80 mb-8">
                {homeContent.featuredDescription ? (
                  <PortableText
                    value={homeContent.featuredDescription}
                    components={portableTextComponents}
                  />
                ) : (
                  <p>
                    From intimate campus concerts to regional competitions, the
                    Accidentals deliver powerful performances that showcase our
                    tight harmonies, dynamic stage presence, and passion for a
                    cappella music. Every show is a celebration of our
                    brotherhood and musical journey.
                  </p>
                )}
              </div>
              <Link href="/performances">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                >
                  View Performance Schedule
                </Button>
              </Link>
            </div>
            <div className="relative aspect-video bg-muted/10 rounded-lg overflow-hidden">
              <img
                src={
                  homeContent.featuredImage
                    ? urlFor(homeContent.featuredImage).url()
                    : "/college-a-cappella-group-performing.jpg"
                }
                alt="Accidentals performing on stage"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
