"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { BarChart3, Brain, Code } from "lucide-react"

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-rose-500 to-blue-500 bg-clip-text text-transparent">
          Skills & Tools
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-rose-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-500 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-rose-700">Programming</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <Badge>TypeScript</Badge>
                <Badge>Python</Badge>
                <Badge>SQL</Badge>
                <Badge>C++</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-blue-700">Data Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <Badge>Data Wrangling</Badge>
                <Badge>Database Design</Badge>
                <Badge>Data Structures</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-purple-700">Data Visualization</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <Badge>Matplotlib</Badge>
                <Badge>Seaborn</Badge>
                <Badge>Tableau</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
