"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    
    if (pathname === "/") {
      // Ana sayfadayız, direkt scroll yap
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    } else {
      // Blog sayfasındayız, ana sayfaya git ve scroll yap
      window.location.href = `/#${targetId}`
    }
    setIsMenuOpen(false)
  }

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link href="/" onClick={handleHomeClick} className="flex items-center gap-2 group">
            <Image src="/logo.png" alt="Medeniyet Veteriner Logo" width={40} height={40} className="object-contain" />
            <span className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              Medeniyet Veteriner
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              onClick={handleHomeClick}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Ana Sayfa
            </Link>
            <a
              href="#hakkimda"
              onClick={(e) => handleSmoothScroll(e, "hakkimda")}
              className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
            >
              Hakkımda
            </a>
            <Link href="/blog" className="text-foreground hover:text-primary transition-colors font-medium">
              Blog
            </Link>
            <a
              href="#yorumlar"
              onClick={(e) => handleSmoothScroll(e, "yorumlar")}
              className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
            >
              Yorumlar
            </a>
            <a
              href="#iletisim"
              onClick={(e) => handleSmoothScroll(e, "iletisim")}
              className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
            >
              Neredeyiz
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label="Menüyü aç"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={handleHomeClick}
            >
              Ana Sayfa
            </Link>
            <a
              href="#hakkimda"
              onClick={(e) => handleSmoothScroll(e, "hakkimda")}
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
            >
              Hakkımda
            </a>
            <Link
              href="/blog"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <a
              href="#yorumlar"
              onClick={(e) => handleSmoothScroll(e, "yorumlar")}
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
            >
              Yorumlar
            </a>
            <a
              href="#iletisim"
              onClick={(e) => handleSmoothScroll(e, "iletisim")}
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
            >
              Neredeyiz
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
