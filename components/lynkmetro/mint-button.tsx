import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

interface MintButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: "mint" | "navy" | "outline"
  showArrow?: boolean
  disabled?: boolean
  type?: "button" | "submit"
}

export function MintButton({ 
  children, 
  onClick, 
  className,
  variant = "mint",
  showArrow = false,
  disabled = false,
  type = "button"
}: MintButtonProps) {
  const variants = {
    mint: "bg-gradient-to-r from-[#18E3A4] to-[#4BFEBD] text-[#001736] hover:opacity-90",
    navy: "bg-[#001736] text-white hover:bg-[#002050]",
    outline: "bg-transparent border-2 border-[#18E3A4] text-[#18E3A4] hover:bg-[#18E3A4]/10"
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "w-full h-[52px] rounded-xl font-semibold text-base flex items-center justify-center gap-2 transition-all",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        className
      )}
    >
      {children}
      {showArrow && <ArrowRight className="h-5 w-5" />}
    </button>
  )
}
