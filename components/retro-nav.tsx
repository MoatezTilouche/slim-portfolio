"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/filmography", label: "Filmography" },
  { href: "/photography", label: "Photography" },
  { href: "/commercial", label: "Commercial" },
  { href: "/contact", label: "Contact" },
]

export function RetroNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 retro-nav">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="retro-title text-2xl tracking-wider">
            SLIM ABROUG
          </Link>

          <div className="flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`retro-accent text-sm uppercase tracking-widest transition-colors ${
                    isActive ? "text-white border-b border-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
