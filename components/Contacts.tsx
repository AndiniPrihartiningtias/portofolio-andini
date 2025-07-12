"use client"

import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Mail } from "lucide-react"
import { contacts } from "@/data/contacts"

export function Contacts() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-rose-500 to-blue-500 bg-clip-text text-transparent">
          Let's Connect!
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          I'm always eager to connect with fellow learners, mentors, or anyone willing to share insights about the
          data science journey!
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contacts.map((contact, index) => (
            <Card
              key={index}
              className={`${contact.borderColor} hover:shadow-lg transition-shadow cursor-pointer`}
              onClick={() => window.open(contact.href, "_blank")}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{contact.title}</h3>
                <p className={`text-gray-600 ${contact.hoverColor} transition-colors`}>
                  {contact.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button
          className="bg-gradient-to-r from-rose-400 via-purple-400 to-blue-400 hover:from-rose-500 hover:via-purple-500 hover:to-blue-500 text-white text-lg px-8 py-3"
          onClick={() =>
            window.open(
              "mailto:andini.prihartiningtias@gmail.com?subject=Hello%20from%20your%20portfolio!&body=Hi%20Andini,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect!%0A%0A",
              "_self",
            )
          }
        >
          <Mail className="w-5 h-5 mr-2" />
          Send Me a Message
        </Button>
      </div>
    </section>
  )
}
