"use client";

import { useState } from "react";
import Link from "next/link";
import { Music, Menu, X } from "lucide-react";
import { urlFor } from "@/lib/sanity";

interface NavigationProps {
  logo?: any;
  groupName?: string;
  links?: Array<{
    title: string;
    url: string;
  }>;
}

export function Navigation({ logo, groupName = "The Accidentals", links = [] }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Default links if none provided from CMS
  const navLinks = links.length > 0 ? links : [
    { title: "About", url: "/about" },
    { title: "Members", url: "/members" },
    { title: "Performances", url: "/performances" },
    { title: "Repertoire", url: "/repertoire" },
    { title: "Auditions", url: "/auditions" },
    { title: "Contact", url: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0b3c6b] text-white border-b border-gold/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          {logo ? (
             <img
                src={urlFor(logo).width(64).url()}
                alt={groupName}
                className="h-8 w-auto object-contain"
              />
          ) : (
            <Music className="h-6 w-6 text-gold" />
          )}
          <span className="font-serif text-xl font-bold">{groupName}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
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
          {navLinks.map((link) => (
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
