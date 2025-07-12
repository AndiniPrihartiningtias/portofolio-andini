import { Code, TrendingUp, Database, BarChart3, BookOpen } from "lucide-react"

export interface Project {
  color: string
  icon: React.ElementType
  title: string
  desc: string
  techs: string[]
  link: string
}

export const projects: Project[] = [
  {
    color: "rose",
    icon: Code,
    title: "Tugas 1 - Web Fundamentals",
    desc: "Basic HTML, CSS, JavaScript",
    techs: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/AndiniPrihartiningtias/UTS-Web-Client-Development/tree/main/Tugas1Fixed",
  },
  {
    color: "blue",
    icon: TrendingUp,
    title: "Tugas 2 - Interactive Web",
    desc: "Advanced JS + DOM",
    techs: ["JavaScript", "DOM", "CSS"],
    link: "https://github.com/AndiniPrihartiningtias/UTS-Web-Client-Development/tree/main/Tugas2Fixed",
  },
  {
    color: "purple",
    icon: Database,
    title: "Tugas 3 - Compleate figma desain",
    desc: "Implementing more complex web features and improving user experience design.",
    techs: ["JavaScript", "Responsive", "CSS"],
    link: "https://github.com/AndiniPrihartiningtias/UTS-Web-Client-Development/tree/main/Tugas3Fixed",
  },
  {
    color: "green",
    icon: BarChart3,
    title: "Tugas 4 - First Portofolio",
    desc: "Showcasing comprehensive web development skills and best practices learned throughout the course.",
    techs: ["HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/AndiniPrihartiningtias/UTS-Web-Client-Development/tree/main/Tugas4Fixed",
  },
  {
    color: "indigo",
    icon: BookOpen,
    title: "Tugas 5 & 6 - WCD Pokemon APP",
    desc: "Combined assignments focusing on Web Client Development concepts and advanced implementation techniques.",
    techs: ["Web Development", "Client-Side", "Modern JS"],
    link: "https://github.com/AndiniPrihartiningtias/UTS-Web-Client-Development/tree/main/Tugas%205%20%266%20WCD",
  },


{
    color: "yellow",
    icon: Code, 
    title: "OOP Implementation",
    desc: "C++ Object-Oriented Programming final project applying classes, inheritance, and file operations.",
    techs: ["C++", "OOP", "File Handling"],
    link: "https://github.com/AndiniPrihartiningtias/OOP_UAS_AndiniPrihartiningtias_24120510003",
  },
]