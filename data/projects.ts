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
    icon: Database,
    title: "Data Analysis with KNN",
    desc: "Data cleaning and visualization stages to classification using the K-Nearest Neighbor (KNN) method.",
    techs: ["Python","Matplotlib","Scikit-learn(KNN"],
    link: "https://github.com/AndiniPrihartiningtias/Game-Sales-Analysis-KNN.git",
  },
  {
    color: "blue",
    icon: Database,
    title: "SQL-Based Mini Cinema Database",
    desc: "Designed ERD, normalized to 3NF, implemented with MySQL, including roles and transaction simulation.",
    techs: ["MySQL", "SQL", "Microsoft Excel"],
    link: "https://github.com/AndiniPrihartiningtias/Mini-Bioskop-Database.git",
  },
  {
    color: "rose",
    icon: BookOpen,
    title: "Personal Portfolio Website",
    desc: "Showcasing comprehensive web development skills and best practices learned throughout the course.",
    techs: ["JavaScript", "Responsive", "CSS"],
    link: "https://github.com/AndiniPrihartiningtias/UTS-Web-Client-Development/tree/main/Tugas3Fixed",
  },
  {
    color: "blue",
    icon: Code,
    title: "Project Web Client Development",
    desc: "Showcasing modern and fundamental web client development best practices.",
    techs: ["HTML", "CSS","Typescript","JavaScript"],
    link: "https://github.com/AndiniPrihartiningtias/Project-Web-Client-Development.git",
  },
  {
    color: "rose",
    icon: BookOpen,
    title: "Collaborative Website Redesign: DAMRI",
    desc: "Project emphasizing teamwork, shared responsibilities, and interactive feature development.",
    techs: ["Next.js", "Talwind CSS", "Typescript"],
    link: "https://github.com/silvaronna/damriWebsite.git",
  },
{
    color: "blue",
    icon: Code, 
    title: "OOP Implementation",
    desc: "C++ Object-Oriented Programming final project applying classes, inheritance, and file operations.",
    techs: ["C++", "OOP", "File Handling"],
    link: "https://github.com/AndiniPrihartiningtias/OOP_UAS_AndiniPrihartiningtias_24120510003.git",
  },
]