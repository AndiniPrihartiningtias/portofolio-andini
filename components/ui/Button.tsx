import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "default" | "outline"
}

export function Button({
  children,
  className = "",
  variant = "default",
  ...props
}: ButtonProps) {
  const variantClasses =
    variant === "outline"
      ? "border border-gray-300 text-gray-700 bg-transparent hover:bg-gray-100"
      : "bg-rose-500 text-white"

  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-lg font-semibold ${variantClasses} ${className}`}
    >
      {children}
    </button>
  )
}
