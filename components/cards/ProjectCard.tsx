import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Github } from "lucide-react"
import { LucideIcon } from "lucide-react"

export interface Project {
  color: string
  icon: LucideIcon | React.ElementType
  title: string
  desc: string
  techs: string[]
  link: string
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { color, icon: Icon, title, desc, techs, link } = project

  return (
    <Card className={`hover:shadow-lg border border-${color}-200 transition-shadow`}>
      <CardHeader>
        <div
          className={`w-full h-48 bg-gradient-to-br from-${color}-100 to-${color}-200 rounded-lg flex items-center justify-center mb-4`}
        >
          <Icon className={`w-16 h-16 text-${color}-500`} />
        </div>
        <CardTitle className={`text-${color}-700`}>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {techs.map((tech) => (
            <Badge
              key={tech}
              className={`bg-${color}-100 text-${color}-700`}
            >
              {tech}
            </Badge>
          ))}
        </div>
        <Button
          variant="outline"
          className={`w-full border-${color}-300 text-${color}-600 hover:bg-${color}-50`}
          onClick={() => window.open(link, "_blank")}
        >
          <Github className="w-4 h-4 mr-2" /> View Code
        </Button>
      </CardContent>
    </Card>
  )
}
