import { Song } from "@/lib/sanity";
import { Music } from "lucide-react";

interface SongCardProps {
  song: Song;
}

export default function SongCard({ song }: SongCardProps) {
  return (
    <div className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10 group h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-background rounded-full group-hover:bg-primary/20 transition-colors">
          <Music className="w-6 h-6 text-primary" />
        </div>
        {song.semesterLearned && (
          <span className="text-xs font-semibold text-muted-foreground bg-background px-2 py-1 rounded">
            {song.semesterLearned}
          </span>
        )}
      </div>

      <div className="flex-grow">
        <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {song.title}
        </h3>

        {song.originalArtist && (
          <p className="text-muted-foreground text-sm mb-4">
            Opb. {song.originalArtist}
          </p>
        )}
      </div>

      <div className="space-y-2 border-t border-border pt-4 mt-4">
        {song.arrangers && song.arrangers.length > 0 && (
          <div className="text-sm">
            <span className="text-muted-foreground font-semibold uppercase text-xs tracking-wider">
              Arranged by
            </span>
            <p className="text-foreground/80">
              {song.arrangers.map((a) => a.name).join(", ")}
            </p>
          </div>
        )}

        {song.soloists && song.soloists.length > 0 && (
          <div className="text-sm">
            <span className="text-muted-foreground font-semibold uppercase text-xs tracking-wider">
              Soloists
            </span>
            <p className="text-foreground/80">
              {song.soloists.map((s) => s.name).join(", ")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
