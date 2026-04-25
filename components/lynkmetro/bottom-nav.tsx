"use client"

import { Home, Clock, User, Star } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { icon: Home, label: "Home", href: "/home" },
  { icon: Clock, label: "Activity", href: "/activity" },
  { icon: Star, label: "Points", href: "/points" },
  { icon: User, label: "Profile", href: "/profile" },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#C4C6D0] px-2 py-3 max-w-[390px] mx-auto">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-colors",
                isActive 
                  ? "text-[#18E3A4]" 
                  : "text-[#747780] hover:text-[#43474F]"
              )}
            >
              <item.icon 
                className="h-6 w-6" 
                strokeWidth={isActive ? 2.5 : 2}
                fill={isActive && item.label === "Points" ? "#18E3A4" : "none"}
              />
              <span className={cn("text-xs font-medium", isActive ? "font-semibold" : "")}>{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
