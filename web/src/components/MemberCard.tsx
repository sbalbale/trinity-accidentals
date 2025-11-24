"use client";

import Image from "next/image";
import { Member, urlFor } from "@/lib/sanity";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface MemberCardProps {
  member: Member;
}

export default function MemberCard({ member }: MemberCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setIsOpen(true)}
        className="group cursor-pointer w-full max-w-sm bg-[#0b3c6b] rounded-lg overflow-hidden border border-white/10 hover:border-gold transition-colors"
      >
        {/* Image */}
        <div className="relative w-full h-48 md:h-64">
          {member.image ? (
            <Image
              src={urlFor(member.image).width(600).height(800).url()}
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
        {/* Details */}
        <div className="p-4 text-center space-y-2">
          <h3 className="font-heading text-xl font-bold text-white">
            {member.name}
          </h3>
          {member.gradYear && (
            <p className="text-md font-semibold text-gray-400">
              <span className="tracking-wider mr-1">Class of</span>
              {member.gradYear}
            </p>
          )}
          <p className="font-body text-gold font-semibold text-lg">
            {member.voicePart}
          </p>
        </div>
      </div>

      {/* Modal Dialog for full info */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-[#0b3c6b] border-gold/20 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-serif text-3xl text-gold mb-4">
              {member.name}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-white/60 uppercase tracking-wider text-xs mb-1">
                  Voice Part
                </p>
                <p className="text-gold font-semibold">{member.voicePart}</p>
              </div>
              {member.gradYear && (
                <div>
                  <p className="text-white/60 uppercase tracking-wider text-xs mb-1">
                    Class Year
                  </p>
                  <p>{member.gradYear}</p>
                </div>
              )}
              {member.major && (
                <div>
                  <p className="text-white/60 uppercase tracking-wider text-xs mb-1">
                    Major
                  </p>
                  <p>{member.major}</p>
                </div>
              )}
              {member.hometown && (
                <div>
                  <p className="text-white/60 uppercase tracking-wider text-xs mb-1">
                    Hometown
                  </p>
                  <p>{member.hometown}</p>
                </div>
              )}
            </div>
            {member.bio && (
              <div className="pt-4 border-t border-white/10">
                <p className="text-white/60 uppercase tracking-wider text-xs mb-2">
                  Biography
                </p>
                <p className="text-white/90 leading-relaxed">{member.bio}</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
