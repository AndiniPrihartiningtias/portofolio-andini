import { Badge } from "../ui/Badge"
import { Card, CardContent } from "../ui/Card"
import { BookOpen, TrendingUp } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-white/50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-rose-500 to-blue-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Hi! I'm Andini, a Data Science student passionate about learning.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge>TypeScript</Badge>
              <Badge>Python</Badge>
              <Badge>SQL</Badge>
              <Badge>C++</Badge>
            </div>
          </div>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <BookOpen className="w-6 h-6 text-rose-500 mr-3" />
                  <h3 className="font-semibold text-gray-800">Education</h3>
                </div>
                <p>Data Science - Cakrawala University</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <TrendingUp className="w-6 h-6 text-blue-500 mr-3" />
                  <h3 className="font-semibold text-ray-800">Focus</h3>
                </div>
                <p>Web & Data</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
