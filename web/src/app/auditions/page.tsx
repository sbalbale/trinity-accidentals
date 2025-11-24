import { Footer } from "@/components/footer";
import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { getAuditionInfo, Audition } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/components/portable-text";
import { Button } from "@/components/ui/button";

export const revalidate = 60;

export default async function AuditionsPage() {
  let auditionInfo: Audition | null = null;

  try {
    auditionInfo = await getAuditionInfo();
  } catch (e) {
    console.error("Error fetching audition info:", e);
  }

  // Fallback data if Sanity fetch fails or no document exists
  const fallbackFaqs = [
    {
      question: "Do I need to read music?",
      answer: "It helps, but it is not required. We test for ear and pitch.",
    },
    {
      question: "What should I prepare?",
      answer: "A verse and a chorus of a song that fits your voice.",
    },
    {
      question: "What is the time commitment?",
      answer: "We rehearse 3 times a week.",
    },
  ];

  const faqs = auditionInfo?.faqs || fallbackFaqs;

  return (
    <div className="min-h-screen bg-background flex flex-col flex-grow">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-background text-foreground text-center">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              {auditionInfo?.title || "Join the Brotherhood"}
            </h1>
            <div className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
              {auditionInfo?.description ? (
                <PortableText
                  value={auditionInfo.description}
                  components={portableTextComponents}
                />
              ) : (
                <p>Auditions are held at the beginning of every semester.</p>
              )}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="bg-card rounded-lg shadow-md p-8 border border-border">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-background text-center">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
              Ready to Join Us?
            </h2>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-xl px-12 py-8 h-auto rounded-lg shadow-xl"
            >
              <Link
                href={
                  auditionInfo?.signupLink ||
                  "https://forms.google.com/placeholder"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign Up for Auditions
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
