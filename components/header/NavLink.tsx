"use client"

interface NavLinkProps {
  label: string
  target: string
}

export function NavLink({ label, target }: NavLinkProps) {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const el = document.getElementById(target)
    el?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <a
      href={`#${target}`}
      onClick={handleNavClick}
      className="relative text-gray-700 hover:text-rose-500 transition-colors group"
    >
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-blue-400 transition-all group-hover:w-full"></span>
    </a>
  )
}
