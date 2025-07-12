"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Github, Code2 } from "lucide-react"

export function QueueSystemCard() {
  return (
    <Card className="hover:shadow-lg transition-shadow border-orange-200">
      <CardHeader>
        <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg mb-4 flex items-center justify-center">
          <Code2 className="w-16 h-16 text-orange-500" />
        </div>
        <CardTitle className="text-orange-700">C++ Queue System</CardTitle>
        <CardDescription>
          Learning data structures by implementing a queue system in C++ for my data structure course. Exploring
          fundamental concepts like FIFO operations and memory management.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className="bg-orange-100 text-orange-700">C++</Badge>
          <Badge className="bg-orange-100 text-orange-700">Data Structures</Badge>
          <Badge className="bg-orange-100 text-orange-700">Queue</Badge>
          <Badge className="bg-orange-100 text-orange-700">Algorithms</Badge>
        </div>
        <Button
          className="w-full border border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent"
          disabled
        >
          <Github className="w-4 h-4 mr-2" />
          View Code (Coming Soon)
        </Button>
      </CardContent>
    </Card>
  )
}
