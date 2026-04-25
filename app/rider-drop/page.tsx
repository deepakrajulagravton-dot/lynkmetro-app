"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Bell, Star, Phone, MessageSquare, Shield, Share2, AlertTriangle } from "lucide-react"
import { MobileFrame } from "@/components/lynkmetro/mobile-frame"
import { LynkMetroLogo } from "@/components/lynkmetro/header"

export default function RiderDropScreen() {
  const router = useRouter()

  const handleDropConfirm = () => {
    router.push("/ride-completed")
  }

  return (
    <MobileFrame className="bg-[#001736]">
      {/* Header */}
      <header className="flex items-center justify-between px-5 py-4">
        <LynkMetroLogo dark />
        <button className="p-2 text-white" aria-label="Notifications">
          <Bell className="h-6 w-6" />
        </button>
      </header>

      {/* Status Badge */}
      <div className="px-5">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#001736] border border-[#18E3A4]/30 rounded-full">
          <div className="w-2 h-2 rounded-full bg-[#18E3A4] animate-pulse" />
          <span className="text-[#18E3A4] text-sm font-semibold uppercase tracking-wide">Heading Towards Drop</span>
        </div>
      </div>

      {/* Map Preview */}
      <div className="px-5 mt-4">
        <div className="h-40 bg-white/5 rounded-2xl overflow-hidden relative">
          <svg className="w-full h-full" viewBox="0 0 390 160">
            <g stroke="#18E3A4" strokeWidth="0.5" opacity="0.2">
              {[...Array(8)].map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 20} x2="390" y2={i * 20} />
              ))}
              {[...Array(20)].map((_, i) => (
                <line key={`v${i}`} x1={i * 20} y1="0" x2={i * 20} y2="160" />
              ))}
            </g>
            {/* Route path */}
            <path 
              d="M 80 120 Q 150 80 220 60 Q 290 40 320 50" 
              stroke="#FFBC5A" 
              strokeWidth="3" 
              fill="none"
              strokeDasharray="8 4"
            />
            {/* Current position */}
            <circle cx="220" cy="60" r="8" fill="#18E3A4" />
            <circle cx="220" cy="60" r="14" stroke="#18E3A4" strokeWidth="2" fill="none" opacity="0.5" />
            {/* End point */}
            <circle cx="320" cy="50" r="8" fill="#FFBC5A" />
          </svg>
          
          {/* ETA Overlay */}
          <div className="absolute bottom-3 left-3 bg-white/95 rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg">
            <div className="w-2 h-2 rounded-full bg-[#FFBC5A] animate-pulse" />
            <span className="text-sm font-medium text-[#1A1B1F]">6 mins to destination</span>
          </div>
        </div>
      </div>

      {/* Driver Card */}
      <div className="px-5 mt-4">
        <div className="bg-white rounded-2xl p-4">
          <div className="flex items-center gap-4">
            {/* Driver Avatar */}
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-[#F8F9FF] flex items-center justify-center text-2xl font-bold text-[#001736]">
                KK
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#18E3A4] rounded-full flex items-center justify-center">
                <Shield className="h-3 w-3 text-[#001736]" />
              </div>
            </div>
            
            {/* Driver Info */}
            <div className="flex-1">
              <p className="font-semibold text-[#1A1B1F]">Kiran Kumar</p>
              <p className="text-sm text-[#747780]">Verified Lynk Partner</p>
              <div className="flex items-center gap-3 mt-1">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-[#FFBC5A] fill-[#FFBC5A]" />
                  <span className="text-sm font-medium text-[#1A1B1F]">4.9</span>
                </div>
                <span className="text-[#C4C6D0]">|</span>
                <span className="text-sm text-[#747780]">ZARGO 5</span>
                <span className="text-[#C4C6D0]">|</span>
                <span className="text-sm font-medium text-[#001736]">LK: 8881</span>
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
            <ProgressStep label="Arriving" completed />
            <div className="flex-1 h-1 bg-[#18E3A4] mx-1" />
            <ProgressStep label="Picked Up" completed />
            <div className="flex-1 h-1 bg-[#18E3A4] mx-1" />
            <ProgressStep label="At Metro" completed />
            <div className="flex-1 h-1 bg-[#18E3A4] mx-1" />
            <ProgressStep label="At Destination" active />
            <div className="flex-1 h-1 bg-[#C4C6D0] mx-1" />
            <ProgressStep label="Drop" />
          </div>
        </div>
      </div>

      {/* QR Code Section */}
      <div className="px-5 mt-4">
        <button 
          onClick={handleDropConfirm}
          className="w-full bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
        >
          <p className="text-sm font-medium text-[#747780] uppercase tracking-wide mb-4">
            Scan Drop QR
          </p>
          
          {/* QR Code */}
          <div className="inline-block p-4 bg-white rounded-xl shadow-lg border border-[#C4C6D0]">
            <svg width="120" height="120" viewBox="0 0 160 160" className="text-[#001736]">
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
                <rect x="50" y="50" width="10" height="10"/>
                <rect x="70" y="50" width="10" height="10"/>
                <rect x="90" y="50" width="10" height="10"/>
                <rect x="50" y="70" width="10" height="10"/>
                <rect x="90" y="70" width="10" height="10"/>
                <rect x="50" y="90" width="10" height="10"/>
                <rect x="70" y="90" width="10" height="10"/>
                <rect x="90" y="90" width="10" height="10"/>
              </g>
              
              <rect x="60" y="60" width="40" height="40" fill="white"/>
              <text x="80" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#001736">LM</text>
            </svg>
          </div>
          
          <p className="mt-4 text-sm text-[#43474F]">
            Show this QR to the Rider to Confirm the Drop
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
    <div className="flex flex-col items-center gap-1">
      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
        completed || active ? 'bg-[#18E3A4]' : 'bg-[#C4C6D0]'
      }`}>
        {completed && (
          <svg className="w-3 h-3 text-[#001736]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
        {active && !completed && <div className="w-2 h-2 rounded-full bg-[#001736]" />}
      </div>
      <p className={`text-[10px] font-medium text-center leading-tight ${active ? 'text-[#1A1B1F]' : 'text-[#747780]'}`}>{label}</p>
    </div>
  )
}
