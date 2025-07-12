import { LucideIcon, Mail, Linkedin, Github } from "lucide-react"

export interface ContactItem {
  icon: LucideIcon
  title: string
  value: string
  href: string
  borderColor: string
  hoverColor: string
}

export const contacts: ContactItem[] = [
  {
    icon: Mail,
    title: "Email",
    value: "andinipriha1005@gmail.com",
    href: "mailto:andinipriha1005@gmail.com",
    borderColor: "border-rose-200",
    hoverColor: "hover:text-rose-600",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "Connect with me on LinkedIn",
    href: "https://www.linkedin.com/in/andini-prihartiningtias-4418aa326/",
    borderColor: "border-blue-200",
    hoverColor: "hover:text-blue-600",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "View my code repositories",
    href: "https://github.com/AndiniPrihartiningtias",
    borderColor: "border-purple-200",
    hoverColor: "hover:text-purple-600",
  },
]
