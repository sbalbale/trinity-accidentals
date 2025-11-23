import { Song } from "@/lib/sanity";

interface SongCardProps {
  song: Song;
}

export default function SongCard({ song }: SongCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="font-heading text-2xl text-trinityMaroon font-bold mb-2">
        {song.title}
      </h3>
      
      {song.originalArtist && (
        <p className="text-gray-600 text-sm mb-3">
          Opb. {song.originalArtist}
        </p>
      )}
      
      <div className="space-y-1">
        {song.soloists && song.soloists.length > 0 && (
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Solo:</span>{" "}
            {song.soloists.map((s) => s.name).join(", ")}
          </p>
        )}
        
        {song.arrangers && song.arrangers.length > 0 && (
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Arranged by:</span>{" "}
            {song.arrangers.map((a) => a.name).join(", ")}
          </p>
        )}
        
        {song.semesterLearned && (
          <p className="text-xs text-gray-500 mt-2">
            Learned: {song.semesterLearned}
          </p>
        )}
      </div>
    </div>
  );
}
