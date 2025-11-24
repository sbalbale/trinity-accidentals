import { Card } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";

import { getAboutPage } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/components/portable-text";

export const revalidate = 60;

export default async function AboutPage() {
  let aboutContent: any = {
    title: "Our Legacy",
    description: null,
    values: [
      {
        title: "Brotherhood",
        description:
          "We're not just singers—we're brothers who support each other on stage and in life.",
        icon: "Users",
      },
      {
        title: "Musical Excellence",
        description:
          "Our dedication to perfect harmony and innovative arrangements sets us apart.",
        icon: "Music",
      },
      {
        title: "Storied Tradition",
        description:
          "Decades of performances at Trinity and beyond have built our prestigious reputation.",
        icon: "Award",
      },
    ],
  };

  try {
    const fetchedAbout = await getAboutPage();
    if (fetchedAbout) {
      aboutContent = {
        title: fetchedAbout.title,
        description: fetchedAbout.description,
        values: fetchedAbout.values || aboutContent.values,
      };
    }
  } catch (e) {
    console.error("Error fetching about page:", e);
  }

  return (
    <section className="py-20 bg-background flex-grow">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            {aboutContent.title}
          </h1>
          <div className="text-lg leading-relaxed text-foreground/80">
            {aboutContent.description ? (
              <PortableText
                value={aboutContent.description}
                components={portableTextComponents}
              />
            ) : (
              <p>
                Since our founding, the Trinity College Accidentals have been
                more than just a vocal group—we're a brotherhood bound by our
                love of music and commitment to excellence. Through generations
                of performers, we've carried forward a tradition of artistry,
                camaraderie, and unforgettable performances.
              </p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {aboutContent.values.map((value: any, i: number) => {
            // Get the icon component from lucide-react based on the icon name
            const iconName = value.icon || "Users";
            const IconComponent =
              (LucideIcons as any)[iconName] || (LucideIcons as any).Users;

            return (
              <Card
                key={i}
                className="p-8 bg-card border-2 border-border hover:border-primary transition-colors"
              >
                <IconComponent className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
