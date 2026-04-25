"use client"

import Link from "next/link"
import { MapPin, Clock, Eye, Sparkles } from "lucide-react"
import { MobileFrame } from "@/components/lynkmetro/mobile-frame"
import { Header } from "@/components/lynkmetro/header"
import { BottomNav } from "@/components/lynkmetro/bottom-nav"
import { MintButton } from "@/components/lynkmetro/mint-button"

export default function HomeScreen() {
  return (
    <MobileFrame showBottomNav className="bg-[#F8F9FF]">
      <Header showMenu showBell />

      <div className="px-5 pb-24">
        {/* Pass Status Card */}
        <div className="bg-gradient-to-r from-[#18E3A4] to-[#4BFEBD] rounded-2xl p-4 mt-2">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 bg-[#001736]/20 text-[#001736] text-xs font-bold rounded">
                  DIAMOND MEMBER
                </span>
              </div>
              <p className="text-[#001736] text-xl font-bold">12 days remaining</p>
            </div>
            <div className="text-right">
              <p className="text-[#001736]/60 text-xs font-medium">Points Balance</p>
              <p className="text-[#001736] text-xl font-bold mt-1">2,000 pts</p>
            </div>
          </div>
        </div>

        {/* Today's Journey */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[#1A1B1F]">{"Today's Journey"}</h2>
            <Link href="/rider-enroute" className="flex items-center gap-1 text-[#18E3A4] text-sm font-medium">
              <Eye className="h-4 w-4" />
              LIVE VIEW
            </Link>
          </div>

          {/* Journey Timeline */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#C4C6D0]/30">
            <JourneyStep 
              location="Home"
              subtext="SV Heights, LB Nagar"
              time="8:00 AM"
              status="ON TIME"
              isFirst
            />
            <JourneyStep 
              location="Board Metro"
              subtext="LB Nagar Station (Platform 2)"
              time="8:15 AM"
              status="ON TIME"
            />
            <JourneyStep 
              location="Exit Metro"
              subtext="Raidurg Station (Platform 4)"
              time="8:45 AM"
            />
            <JourneyStep 
              location="Office"
              subtext="Cyber Towers, Hitech City"
              time="9:05 AM"
              isLast
            />
          </div>

          {/* Start Journey CTA */}
          <div className="mt-4">
            <MintButton showArrow>
              <Link href="/rider-enroute" className="flex items-center gap-2">
                {"Start Today's Journey"}
              </Link>
            </MintButton>
          </div>
        </div>

        {/* Live Route Preview */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-[#1A1B1F] mb-4">Live Route Preview</h2>
          <div className="rounded-2xl overflow-hidden border border-[#C4C6D0]/30 shadow-sm">
            {/* Map */}
            <div className="h-48 bg-[#0F1729] relative">
              <svg className="w-full h-full" viewBox="0 0 390 192">
                {/* Grid lines */}
                <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
                  {[...Array(10)].map((_, i) => (
                    <line key={`h${i}`} x1="0" y1={i * 20} x2="390" y2={i * 20} />
                  ))}
                  {[...Array(20)].map((_, i) => (
                    <line key={`v${i}`} x1={i * 20} y1="0" x2={i * 20} y2="192" />
                  ))}
                </g>
                {/* Route path */}
                <path 
                  d="M 60 150 Q 120 120 180 100 Q 240 80 300 60" 
                  stroke="#18E3A4" 
                  strokeWidth="3" 
                  fill="none"
                  strokeDasharray="8 4"
                />
                {/* Start point */}
                <circle cx="60" cy="150" r="8" fill="#18E3A4" />
                <circle cx="60" cy="150" r="12" stroke="#18E3A4" strokeWidth="2" fill="none" opacity="0.5" />
                {/* Metro point */}
                <circle cx="180" cy="100" r="6" fill="#4BFEBD" />
                {/* End point */}
                <circle cx="300" cy="60" r="8" fill="#FFBC5A" />
              </svg>
              
              {/* Current position indicator */}
              <div className="absolute bottom-4 left-4 bg-white/95 rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-[#18E3A4] animate-pulse" />
                <span className="text-sm font-medium text-[#1A1B1F]">Ready to start</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <Link href="/membership" className="bg-white rounded-2xl p-4 border border-[#C4C6D0]/30 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-[#18E3A4]/10 flex items-center justify-center">
              <Clock className="h-5 w-5 text-[#18E3A4]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1A1B1F]">Renew Pass</p>
              <p className="text-xs text-[#747780]">12 days left</p>
            </div>
          </Link>
          <Link href="/points" className="bg-white rounded-2xl p-4 border border-[#C4C6D0]/30 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-[#FFBC5A]/10 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-[#FFBC5A]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1A1B1F]">Redeem Points</p>
              <p className="text-xs text-[#747780]">2,000 pts</p>
            </div>
          </Link>
        </div>
      </div>

      <BottomNav />
    </MobileFrame>
  )
}

function JourneyStep({ 
  location, 
  subtext, 
  time, 
  status,
  isFirst = false,
  isLast = false 
}: { 
  location: string
  subtext?: string
  time: string
  status?: string
  isFirst?: boolean
  isLast?: boolean
}) {
  return (
    <div className="flex gap-3">
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className={`w-4 h-4 rounded-full ${status ? 'bg-[#18E3A4]' : 'bg-[#C4C6D0]'} flex items-center justify-center`}>
          {status && <div className="w-2 h-2 rounded-full bg-white" />}
        </div>
        {!isLast && <div className="w-0.5 h-12 bg-[#C4C6D0]" />}
      </div>

      {/* Content */}
      <div className={`flex-1 ${!isLast ? 'pb-4' : ''}`}>
        <div className="flex items-start justify-between">
          <div>
            <p className="font-semibold text-[#1A1B1F]">{location}</p>
            {subtext && <p className="text-sm text-[#747780]">{subtext}</p>}
          </div>
          <div className="text-right">
            <p className="text-sm text-[#43474F]">{time}</p>
            {status && (
              <span className="inline-block mt-1 px-2 py-0.5 bg-[#18E3A4] text-[#001736] text-xs font-medium rounded-full">
                {status}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
