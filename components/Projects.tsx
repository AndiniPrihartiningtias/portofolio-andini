import { projects } from "@/data/projects"

export function Projects() {
  return (
    <section>
      {projects.map((project, idx) => (
        <div key={idx} className="border p-4">
          <project.icon className={`w-16 h-16 text-${project.color}-500`} />  {/* JSX di TSX! */}
          <h3>{project.title}</h3>
          <p>{project.desc}</p>
          <a href={project.link}>View Project</a>
        </div>
      ))}
    </section>
  )
}
