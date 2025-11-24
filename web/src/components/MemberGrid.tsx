"use client";

import { Member } from "@/lib/sanity";
import MemberCard from "./MemberCard";

interface MemberGridProps {
  members: Member[];
}

export default function MemberGrid({ members }: MemberGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
      {members.map((member) => (
        <MemberCard key={member._id} member={member} />
      ))}
    </div>
  );
}
