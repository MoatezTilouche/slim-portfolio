"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/filmography", label: "Filmography" },
  { href: "/photography", label: "Photography" },
  { href: "/commercial", label: "Commercial" },
  { href: "/contact", label: "Contact" },
]

export function RetroNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <>
      {navItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClick}
            className={`retro-accent text-sm uppercase tracking-widest transition-colors 
              ${isActive ? "text-white border-b border-white" : "text-gray-400 hover:text-white"}`}
          >
            {item.label}
          </Link>
        )
      })}
    </>
  )

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 retro-nav backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="retro-title text-2xl tracking-wider">
            SLIM ABROUG
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-white/60"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Open menu</span>
            <svg
              className={`h-6 w-6 ${open ? "hidden" : "block"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
            <svg
              className={`h-6 w-6 ${open ? "block" : "hidden"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden transition-all duration-200 ease-out ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Screen overlay */}
        <div
          className="fixed inset-0 bg-black/60"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        {/* Slide-down panel */}
        <div
          className={`fixed left-0 right-0 top-16 mx-4 rounded-2xl border border-white/10 bg-black/85 p-6 shadow-2xl
            transform transition-transform duration-200 ${open ? "translate-y-0" : "-translate-y-4"}`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col space-y-4">
            <NavLinks onClick={() => setOpen(false)} />
          </div>
        </div>
      </div>
    </nav>
  )
}
