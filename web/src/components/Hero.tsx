import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-b from-trinity-900 to-trinity-950">
      {/* Placeholder for background video */}
      <div className="absolute inset-0 bg-trinity-950/40 z-10"></div>
      
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="font-heading text-6xl md:text-7xl font-bold mb-6">
          Trinity College Accidentals
        </h1>
        <p className="font-body text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          An all-male a cappella group established in 1993, performing everything from classic rock to contemporary hits.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-brand-action-bg dark:bg-brand-action-bg-dark text-brand-action-text dark:text-brand-action-text-dark font-body font-bold text-xl px-12 py-4 rounded-lg hover:bg-brand-action-hover dark:hover:bg-brand-action-hover-dark transition-all transform hover:scale-105 shadow-xl"
        >
          Hire Us
        </Link>
      </div>
    </section>
  );
}
