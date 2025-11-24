import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function TestPage() {
  return (
    <div className="min-h-screen bg-[#07294b] flex flex-col">
      <Navigation />
      <main className="text-white p-8">
        <h1 className="text-4xl">Short Content</h1>
        <p>This page has very little content.</p>
      </main>
      <Footer />
    </div>
  );
}
