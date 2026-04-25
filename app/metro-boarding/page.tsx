"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, Sun, Train } from "lucide-react"
import { MobileFrame } from "@/components/lynkmetro/mobile-frame"
import { MintButton } from "@/components/lynkmetro/mint-button"

export default function MetroBoardingScreen() {
  const router = useRouter()
  const [brightness, setBrightness] = useState(false)
  const [timeLeft, setTimeLeft] = useState(600) // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <MobileFrame className={`${brightness ? "bg-white" : "bg-[#001736]"} transition-colors duration-300`}>
      {/* Header */}
      <header className="flex items-center justify-between px-5 py-4">
        <button 
          onClick={() => router.back()}
          className={`${brightness ? "text-[#1A1B1F]" : "text-white"}`}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button 
          onClick={() => setBrightness(!brightness)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${
            brightness ? "bg-[#001736] text-white" : "bg-white/10 text-white"
          }`}
        >
          <Sun className="h-4 w-4" />
          <span className="text-sm font-medium">{brightness ? "Dim" : "Brighten"}</span>
        </button>
      </header>

      {/* Content */}
      <div className="px-5 pt-8 text-center">
        {/* Status */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#18E3A4]/20 mb-4">
          <span className="text-[#18E3A4] text-sm font-semibold uppercase tracking-wide">
            At Metro Station
          </span>
        </div>

        <h1 className={`text-2xl font-bold leading-tight ${brightness ? "text-[#1A1B1F]" : "text-white"}`}>
          Metro Entry Pass
        </h1>
        <p className={`mt-2 text-lg font-medium ${brightness ? "text-[#43474F]" : "text-white/70"}`}>
          LB Nagar Metro Station
        </p>

        {/* QR Code */}
        <div className="mt-8 inline-block">
          <div className={`p-6 rounded-3xl ${brightness ? "bg-[#F8F9FF] border border-[#C4C6D0]" : "bg-white"}`}>
            <svg width="200" height="200" viewBox="0 0 200 200" className="text-[#001736]">
              {/* QR Code pattern */}
              <rect x="10" y="10" width="40" height="40" fill="currentColor"/>
              <rect x="150" y="10" width="40" height="40" fill="currentColor"/>
              <rect x="10" y="150" width="40" height="40" fill="currentColor"/>
              
              <rect x="17" y="17" width="26" height="26" fill="white"/>
              <rect x="157" y="17" width="26" height="26" fill="white"/>
              <rect x="17" y="157" width="26" height="26" fill="white"/>
              
              <rect x="23" y="23" width="14" height="14" fill="currentColor"/>
              <rect x="163" y="23" width="14" height="14" fill="currentColor"/>
              <rect x="23" y="163" width="14" height="14" fill="currentColor"/>
              
              {/* Data pattern */}
              <g fill="currentColor">
                <rect x="60" y="10" width="10" height="10"/>
                <rect x="80" y="10" width="10" height="10"/>
                <rect x="100" y="10" width="10" height="10"/>
                <rect x="120" y="10" width="10" height="10"/>
                <rect x="60" y="30" width="10" height="10"/>
                <rect x="100" y="30" width="10" height="10"/>
                <rect x="60" y="50" width="10" height="10"/>
                <rect x="80" y="50" width="10" height="10"/>
                <rect x="100" y="50" width="10" height="10"/>
                <rect x="120" y="50" width="10" height="10"/>
                <rect x="140" y="50" width="10" height="10"/>
                <rect x="10" y="60" width="10" height="10"/>
                <rect x="30" y="60" width="10" height="10"/>
                <rect x="60" y="60" width="10" height="10"/>
                <rect x="100" y="60" width="10" height="10"/>
                <rect x="140" y="60" width="10" height="10"/>
                <rect x="180" y="60" width="10" height="10"/>
                <rect x="10" y="80" width="10" height="10"/>
                <rect x="60" y="80" width="10" height="10"/>
                <rect x="80" y="80" width="10" height="10"/>
                <rect x="120" y="80" width="10" height="10"/>
                <rect x="160" y="80" width="10" height="10"/>
                <rect x="10" y="100" width="10" height="10"/>
                <rect x="30" y="100" width="10" height="10"/>
                <rect x="60" y="100" width="10" height="10"/>
                <rect x="100" y="100" width="10" height="10"/>
                <rect x="120" y="100" width="10" height="10"/>
                <rect x="140" y="100" width="10" height="10"/>
                <rect x="180" y="100" width="10" height="10"/>
                <rect x="10" y="120" width="10" height="10"/>
                <rect x="60" y="120" width="10" height="10"/>
                <rect x="80" y="120" width="10" height="10"/>
                <rect x="100" y="120" width="10" height="10"/>
                <rect x="160" y="120" width="10" height="10"/>
                <rect x="10" y="140" width="10" height="10"/>
                <rect x="30" y="140" width="10" height="10"/>
                <rect x="60" y="140" width="10" height="10"/>
                <rect x="100" y="140" width="10" height="10"/>
                <rect x="120" y="140" width="10" height="10"/>
                <rect x="140" y="140" width="10" height="10"/>
                <rect x="60" y="160" width="10" height="10"/>
                <rect x="80" y="160" width="10" height="10"/>
                <rect x="120" y="160" width="10" height="10"/>
                <rect x="160" y="160" width="10" height="10"/>
                <rect x="180" y="160" width="10" height="10"/>
                <rect x="60" y="180" width="10" height="10"/>
                <rect x="100" y="180" width="10" height="10"/>
                <rect x="140" y="180" width="10" height="10"/>
                <rect x="160" y="180" width="10" height="10"/>
              </g>
              
              {/* Center logo */}
              <rect x="75" y="75" width="50" height="50" fill="white"/>
              <text x="100" y="105" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#001736">LM</text>
            </svg>
          </div>
        </div>

        {/* Timer */}
        <div className="mt-6">
          <p className={`text-sm ${brightness ? "text-[#747780]" : "text-white/60"}`}>
            Valid for next
          </p>
          <p className={`text-3xl font-bold mt-1 ${brightness ? "text-[#1A1B1F]" : "text-[#18E3A4]"}`}>
            {formatTime(timeLeft)}
          </p>
        </div>

        {/* Instructions */}
        <div className={`mt-8 p-4 rounded-xl ${brightness ? "bg-[#F8F9FF]" : "bg-white/10"}`}>
          <p className={`text-sm ${brightness ? "text-[#43474F]" : "text-white/80"}`}>
            Hold your phone up to the QR scanner at the gate
          </p>
        </div>

        {/* Line Info */}
        <div className={`mt-4 flex items-center justify-center gap-3 p-4 rounded-xl ${brightness ? "bg-[#0066CC]/10" : "bg-white/10"}`}>
          <Train className={`h-5 w-5 ${brightness ? "text-[#0066CC]" : "text-white"}`} />
          <span className={`font-medium ${brightness ? "text-[#0066CC]" : "text-white"}`}>
            Blue Line
          </span>
          <span className={brightness ? "text-[#747780]" : "text-white/60"}>towards Raidurg</span>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[390px] mx-auto px-5 py-4 bg-transparent">
        <MintButton onClick={() => router.push("/rider-drop")}>
          I&apos;ve Boarded the Metro
        </MintButton>
      </div>
    </MobileFrame>
  )
}
