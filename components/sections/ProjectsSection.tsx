import { ProjectCard } from "../cards/ProjectCard"
import { projects } from "@/data/projects"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-white/50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-rose-500 to-blue-500 bg-clip-text text-transparent">
          Learning Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
