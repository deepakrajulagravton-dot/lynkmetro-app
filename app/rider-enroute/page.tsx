"use client"

import { useRouter } from "next/navigation"
import { Phone, X, Star, MapPin } from "lucide-react"
import { MobileFrame } from "@/components/lynkmetro/mobile-frame"
import { LynkMetroLogo } from "@/components/lynkmetro/header"

export default function RiderEnRouteScreen() {
  const router = useRouter()

  const handleQRScan = () => {
    router.push("/tracking")
  }

  return (
    <MobileFrame className="bg-[#001736]">
      {/* Header */}
      <header className="flex items-center justify-between px-5 py-4">
        <LynkMetroLogo variant="light" />
        <div className="flex items-center gap-2">
          <span className="text-white/80 text-sm">8:12 AM</span>
        </div>
      </header>

      {/* Status */}
      <div className="px-5 pt-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full bg-[#18E3A4]/20 text-[#18E3A4] text-xs font-semibold uppercase tracking-wide">
            Rider En Route
          </span>
        </div>
        <h1 className="text-2xl font-bold text-white leading-tight">
          Kiran is heading to you
        </h1>
        <p className="mt-1 text-white/70 text-base">
          Your verified LynkMetro rider is on the way
        </p>
      </div>

      {/* Map Preview */}
      <div className="mx-5 mt-6 rounded-2xl overflow-hidden border border-white/10">
        <div className="aspect-[4/3] bg-[#0F1729] relative">
          {/* Map background with route */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
            {/* Grid lines */}
            <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
              {[...Array(10)].map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 30} x2="400" y2={i * 30} />
              ))}
              {[...Array(14)].map((_, i) => (
                <line key={`v${i}`} x1={i * 30} y1="0" x2={i * 30} y2="300" />
              ))}
            </g>
            
            {/* Route line */}
            <path
              d="M 320 80 Q 280 120 220 140 Q 160 160 120 200 Q 100 220 80 250"
              fill="none"
              stroke="#18E3A4"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="8 4"
            />
            
            {/* Rider position (animated) */}
            <circle cx="220" cy="140" r="12" fill="#18E3A4">
              <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="220" cy="140" r="6" fill="#001736" />
            
            {/* User position */}
            <circle cx="80" cy="250" r="10" fill="#fff" />
            <circle cx="80" cy="250" r="5" fill="#001736" />
          </svg>
          
          {/* ETA Chip */}
          <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-[#001736] border border-white/20">
            <p className="text-[#18E3A4] font-bold text-sm">Arriving in 4 mins</p>
          </div>
          
          {/* Distance */}
          <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur">
            <p className="text-white text-sm font-medium">1.2 km away</p>
          </div>
        </div>
      </div>

      {/* Rider Card */}
      <div className="mx-5 mt-4 bg-white rounded-2xl p-4 shadow-sm border border-[#C4C6D0]/30">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#18E3A4] to-[#4BFEBD] flex items-center justify-center">
            <span className="text-xl font-bold text-[#001736]">K</span>
          </div>
          <div className="flex-1">
            <p className="font-bold text-[#1A1B1F] text-lg">Kiran Kumar</p>
            <div className="flex items-center gap-2 mt-0.5">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-[#FFBC5A] fill-[#FFBC5A]" />
                <span className="text-sm font-medium text-[#43474F]">4.9</span>
              </div>
              <span className="text-[#C4C6D0]">|</span>
              <span className="text-sm text-[#747780]">TS 08 AB 1234</span>
            </div>
          </div>
          <button className="w-12 h-12 rounded-full bg-[#18E3A4]/10 flex items-center justify-center">
            <Phone className="h-5 w-5 text-[#18E3A4]" />
          </button>
        </div>
        
        {/* Vehicle */}
        <div className="mt-4 pt-4 border-t border-[#C4C6D0]/30 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#F8F9FF] flex items-center justify-center">
            <svg className="h-6 w-6 text-[#001736]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10.2V6c0-1.1-.9-2-2-2H8C6.9 4 6 4.9 6 6v4.2l-2.5.9C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2c0 1.7 1.3 3 3 3s3-1.3 3-3h2c0 1.7 1.3 3 3 3s3-1.3 3-3zm-11 2c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm8 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"/>
            </svg>
          </div>
          <div>
            <p className="font-medium text-[#1A1B1F]">Ather 450X</p>
            <p className="text-sm text-[#747780]">Electric Scooter</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mx-5 mt-4 flex gap-3">
        <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 text-white font-medium border border-white/20">
          <Phone className="h-5 w-5" />
          Call Rider
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#BA1A1A]/10 text-[#BA1A1A] font-medium border border-[#BA1A1A]/30">
          <X className="h-5 w-5" />
          Cancel
        </button>
      </div>

      {/* Bottom Instruction Banner */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[390px] mx-auto">
        <button 
          onClick={handleQRScan}
          className="w-full px-5 py-5 bg-[#18E3A4] text-[#001736]"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/30 flex items-center justify-center">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zm8-2v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm13 0h-2v2h2v-2zm0 4h-2v2h2v-2zm-4-4h-2v2h2v-2zm2 2h-2v2h2v-2zm2 2h-2v2h2v-2zm-4 0h-2v2h2v-2zm-2-4h-2v2h2v-2z"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="font-bold text-base">SCAN PICKUP QR WHEN RIDER ARRIVES</p>
              <p className="text-sm opacity-80">Show your QR to confirm the pickup</p>
            </div>
          </div>
        </button>
      </div>
    </MobileFrame>
  )
}
