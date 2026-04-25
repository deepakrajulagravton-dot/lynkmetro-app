"use client"

import { useRouter } from "next/navigation"
import { Bell, Star, Phone, MessageSquare, Shield, Share2, AlertTriangle } from "lucide-react"
import { MobileFrame } from "@/components/lynkmetro/mobile-frame"
import { LynkMetroLogo } from "@/components/lynkmetro/header"

export default function TrackingScreen() {
  const router = useRouter()

  const handleQRScan = () => {
    router.push("/metro-boarding")
  }

  return (
    <MobileFrame className="bg-[#001736]">
      {/* Header */}
      <header className="flex items-center justify-between px-5 py-4">
        <LynkMetroLogo variant="light" />
        <button className="p-2 text-white" aria-label="Notifications">
          <Bell className="h-6 w-6" />
        </button>
      </header>

      {/* Status */}
      <div className="px-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full bg-[#18E3A4]/20 text-[#18E3A4] text-xs font-semibold uppercase tracking-wide">
            Rider Arrived
          </span>
        </div>
        <h1 className="text-2xl font-bold text-white leading-tight">
          Kiran has arrived!
        </h1>
        <p className="mt-1 text-white/70 text-base">
          Show the QR below to confirm your pickup
        </p>
      </div>

      {/* Driver Card */}
      <div className="px-5 mt-4">
        <div className="bg-white rounded-2xl p-4">
          <div className="flex items-center gap-4">
            {/* Driver Avatar */}
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#18E3A4] to-[#4BFEBD] flex items-center justify-center text-2xl font-bold text-[#001736]">
                K
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#18E3A4] rounded-full flex items-center justify-center">
                <Shield className="h-3 w-3 text-[#001736]" />
              </div>
            </div>
            
            {/* Driver Info */}
            <div className="flex-1">
              <p className="font-bold text-[#1A1B1F] text-lg">Kiran Kumar</p>
              <p className="text-sm text-[#747780]">Verified LynkMetro Rider</p>
              <div className="flex items-center gap-3 mt-1">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-[#FFBC5A] fill-[#FFBC5A]" />
                  <span className="text-sm font-medium text-[#1A1B1F]">4.9</span>
                </div>
                <span className="text-[#C4C6D0]">|</span>
                <span className="text-sm font-medium text-[#001736]">TS 08 AB 1234</span>
              </div>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="flex gap-3 mt-4">
            <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#F8F9FF] rounded-xl text-[#001736] font-medium">
              <Phone className="h-5 w-5" />
              Call
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#F8F9FF] rounded-xl text-[#001736] font-medium">
              <MessageSquare className="h-5 w-5" />
              Message
            </button>
          </div>
        </div>
      </div>

      {/* Journey Progress */}
      <div className="px-5 mt-4">
        <div className="bg-white rounded-2xl p-4">
          <p className="text-sm font-medium text-[#747780] uppercase tracking-wide mb-4">Journey Progress</p>
          <div className="flex items-center justify-between">
            <ProgressStep label="Arrived" active completed />
            <div className="flex-1 h-1 bg-[#18E3A4] mx-2" />
            <ProgressStep label="Picked Up" active />
            <div className="flex-1 h-1 bg-[#C4C6D0] mx-2" />
            <ProgressStep label="At Metro" />
          </div>
        </div>
      </div>

      {/* QR Code Section */}
      <div className="px-5 mt-4">
        <button 
          onClick={handleQRScan}
          className="w-full bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
        >
          <p className="text-sm font-medium text-[#747780] uppercase tracking-wide mb-4">
            Pickup QR
          </p>
          
          {/* QR Code */}
          <div className="inline-block p-4 bg-white rounded-xl shadow-lg border border-[#C4C6D0]">
            <svg width="140" height="140" viewBox="0 0 160 160" className="text-[#001736]">
              <rect x="10" y="10" width="30" height="30" fill="currentColor"/>
              <rect x="120" y="10" width="30" height="30" fill="currentColor"/>
              <rect x="10" y="120" width="30" height="30" fill="currentColor"/>
              
              <rect x="15" y="15" width="20" height="20" fill="white"/>
              <rect x="125" y="15" width="20" height="20" fill="white"/>
              <rect x="15" y="125" width="20" height="20" fill="white"/>
              
              <rect x="20" y="20" width="10" height="10" fill="currentColor"/>
              <rect x="130" y="20" width="10" height="10" fill="currentColor"/>
              <rect x="20" y="130" width="10" height="10" fill="currentColor"/>
              
              <g fill="currentColor">
                <rect x="50" y="10" width="10" height="10"/>
                <rect x="70" y="10" width="10" height="10"/>
                <rect x="90" y="10" width="10" height="10"/>
                <rect x="50" y="30" width="10" height="10"/>
                <rect x="70" y="30" width="10" height="10"/>
                <rect x="50" y="50" width="10" height="10"/>
                <rect x="70" y="50" width="10" height="10"/>
                <rect x="90" y="50" width="10" height="10"/>
                <rect x="110" y="50" width="10" height="10"/>
                <rect x="50" y="70" width="10" height="10"/>
                <rect x="90" y="70" width="10" height="10"/>
                <rect x="130" y="70" width="10" height="10"/>
                <rect x="50" y="90" width="10" height="10"/>
                <rect x="70" y="90" width="10" height="10"/>
                <rect x="90" y="90" width="10" height="10"/>
                <rect x="110" y="90" width="10" height="10"/>
                <rect x="50" y="110" width="10" height="10"/>
                <rect x="90" y="110" width="10" height="10"/>
                <rect x="130" y="110" width="10" height="10"/>
                <rect x="50" y="130" width="10" height="10"/>
                <rect x="70" y="130" width="10" height="10"/>
                <rect x="90" y="130" width="10" height="10"/>
                <rect x="110" y="130" width="10" height="10"/>
                <rect x="130" y="130" width="10" height="10"/>
              </g>
              
              <rect x="60" y="60" width="40" height="40" fill="white"/>
              <text x="80" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#001736">LM</text>
            </svg>
          </div>
          
          <p className="mt-4 text-sm text-[#43474F]">
            Rider will scan this to start your journey
          </p>
        </button>
      </div>

      {/* Share Trip + SOS */}
      <div className="px-5 mt-4 pb-6 flex gap-3">
        <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/10 rounded-xl text-white font-medium border border-white/20">
          <Share2 className="h-5 w-5" />
          Share Trip
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#BA1A1A]/10 rounded-xl text-[#BA1A1A] font-medium border border-[#BA1A1A]/30">
          <AlertTriangle className="h-5 w-5" />
          SOS
        </button>
      </div>
    </MobileFrame>
  )
}

function ProgressStep({ label, active = false, completed = false }: { label: string; active?: boolean; completed?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
        active || completed ? 'bg-[#18E3A4]' : 'bg-[#C4C6D0]'
      }`}>
        {completed ? (
          <svg className="h-4 w-4 text-[#001736]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <div className={`w-3 h-3 rounded-full ${active ? 'bg-[#001736]' : 'bg-white'}`} />
        )}
      </div>
      <p className={`text-xs font-medium ${active || completed ? 'text-[#1A1B1F]' : 'text-[#747780]'}`}>{label}</p>
    </div>
  )
}
