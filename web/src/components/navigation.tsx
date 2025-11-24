"use client";

import { useState } from "react";
import Link from "next/link";
import { Music, Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0b3c6b] text-white border-b border-gold/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          <Music className="h-6 w-6 text-gold" />
          <span className="font-serif text-xl font-bold">The Accidentals</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/about"
            className="text-white/70 hover:text-gold transition-colors"
          >
            About
          </Link>
          <Link
            href="/members"
            className="text-white/70 hover:text-gold transition-colors"
          >
            Members
          </Link>
          <Link
            href="/performances"
            className="text-white/70 hover:text-gold transition-colors"
          >
            Performances
          </Link>
          <Link
            href="/repertoire"
            className="text-white/70 hover:text-gold transition-colors"
          >
            Repertoire
          </Link>
          <Link
            href="/auditions"
            className="text-white/70 hover:text-gold transition-colors"
          >
            Auditions
          </Link>
          <Link
            href="/contact"
            className="text-white/70 hover:text-gold transition-colors"
          >
            Contact
          </Link>
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
          <Link
            href="/about"
            className="text-white/70 hover:text-gold transition-colors text-lg py-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/members"
            className="text-white/70 hover:text-gold transition-colors text-lg py-2"
            onClick={() => setIsOpen(false)}
          >
            Members
          </Link>
          <Link
            href="/performances"
            className="text-white/70 hover:text-gold transition-colors text-lg py-2"
            onClick={() => setIsOpen(false)}
          >
            Performances
          </Link>
          <Link
            href="/repertoire"
            className="text-white/70 hover:text-gold transition-colors text-lg py-2"
            onClick={() => setIsOpen(false)}
          >
            Repertoire
          </Link>
          <Link
            href="/auditions"
            className="text-white/70 hover:text-gold transition-colors text-lg py-2"
            onClick={() => setIsOpen(false)}
          >
            Auditions
          </Link>
          <Link
            href="/contact"
            className="text-white/70 hover:text-gold transition-colors text-lg py-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
