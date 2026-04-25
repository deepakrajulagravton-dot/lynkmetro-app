"use client"

import Link from "next/link"
import { MobileFrame } from "@/components/lynkmetro/mobile-frame"
import { Header } from "@/components/lynkmetro/header"
import { Train, Clock, MapPin } from "lucide-react"
import { MintButton } from "@/components/lynkmetro/mint-button"

export default function MetroQRScreen() {
  return (
    <MobileFrame className="bg-[#F8F9FF]">
      <Header showBack showBell title="Metro Entry QR" />

      <div className="px-5 pt-8 pb-24 flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-[#001736] flex items-center justify-center mb-6">
          <Train className="h-8 w-8 text-[#18E3A4]" />
        </div>

        <div className="w-full bg-white rounded-2xl p-6 shadow-sm border border-[#C4C6D0]/30">
          <div className="flex flex-col items-center">
            <div className="p-4 bg-white rounded-xl border-2 border-[#001736]">
              <svg width="200" height="200" viewBox="0 0 200 200" className="text-[#001736]">
                <rect x="10" y="10" width="40" height="40" fill="currentColor"/>
                <rect x="150" y="10" width="40" height="40" fill="currentColor"/>
                <rect x="10" y="150" width="40" height="40" fill="currentColor"/>
                <rect x="15" y="15" width="30" height="30" fill="white"/>
                <rect x="155" y="15" width="30" height="30" fill="white"/>
                <rect x="15" y="155" width="30" height="30" fill="white"/>
                <rect x="22" y="22" width="16" height="16" fill="currentColor"/>
                <rect x="162" y="22" width="16" height="16" fill="currentColor"/>
                <rect x="22" y="162" width="16" height="16" fill="currentColor"/>
                <g fill="currentColor">
                  <rect x="60" y="60" width="10" height="10"/>
                  <rect x="80" y="60" width="10" height="10"/>
                  <rect x="100" y="60" width="10" height="10"/>
                  <rect x="120" y="60" width="10" height="10"/>
                  <rect x="60" y="80" width="10" height="10"/>
                  <rect x="100" y="80" width="10" height="10"/>
                  <rect x="140" y="80" width="10" height="10"/>
                  <rect x="70" y="100" width="10" height="10"/>
                  <rect x="90" y="100" width="10" height="10"/>
                  <rect x="110" y="100" width="10" height="10"/>
                  <rect x="130" y="100" width="10" height="10"/>
                  <rect x="60" y="120" width="10" height="10"/>
                  <rect x="80" y="120" width="10" height="10"/>
                  <rect x="120" y="120" width="10" height="10"/>
                  <rect x="140" y="120" width="10" height="10"/>
                  <rect x="70" y="140" width="10" height="10"/>
                  <rect x="100" y="140" width="10" height="10"/>
                  <rect x="120" y="140" width="10" height="10"/>
                  <rect x="140" y="160" width="10" height="10"/>
                  <rect x="160" y="140" width="10" height="10"/>
                  <rect x="160" y="160" width="10" height="10"/>
                </g>
                <rect x="75" y="75" width="50" height="50" fill="white"/>
                <rect x="80" y="80" width="40" height="40" fill="#001736" rx="8"/>
                <text x="100" y="105" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#18E3A4">M</text>
              </svg>
            </div>
            <div className="mt-4 px-4 py-2 bg-[#18E3A4]/10 rounded-full">
              <p className="text-sm font-medium text-[#18E3A4]">Valid for single entry</p>
            </div>
          </div>
        </div>

        <div className="w-full mt-6 bg-white rounded-2xl p-4 shadow-sm border border-[#C4C6D0]/30">
          <div className="flex items-center gap-4 pb-4 border-b border-[#C4C6D0]/50">
            <div className="w-12 h-12 rounded-xl bg-[#001736] flex items-center justify-center">
              <MapPin className="h-6 w-6 text-[#18E3A4]" />
            </div>
            <div>
              <p className="text-sm text-[#747780]">Entry Station</p>
              <p className="font-semibold text-[#1A1B1F]">LB Nagar Metro Station</p>
            </div>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <div className="w-12 h-12 rounded-xl bg-[#FFBC5A]/10 flex items-center justify-center">
              <MapPin className="h-6 w-6 text-[#FFBC5A]" />
            </div>
            <div>
              <p className="text-sm text-[#747780]">Exit Station</p>
              <p className="font-semibold text-[#1A1B1F]">Raidurg Metro Station</p>
            </div>
          </div>
        </div>

        <div className="w-full mt-4 flex gap-4">
          <div className="flex-1 bg-white rounded-xl p-4 text-center shadow-sm border border-[#C4C6D0]/30">
            <Clock className="h-5 w-5 text-[#747780] mx-auto mb-2" />
            <p className="text-xs text-[#747780]">Valid Until</p>
            <p className="font-semibold text-[#1A1B1F]">9:00 AM</p>
          </div>
          <div className="flex-1 bg-white rounded-xl p-4 text-center shadow-sm border border-[#C4C6D0]/30">
            <Train className="h-5 w-5 text-[#747780] mx-auto mb-2" />
            <p className="text-xs text-[#747780]">Estimated Travel</p>
            <p className="font-semibold text-[#1A1B1F]">25 mins</p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-[#001736]/5 rounded-xl">
          <p className="text-center text-sm text-[#43474F]">
            Scan this QR at the metro entry gate. Keep your phone screen brightness at maximum for better scanning.
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[390px] mx-auto px-5 py-4 bg-white border-t border-[#C4C6D0]">
        <MintButton>
          <Link href="/rider-drop" className="flex items-center gap-2">
            CONTINUE TO DROP
          </Link>
        </MintButton>
      </div>
    </MobileFrame>
  )
}
