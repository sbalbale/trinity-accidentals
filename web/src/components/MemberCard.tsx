"use client";

import Image from "next/image";
import { Member, urlFor } from "@/lib/sanity";

interface MemberCardProps {
  member: Member;
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <div className="group relative w-full max-w-[300px] aspect-3/4 rounded-xl overflow-hidden shadow-lg bg-brand-surface dark:bg-brand-surface-dark">
      {/* Image */}
      {member.image ? (
        <Image
          src={urlFor(member.image).width(600).height(800).url()}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-trinity-100 dark:bg-trinity-800">
          <span className="text-trinity-400 dark:text-trinity-500 font-body">No Image</span>
        </div>
      )}

      {/* Default Overlay (Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-trinity-900 via-trinity-900/80 to-transparent p-4 pt-12 translate-y-0 transition-transform duration-300 group-hover:translate-y-full">
        <h3 className="font-heading text-xl font-bold text-white">
          {member.name}
        </h3>
        <p className="font-body text-gold-400 font-semibold text-sm">
          {member.voicePart}
        </p>
      </div>

      {/* Hover Overlay (Full Reveal) */}
      <div className="absolute inset-0 bg-trinity-900/90 p-6 flex flex-col justify-center items-center text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="font-heading text-2xl font-bold text-white mb-2">
          {member.name}
        </h3>
        <p className="font-body text-gold-400 font-bold text-lg mb-4">
          {member.voicePart}
        </p>
        
        <div className="space-y-2 text-white font-body">
          {member.major && (
            <p>
              <span className="text-trinity-200 text-sm uppercase tracking-wider block">Major</span>
              {member.major}
            </p>
          )}
          {member.hometown && (
            <p>
              <span className="text-trinity-200 text-sm uppercase tracking-wider block">Hometown</span>
              {member.hometown}
            </p>
          )}
          {member.gradYear && (
            <p>
              <span className="text-trinity-200 text-sm uppercase tracking-wider block">Class of</span>
              {member.gradYear}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
