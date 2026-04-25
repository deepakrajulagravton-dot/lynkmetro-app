"use client"

import { useState } from "react"
import Link from "next/link"
import { MapPin, Clock, Search, Navigation } from "lucide-react"
import { MobileFrame } from "@/components/lynkmetro/mobile-frame"
import { Header } from "@/components/lynkmetro/header"
import { MintButton } from "@/components/lynkmetro/mint-button"

const timeSlots = ["7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM", "9:00 AM"]

export default function PickupRouteScreen() {
  const [selectedTime, setSelectedTime] = useState("8:00 AM")

  return (
    <MobileFrame className="bg-white">
      <Header showBack showBell={false} />

      <div className="px-5 pt-4 pb-32">
        <h1 className="text-2xl font-bold text-[#1A1B1F]">Where should we pick you up?</h1>
        <p className="mt-2 text-[#43474F]">
          {"We'll send your rider to this address every morning"}
        </p>

        {/* Pickup Address Section */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-[#747780] mb-2 uppercase tracking-wide">
            Pickup Address
          </label>
          
          {/* Location Selector */}
          <div className="bg-[#FAF9FE] border border-[#C4C6D0] rounded-xl overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-[#C4C6D0]">
              <MapPin className="h-5 w-5 text-[#18E3A4]" />
              <input
                type="text"
                placeholder="Search your home or building name"
                className="flex-1 bg-transparent outline-none text-[#1A1B1F] placeholder:text-[#747780]"
                defaultValue="Flat 302, SV Heights, LB Nagar"
              />
              <Search className="h-5 w-5 text-[#747780]" />
            </div>
            
            {/* Use Current Location */}
            <button className="w-full flex items-center gap-3 px-4 py-3 text-[#18E3A4] hover:bg-[#18E3A4]/5 transition-colors">
              <Navigation className="h-5 w-5" />
              <span className="text-sm font-medium">Use current location</span>
            </button>
          </div>
        </div>

        {/* Preferred Pickup Time */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-[#747780] mb-2 uppercase tracking-wide">
            Preferred Pickup Time
          </label>
          <p className="text-sm text-[#43474F] mb-3">
            Your rider will arrive within 5 mins of this time
          </p>
          <div className="flex flex-wrap gap-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-4 py-2 rounded-xl border-2 text-sm font-medium transition-all ${
                  selectedTime === time
                    ? "border-[#18E3A4] bg-[#18E3A4]/10 text-[#001736]"
                    : "border-[#C4C6D0] bg-white text-[#43474F] hover:border-[#18E3A4]/50"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Map Preview */}
        <div className="mt-6 rounded-2xl overflow-hidden border border-[#C4C6D0]">
          <div className="h-40 bg-[#0F1729] relative">
            {/* Dark map with route */}
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
                d="M 80 120 Q 120 100 195 80 Q 280 55 340 40"
                fill="none"
                stroke="#18E3A4"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="8 4"
              />
            </svg>
            
            {/* Pickup Marker */}
            <div className="absolute bottom-8 left-16">
              <div className="w-8 h-8 bg-[#18E3A4] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <MapPin className="h-5 w-5 text-[#001736]" />
              </div>
            </div>
            
            {/* Metro Marker */}
            <div className="absolute top-6 right-12">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-[#001736] text-sm font-bold">M</span>
              </div>
            </div>
          </div>
          
          {/* Location Details */}
          <div className="p-4 bg-white">
            <p className="font-semibold text-[#1A1B1F]">Flat 302, SV Heights</p>
            <p className="text-sm text-[#747780]">LB Nagar, Hyderabad - 500074</p>
          </div>
        </div>

        {/* Metro Station Info */}
        <div className="mt-4 p-4 bg-[#FAF9FE] rounded-xl border border-[#C4C6D0]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#001736] flex items-center justify-center">
              <span className="text-white text-sm font-bold">M</span>
            </div>
            <div>
              <p className="text-sm text-[#747780]">Nearest Metro Station</p>
              <p className="font-semibold text-[#1A1B1F]">LB Nagar Metro Station</p>
              <p className="text-xs text-[#18E3A4]">2.3 km away</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[390px] mx-auto px-5 py-4 bg-white border-t border-[#C4C6D0]">
        <MintButton showArrow>
          <Link href="/metro-station?type=boarding" className="flex items-center gap-2">
            Confirm Pickup Location
          </Link>
        </MintButton>
      </div>
    </MobileFrame>
  )
}
