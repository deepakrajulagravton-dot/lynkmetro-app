"use client"

import Link from "next/link"
import { MapPin, Clock, Search, Building } from "lucide-react"
import { MobileFrame } from "@/components/lynkmetro/mobile-frame"
import { Header } from "@/components/lynkmetro/header"
import { MintButton } from "@/components/lynkmetro/mint-button"

export default function ReturnRouteScreen() {
  return (
    <MobileFrame className="bg-white">
      <Header showBack showBell={false} />

      <div className="px-5 pt-4 pb-32">
        <h1 className="text-2xl font-bold text-[#1A1B1F]">Where should we drop you?</h1>
        <p className="mt-2 text-[#43474F]">
          Your rider will meet you outside the destination metro station exit
        </p>

        {/* Drop Address Section */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-[#747780] mb-2 uppercase tracking-wide">
            Drop Address
          </label>
          
          {/* Location Selector */}
          <div className="bg-[#FAF9FE] border border-[#C4C6D0] rounded-xl overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-[#C4C6D0]">
              <Building className="h-5 w-5 text-[#FFBC5A]" />
              <input
                type="text"
                placeholder="Search your office or destination"
                className="flex-1 bg-transparent outline-none text-[#1A1B1F] placeholder:text-[#747780]"
                defaultValue="Cyber Towers, Hitech City"
              />
              <Search className="h-5 w-5 text-[#747780]" />
            </div>
            
            {/* Saved Locations */}
            <div className="px-4 py-2 border-b border-[#C4C6D0] bg-white">
              <p className="text-xs text-[#747780] font-medium uppercase tracking-wide mb-2">Saved Locations</p>
              <button className="w-full flex items-center gap-3 py-2 text-left hover:bg-[#F8F9FF] rounded-lg px-2 -mx-2 transition-colors">
                <div className="w-8 h-8 bg-[#18E3A4]/10 rounded-full flex items-center justify-center">
                  <Building className="h-4 w-4 text-[#18E3A4]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1A1B1F]">Office - Cyber Towers</p>
                  <p className="text-xs text-[#747780]">Hitech City, Hyderabad</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Expected Drop Time */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-[#747780] mb-2 uppercase tracking-wide">
            Expected Drop Time
          </label>
          <div className="flex items-center gap-3 px-4 py-3 bg-[#FAF9FE] border border-[#C4C6D0] rounded-xl">
            <Clock className="h-5 w-5 text-[#FFBC5A]" />
            <div>
              <p className="text-lg font-semibold text-[#1A1B1F]">9:05 AM</p>
              <p className="text-xs text-[#747780]">Auto-calculated based on your route</p>
            </div>
          </div>
        </div>

        {/* Map Preview */}
        <div className="mt-6 rounded-2xl overflow-hidden border border-[#C4C6D0]">
          <div className="h-40 bg-[#0F1729] relative">
            {/* Dark map */}
            <svg className="w-full h-full" viewBox="0 0 390 160">
              {/* Grid */}
              <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
                {[...Array(8)].map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 20} x2="390" y2={i * 20} />
                ))}
                {[...Array(20)].map((_, i) => (
                  <line key={`v${i}`} x1={i * 20} y1="0" x2={i * 20} y2="160" />
                ))}
              </g>
              
              {/* Route line */}
              <path
                d="M 50 40 Q 120 60 195 80 Q 280 105 340 130"
                fill="none"
                stroke="#18E3A4"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="8 4"
              />
            </svg>
            
            {/* Metro Marker */}
            <div className="absolute top-6 left-10">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-[#001736] text-sm font-bold">M</span>
              </div>
            </div>
            
            {/* Drop Marker */}
            <div className="absolute bottom-4 right-10">
              <div className="w-8 h-8 bg-[#FFBC5A] rounded-full flex items-center justify-center shadow-lg">
                <Building className="h-5 w-5 text-[#001736]" />
              </div>
            </div>
          </div>
          
          {/* Location Details */}
          <div className="p-4 bg-white">
            <p className="font-semibold text-[#1A1B1F]">Cyber Towers</p>
            <p className="text-sm text-[#747780]">Hitech City, Hyderabad - 500081</p>
          </div>
        </div>

        {/* Metro Station Info */}
        <div className="mt-4 p-4 bg-[#FAF9FE] rounded-xl border border-[#C4C6D0]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#001736] flex items-center justify-center">
              <span className="text-white text-sm font-bold">M</span>
            </div>
            <div>
              <p className="text-sm text-[#747780]">Exit Metro Station</p>
              <p className="font-semibold text-[#1A1B1F]">Raidurg Metro Station</p>
              <p className="text-xs text-[#FFBC5A]">1.8 km to destination</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[390px] mx-auto px-5 py-4 bg-white border-t border-[#C4C6D0]">
        <MintButton showArrow>
          <Link href="/payment" className="flex items-center gap-2">
            Confirm Drop Location
          </Link>
        </MintButton>
      </div>
    </MobileFrame>
  )
}
