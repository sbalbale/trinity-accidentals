"use client";

import { useState } from "react";
import Link from "next/link";
import { Music, Menu, X } from "lucide-react";
import { NavbarData, urlFor } from "@/lib/sanity";

interface NavigationProps {
  data: NavbarData | null;
}

export function Navigation({ data }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const links = data?.links || [
    { title: "About", url: "/about" },
    { title: "Members", url: "/members" },
    { title: "Performances", url: "/performances" },
    { title: "Repertoire", url: "/repertoire" },
    { title: "Auditions", url: "/auditions" },
    { title: "Contact", url: "/contact" },
  ];

  const groupName = data?.groupName || "The Accidentals";
  const logoUrl = data?.logo ? urlFor(data.logo).url() : null;

  return (
    <nav className="sticky top-0 z-50 bg-[#0b3c6b] text-white border-b border-gold/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          {logoUrl ? (
            <img src={logoUrl} alt="Logo" className="h-8 w-8 object-contain" />
          ) : (
            <Music className="h-6 w-6 text-gold" />
          )}
          <span className="font-serif text-xl font-bold">{groupName}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className="text-white/70 hover:text-gold transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-gold transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0b3c6b] border-b border-gold/20 py-4 px-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-2">
          {links.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className="text-white/70 hover:text-gold transition-colors text-lg py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
