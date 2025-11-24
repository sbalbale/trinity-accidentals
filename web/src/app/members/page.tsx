import { getMembers, Member } from "@/lib/sanity";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import MemberGrid from "@/components/MemberGrid";

export const revalidate = 60;

export default async function MembersPage() {
  // Fetch members on the server side
  let members: Member[] = [];
  let error: string | null = null;
  try {
    members = await getMembers();
  } catch (e) {
    error = e instanceof Error ? e.message : "Failed to fetch members";
    console.error("Error fetching members:", e);
  }

  return (
    <div className="min-h-screen bg-[#07294b] flex flex-col flex-grow">
      <Navigation />

      <section className="py-20 bg-[#07294b]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Meet the Brothers
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Our talented ensemble of singers, each bringing their unique voice
              and energy to the group.
            </p>
          </div>

          {error && (
            <div className="text-center text-red-400 mb-8">
              Error loading members: {error}
            </div>
          )}

          {/* Use client component for grid and modal */}
          <MemberGrid members={members} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
