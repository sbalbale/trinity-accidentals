import { getMembers, Member, urlFor } from "@/lib/sanity";
import { Footer } from "@/components/footer";
import Image from "next/image";

export const revalidate = 60;

export default async function MembersPage() {
  let members: Member[] = [];
  let error: string | null = null;

  try {
    members = await getMembers();
  } catch (e) {
    error = e instanceof Error ? e.message : "Failed to fetch members";
    console.error("Error fetching members:", e);
  }

  return (
    <div className="min-h-screen bg-[#07294b]">

      <section className="py-20 bg-[#07294b]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Meet the Brothers</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Our talented ensemble of singers, each bringing their unique voice and energy to the group.
            </p>
          </div>

          {error && (
            <div className="text-center text-red-400 mb-8">
              Error loading members: {error}
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {members.map((member) => (
              <div key={member._id} className="bg-[#0b3c6b] rounded-lg p-4 hover:shadow-xl hover:shadow-gold/20 transition-all">
                <div className="aspect-square bg-navy rounded-lg mb-3 overflow-hidden relative">
                  {member.image ? (
                    <Image
                      src={urlFor(member.image).width(400).height(400).url()}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-navy text-white/50">
                      No Image
                    </div>
                  )}
                </div>
                <div className="font-serif font-semibold text-white">{member.name}</div>
                {member.gradYear && (
                  <div className="text-sm text-white/60">Class of {member.gradYear}</div>
                )}
                <div className="text-xs text-gold font-semibold mt-1">{member.voicePart}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
