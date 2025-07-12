import { Card } from "@/components/ui/Card" // ✔️ path benar

import { LucideIcon } from "lucide-react"

interface ContactCardProps {
  icon: LucideIcon | React.ElementType
  title: string
  subtitle: string
  link: string
  color: string
}

export function ContactCard({ icon: Icon, title, subtitle, link, color }: ContactCardProps) {
  return (
    <Card className={`border-${color}-200`}>
      <div>
        <Icon className={`w-6 h-6 text-${color}-500`} />
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <a href={link}>Connect</a>
      </div>
    </Card>
  )
}
