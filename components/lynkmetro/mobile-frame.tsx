import { cn } from "@/lib/utils"

interface MobileFrameProps {
  children: React.ReactNode
  className?: string
  showBottomNav?: boolean
  dark?: boolean
}

export function MobileFrame({ 
  children, 
  className,
  showBottomNav = false,
  dark = false
}: MobileFrameProps) {
  return (
    <div className={cn(
      "w-full max-w-[390px] min-h-[844px] mx-auto relative overflow-hidden",
      dark ? "bg-[#001736]" : "bg-[#F8F9FF]",
      showBottomNav && "pb-20",
      className
    )}>
      {children}
    </div>
  )
}
