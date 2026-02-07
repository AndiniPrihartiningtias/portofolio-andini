"use client"

import { Sparkles } from "lucide-react"
import { NavLink } from "./NavLink"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-rose-200 shadow-sm">
      <div className="w-full flex items-center justify-between px-6 py-6">
        {/* Logo & Nama Kiri */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-rose-400 to-blue-400 rounded-full flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="text-xl font-bold bg-gradient-to-r from-rose-500 to-blue-500 bg-clip-text text-transparent">
            My Portofolio
          </div>
        </div>

        {/* Nav Link Kanan */}
        <div className="hidden md:flex items-center space-x-10 text-lg">
          <NavLink label="About" target="about" />
          <NavLink label="Skills" target="skills" />
          <NavLink label="Projects" target="projects" />
          <NavLink label="Contact" target="contact" />
        </div>
      </div>
    </header>
  )
}
