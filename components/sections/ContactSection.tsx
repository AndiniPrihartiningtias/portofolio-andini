import { Mail, Github, Linkedin } from "lucide-react"
import { ContactCard } from "@/components/cards/ContactCard"
import { Button } from "@/components/ui/Button" // ✅ perbaiki path kalau pakai `@/components/ui/...`

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-rose-500 to-blue-500 bg-clip-text text-transparent">
          Let's Connect!
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          I'm always eager to connect with fellow learners!
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <ContactCard
            icon={Mail} // ✅ Pass reference, BUKAN JSX element
            title="Email"
            subtitle="andini.prihartiningtias@gmail.com"
            link="mailto:andini.prihartiningtias@gmail.com"
            color="rose"
          />
          <ContactCard
            icon={Linkedin} // ✅
            title="LinkedIn"
            subtitle="Connect with me"
            link="https://www.linkedin.com/in/andini-prihartiningtias-440919297/"
            color="blue"
          />
          <ContactCard
            icon={Github} // ✅
            title="GitHub"
            subtitle="View my code"
            link="https://github.com/AndiniPrihartiningtias"
            color="purple"
          />
        </div>

        <Button
          className="bg-gradient-to-r from-rose-400 via-purple-400 to-blue-400 hover:from-rose-500 hover:via-purple-500 hover:to-blue-500 text-white px-8 py-3"
          onClick={() =>
            window.open("mailto:andini.prihartiningtias@gmail.com", "_self")
          }
        >
          <Mail className="w-5 h-5 mr-2" /> Send Me a Message
        </Button>
      </div>
    </section>
  )
}
