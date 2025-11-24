import { Song } from "@/lib/sanity";
import { Music } from "lucide-react";

interface SongCardProps {
  song: Song;
}

export default function SongCard({ song }: SongCardProps) {
  return (
    <div className="bg-[#0b3c6b] rounded-lg p-6 border border-white/10 hover:border-gold transition-all hover:shadow-lg hover:shadow-gold/10 group">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-[#07294b] rounded-full group-hover:bg-gold/20 transition-colors">
          <Music className="w-6 h-6 text-gold" />
        </div>
        {song.semesterLearned && (
          <span className="text-xs font-semibold text-white/40 bg-[#07294b] px-2 py-1 rounded">
            {song.semesterLearned}
          </span>
        )}
      </div>

      <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-gold transition-colors">
        {song.title}
      </h3>

      {song.originalArtist && (
        <p className="text-white/60 text-sm mb-4">Opb. {song.originalArtist}</p>
      )}

      <div className="space-y-2 border-t border-white/10 pt-4">
        {song.arrangers && song.arrangers.length > 0 && (
          <div className="text-sm">
            <span className="text-white/40 font-semibold uppercase text-xs tracking-wider">
              Arranged by
            </span>
            <p className="text-white/80">
              {song.arrangers.map((a) => a.name).join(", ")}
            </p>
          </div>
        )}

        {song.soloists && song.soloists.length > 0 && (
          <div className="text-sm">
            <span className="text-white/40 font-semibold uppercase text-xs tracking-wider">
              Soloists
            </span>
            <p className="text-white/80">
              {song.soloists.map((s) => s.name).join(", ")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
