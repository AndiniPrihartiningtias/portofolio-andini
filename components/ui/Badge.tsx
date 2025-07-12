import { ReactNode } from "react"

interface BadgeProps {
  children: ReactNode
  className?: string
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span className={`px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-medium shadow-sm ${className}`}>
      {children}
    </span>
  )
}
