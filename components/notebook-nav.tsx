"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Film, Camera, Briefcase, Mail } from "lucide-react"

const navItems = [
  { href: "/", label: "Home", icon: Home, doodle: "◆" },
  { href: "/filmography", label: "Films", icon: Film, doodle: "◇" },
  { href: "/photography", label: "Photos", icon: Camera, doodle: "○" },
  { href: "/commercial", label: "Commercial", icon: Briefcase, doodle: "△" },
  { href: "/contact", label: "Contact", icon: Mail, doodle: "◎" },
]

export function NotebookNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 border-black notebook-paper">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-2xl sketchy">DOP Portfolio ✦</div>

          <div className="flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href}>
                  <button
                    className={`game-button text-sm ${
                      isActive ? "bg-black text-white" : "bg-white text-black border-black"
                    }`}
                  >
                    <span className="mr-2">{item.doodle}</span>
                    {item.label}
                  </button>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
