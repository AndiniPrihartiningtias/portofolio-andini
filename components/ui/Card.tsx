import { ReactNode, HTMLAttributes } from "react"

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export function Card({ children, className = "", ...props }: CardProps) {
  return <div className={`bg-white rounded-lg border shadow ${className}`} {...props}>{children}</div>
}

export function CardHeader({ children }: { children: ReactNode }) {
  return <div className="p-4 border-b">{children}</div>
}

export function CardContent({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`p-4 ${className}`}>{children}</div>
}

export function CardTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h3 className={`text-lg font-bold ${className}`}>{children}</h3>
}

export function CardDescription({ children }: { children: ReactNode }) {
  return <p className="text-sm text-gray-600">{children}</p>
}
