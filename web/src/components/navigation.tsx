"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    <nav className="sticky top-0 z-50 bg-card text-card-foreground border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative h-8 w-8">
            {logoUrl ? (
              <>
                <Image
                  src={logoUrl}
                  alt="Logo"
                  fill
                  className={`object-contain ${data?.logoDark ? "dark:hidden" : ""}`}
                />
                {data?.logoDark && (
                  <Image
                    src={urlFor(data.logoDark).url()}
                    alt="Logo Dark"
                    fill
                    className="object-contain hidden dark:block absolute top-0 left-0"
                  />
                )}
              </>
            ) : (
              <Music className="h-6 w-6 text-primary" />
            )}
          </div>
          <span className="font-serif text-xl font-bold">{groupName}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-card-foreground hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-card border-b border-border py-4 px-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-2">
          {links.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className="text-muted-foreground hover:text-primary transition-colors text-lg py-2"
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
