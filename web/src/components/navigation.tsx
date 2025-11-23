import Link from "next/link"
import { Music } from "lucide-react"

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0b3c6b] text-white border-b border-gold/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Music className="h-6 w-6 text-gold" />
          <span className="font-serif text-xl font-bold">The Accidentals</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/about" className="hover:text-gold transition-colors">
            About
          </Link>
          <Link href="/members" className="hover:text-gold transition-colors">
            Members
          </Link>
          <Link href="/performances" className="hover:text-gold transition-colors">
            Performances
          </Link>
          <Link href="/contact" className="hover:text-gold transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
