"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => setMobileOpen(!mobileOpen);

  const links = [
    { href: "/", label: "Home" },
    { href: "/members", label: "Members" },
    { href: "/history", label: "History" },
    { href: "/auditions", label: "Auditions" },
  ];

  return (
    <nav className="bg-brand-surface dark:bg-brand-surface-dark text-brand-text-primary dark:text-brand-text-primary-dark py-4 px-6 shadow-lg transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="font-heading text-2xl font-bold hover:text-brand-text-accent dark:hover:text-brand-text-accent-dark transition-colors">
          Trinity Accidentals
        </Link>
        
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        
        <ul
          className={`md:flex md:space-x-6 font-body ${
            mobileOpen ? "block absolute top-16 left-0 right-0 bg-brand-surface dark:bg-brand-surface-dark p-4 space-y-2 shadow-lg" : "hidden"
          } md:block md:static`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-brand-text-accent dark:hover:text-brand-text-accent-dark transition-colors block md:inline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
