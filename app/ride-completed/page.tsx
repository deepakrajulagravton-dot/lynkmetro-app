"use client"

import Link from "next/link"
import { Star, Shield, Share2, AlertTriangle, Check, MapPin, Clock, Train } from "lucide-react"
import { MobileFrame } from "@/components/lynkmetro/mobile-frame"
import { Header } from "@/components/lynkmetro/header"
import { MintButton } from "@/components/lynkmetro/mint-button"

export default function RideCompletedScreen() {
  return (
    <MobileFrame className="bg-[#F8F9FF]">
      <Header showBack={false} showBell title="Ride Completed" />

      <div className="px-5 pt-4 pb-28">
        {/* Success Badge */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 rounded-full bg-[#18E3A4] flex items-center justify-center mb-3">
            <Check className="h-8 w-8 text-[#001736]" strokeWidth={3} />
          </div>
          <h2 className="text-xl font-bold text-[#1A1B1F]">Journey Complete!</h2>
          <p className="text-sm text-[#747780]">Thank you for riding with LynkMetro</p>
        </div>

        {/* Driver Card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#C4C6D0]/30">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-[#F8F9FF] flex items-center justify-center text-xl font-bold text-[#001736]">
                RK
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#18E3A4] rounded-full flex items-center justify-center">
                <Shield className="h-2.5 w-2.5 text-[#001736]" />
              </div>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-[#1A1B1F]">Rohit K</p>
              <p className="text-sm text-[#747780]">Verified Lynk Partner</p>
              <div className="flex items-center gap-1 mt-1">
                <Star className="h-4 w-4 text-[#FFBC5A] fill-[#FFBC5A]" />
                <span className="text-sm font-medium text-[#1A1B1F]">4.8</span>
              </div>
            </div>
            <button className="px-4 py-2 bg-[#18E3A4]/10 rounded-xl text-[#18E3A4] text-sm font-medium">
              Rate Ride
            </button>
          </div>
        </div>

        {/* Route Summary */}
        <div className="mt-4 bg-white rounded-2xl p-4 shadow-sm border border-[#C4C6D0]/30">
          <h3 className="text-sm font-medium text-[#747780] uppercase tracking-wide mb-4">Route Summary</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#18E3A4]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-[#18E3A4]" />
              </div>
              <div>
                <p className="text-xs text-[#747780]">Pickup</p>
                <p className="font-medium text-[#1A1B1F]">C-Point, LB Nagar</p>
                <p className="text-sm text-[#747780]">08:30 AM</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#001736] flex items-center justify-center flex-shrink-0">
                <Train className="h-5 w-5 text-[#18E3A4]" />
              </div>
              <div>
                <p className="text-xs text-[#747780]">Boarding Metro Station</p>
                <p className="font-medium text-[#1A1B1F]">LB Nagar to Raidurg</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#001736] flex items-center justify-center flex-shrink-0">
                <Train className="h-5 w-5 text-[#FFBC5A]" />
              </div>
              <div>
                <p className="text-xs text-[#747780]">Destination Metro Station</p>
                <p className="font-medium text-[#1A1B1F]">Raidurg to LB Nagar</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFBC5A]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-[#FFBC5A]" />
              </div>
              <div>
                <p className="text-xs text-[#747780]">Drop</p>
                <p className="font-medium text-[#1A1B1F]">Green Land Enclave</p>
              </div>
            </div>
          </div>
        </div>

        {/* Boarding Journey Timeline */}
        <div className="mt-4 bg-white rounded-2xl p-4 shadow-sm border border-[#C4C6D0]/30">
          <h3 className="text-sm font-medium text-[#747780] uppercase tracking-wide mb-4">Boarding Journey</h3>
          
          <div className="space-y-3">
            <TimelineStep label="Rider Arriving" completed />
            <TimelineStep label="At Destination Metro" completed />
            <TimelineStep label="Reached Drop Point" completed />
            <TimelineStep label="Ride Completed" completed isLast />
          </div>
        </div>

        {/* QR Code */}
        <div className="mt-4 bg-white rounded-2xl p-6 text-center shadow-sm border border-[#C4C6D0]/30">
          <p className="text-sm font-medium text-[#747780] uppercase tracking-wide mb-4">
            Scan Drop QR
          </p>
          
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
        </div>

        {/* Share Trip + SOS */}
        <div className="mt-4 flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-white rounded-xl text-[#001736] font-medium border border-[#C4C6D0]">
            <Share2 className="h-5 w-5" />
            Share Trip
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-white rounded-xl text-[#BA1A1A] font-medium border border-[#BA1A1A]/30">
            <AlertTriangle className="h-5 w-5" />
            SOS
          </button>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[390px] mx-auto px-5 py-4 bg-white border-t border-[#C4C6D0]">
        <MintButton>
          <Link href="/home" className="flex items-center gap-2">
            BACK TO HOME
          </Link>
        </MintButton>
      </div>
    </MobileFrame>
  )
}

function TimelineStep({ label, completed = false, isLast = false }: { label: string; completed?: boolean; isLast?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
        completed ? 'bg-[#18E3A4]' : 'bg-[#C4C6D0]'
      }`}>
        {completed && (
          <Check className="h-3 w-3 text-[#001736]" strokeWidth={3} />
        )}
      </div>
      <div className={`flex-1 ${!isLast ? 'pb-3 border-b border-[#C4C6D0]/30' : ''}`}>
        <p className={`font-medium ${completed ? 'text-[#1A1B1F]' : 'text-[#747780]'}`}>{label}</p>
      </div>
    </div>
  )
}
