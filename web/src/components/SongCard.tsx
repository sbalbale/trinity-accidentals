import { Song } from "@/lib/sanity";
import { Music, Play, ExternalLink } from "lucide-react";
import Link from "next/link";

interface SongCardProps {
  song: Song;
}

export default function SongCard({ song }: SongCardProps) {
  const CardContent = (
    <div
      className={`bg-card rounded-lg p-6 border border-border hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10 group h-full flex flex-col ${song.recordingUrl ? "cursor-pointer" : ""}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-background rounded-full group-hover:bg-primary/20 transition-colors relative">
          <Music className="w-6 h-6 text-primary" />
          {song.recordingUrl && (
            <div className="absolute -top-1 -right-1 bg-primary rounded-full p-1">
              <Play className="w-3 h-3 text-primary-foreground fill-current" />
            </div>
          )}
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
          {song.recordingUrl && (
            <ExternalLink className="inline-block w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
          )}
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

  if (song.recordingUrl) {
    return (
      <Link href={song.recordingUrl} target="_blank" rel="noopener noreferrer">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
}
