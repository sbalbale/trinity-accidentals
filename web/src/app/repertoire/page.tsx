import { getSongs, Song } from "@/lib/sanity";
import SongCard from "@/components/SongCard";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const revalidate = 60;

export default async function RepertoirePage() {
  let songs: Song[] = [];
  let error: string | null = null;

  try {
    songs = await getSongs();
  } catch (e) {
    error = e instanceof Error ? e.message : "Failed to fetch songs";
    console.error("Error fetching songs:", e);
  }

  return (
    <div className="min-h-screen bg-background flex flex-col flex-grow">
      <Navigation />
      <main className="py-20 px-8 max-w-7xl mx-auto flex-grow">
        <h1 className="text-5xl font-serif font-bold mb-12 text-center text-foreground">
          Our Repertoire
        </h1>

        {error && (
          <div className="text-center p-8 bg-red-900/20 border border-red-500/50 rounded-lg max-w-2xl mx-auto">
            <p className="text-red-400 mb-4 font-semibold">
              Error loading songs: {error}
            </p>
            <p className="text-sm text-muted-foreground">
              Make sure your Sanity project is configured correctly and the
              .env.local file contains valid credentials.
            </p>
          </div>
        )}

        {!error && songs.length === 0 && (
          <div className="text-center p-8 bg-card border border-border rounded-lg max-w-2xl mx-auto">
            <p className="text-lg mb-4 text-foreground">No songs found</p>
            <p className="text-sm text-muted-foreground">
              Add songs in the Sanity Studio at{" "}
              <a
                href="http://localhost:3333"
                className="text-primary underline font-semibold"
              >
                http://localhost:3333
              </a>
            </p>
          </div>
        )}

        {!error && songs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {songs.map((song) => (
              <SongCard key={song._id} song={song} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
