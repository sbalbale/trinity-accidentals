import Navbar from "@/components/Navbar";
import FAQItem from "@/components/FAQItem";
import Link from "next/link";

export default function AuditionsPage() {
  const faqs = [
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

  return (
    <>
      <Navbar />
      <main className="font-body">
        {/* Hero Section */}
        <section className="bg-white py-20 px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-trinityMaroon mb-6">
            Join the Brotherhood
          </h1>
          <p className="font-body text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Auditions are held at the beginning of every semester.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-16 px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-trinityMaroon mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
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
        <section className="bg-white py-20 px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-trinityMaroon mb-6">
            Ready to Join Us?
          </h2>
          <Link
            href="https://forms.google.com/placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-trinityMaroon text-white font-body font-bold text-xl px-12 py-4 rounded-lg hover:bg-red-900 transition-all transform hover:scale-105 shadow-xl"
          >
            Sign Up for Auditions
          </Link>
        </section>
      </main>
    </>
  );
}
