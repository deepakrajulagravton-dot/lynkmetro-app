"use client"

import { ArrowLeft, Bell, Menu } from "lucide-react"
import { useRouter } from "next/navigation"

interface HeaderProps {
  showBack?: boolean
  showMenu?: boolean
  showBell?: boolean
  dark?: boolean
  title?: string
}

export function Header({ 
  showBack = false, 
  showMenu = false, 
  showBell = true,
  dark = false,
  title
}: HeaderProps) {
  const router = useRouter()

  return (
    <header className={`flex items-center justify-between px-5 py-4 ${dark ? 'bg-[#001736]' : 'bg-white'}`}>
      <div className="flex items-center gap-3">
        {showBack && (
          <button 
            onClick={() => router.back()} 
            className={`p-1 ${dark ? 'text-white' : 'text-[#1A1B1F]'}`}
            aria-label="Go back"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
        )}
        {showMenu && (
          <button className={`p-1 ${dark ? 'text-white' : 'text-[#1A1B1F]'}`} aria-label="Menu">
            <Menu className="h-6 w-6" />
          </button>
        )}
        {title ? (
          <h1 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-[#1A1B1F]'}`}>
            {title}
          </h1>
        ) : (
          <LynkMetroLogo dark={dark} />
        )}
      </div>
      {showBell && (
        <button className={`p-2 ${dark ? 'text-white' : 'text-[#1A1B1F]'}`} aria-label="Notifications">
          <Bell className="h-6 w-6" />
        </button>
      )}
    </header>
  )
}

export function LynkMetroLogo({ dark = false, size = "md" }: { dark?: boolean; size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  }

  return (
    <div className={`font-bold ${sizeClasses[size]} ${dark ? 'text-white' : 'text-[#001736]'}`}>
      <span className="text-[#18E3A4]">Lynk</span>Metro
    </div>
  )
}
