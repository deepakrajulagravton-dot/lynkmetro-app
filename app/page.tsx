"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { MobileFrame } from "@/components/lynkmetro/mobile-frame"

export default function SplashScreen() {
  const router = useRouter()
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/onboarding")
    }, 2500)
    return () => clearTimeout(timer)
  }, [router])

  return (
    <MobileFrame dark className="flex items-center justify-center">
      {/* Top mint blob */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-[#18E3A4]/30 to-[#4BFEBD]/20 blur-3xl -translate-y-1/2 translate-x-1/4" />
      
      {/* Bottom mint blob */}
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-gradient-to-tr from-[#18E3A4]/30 to-[#4BFEBD]/20 blur-3xl translate-y-1/2 -translate-x-1/4" />

      {/* Logo */}
      <div className={`flex flex-col items-center gap-4 transition-opacity duration-500 ${show ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative">
          <div className="absolute inset-0 bg-[#18E3A4]/20 rounded-full blur-2xl scale-150" />
          <div className="relative text-5xl font-bold text-white">
            <span className="text-[#18E3A4]">Lynk</span>Metro
          </div>
        </div>
        <p className="text-[#747780] text-sm tracking-wider">by Zargo</p>
      </div>

      {/* Loading indicator */}
      <div className="absolute bottom-20 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-[#18E3A4] animate-bounce" style={{ animationDelay: '0ms' }} />
        <div className="w-2 h-2 rounded-full bg-[#18E3A4] animate-bounce" style={{ animationDelay: '150ms' }} />
        <div className="w-2 h-2 rounded-full bg-[#18E3A4] animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </MobileFrame>
  )
}
