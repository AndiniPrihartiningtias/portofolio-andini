"use client"

import { Header } from "@/components/header/Header"
import { HeroSection } from "@/components/hero/HeroSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { SkillsSection } from "@/components/sections/SkillsSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { Contacts } from "@/components/Contacts"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />

      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <Contacts />
    </main>
  )
}
