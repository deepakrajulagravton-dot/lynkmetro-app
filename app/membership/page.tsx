"use client"

import Link from "next/link"
import { Check, Gift } from "lucide-react"
import { MobileFrame } from "@/components/lynkmetro/mobile-frame"
import { Header } from "@/components/lynkmetro/header"
import { MintButton } from "@/components/lynkmetro/mint-button"

const includedFeatures = [
  "Morning EV pickup from your doorstep",
  "Metro entry via QR pass (no ticket needed)",
  "Last-mile EV drop to your destination",
  "Evening return journey included",
  "Real-time tracking throughout",
]

export default function MembershipScreen() {
  return (
    <MobileFrame className="bg-white">
      <Header showBack showBell={false} />

      <div className="px-5 pt-4 pb-32">
        <h1 className="text-2xl font-bold text-[#1A1B1F]">Choose Your Commute Plan</h1>
        <p className="mt-2 text-[#43474F]">
          One pass covers your entire journey — pickup, metro, and drop
        </p>

        {/* Membership Card */}
        <div className="mt-6 bg-[#001736] rounded-2xl p-6 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#18E3A4]/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#4BFEBD]/10 rounded-full blur-2xl" />
          
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-[#18E3A4]/20 text-[#18E3A4] text-xs font-semibold rounded-full uppercase tracking-wide">
                Best Value
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-white">LynkMetro 2-Way Pass</h3>
            
            <div className="flex items-baseline gap-2 mt-3">
              <span className="text-4xl font-bold text-white">₹10,000</span>
              <span className="text-[#747780]">/month</span>
            </div>
            
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[#747780] line-through">₹12,000</span>
              <span className="px-2 py-0.5 bg-[#18E3A4] text-[#001736] text-xs font-bold rounded">
                Save 17%
              </span>
            </div>
          </div>
        </div>

        {/* Points Banner */}
        <div className="mt-4 bg-gradient-to-r from-[#FFBC5A]/20 to-[#FFBC5A]/10 rounded-xl p-4 flex items-center gap-3 border border-[#FFBC5A]/30">
          <div className="w-10 h-10 rounded-full bg-[#FFBC5A] flex items-center justify-center">
            <Gift className="h-5 w-5 text-[#001736]" />
          </div>
          <div>
            <p className="font-semibold text-[#001736]">Earn 2,000 bonus points</p>
            <p className="text-sm text-[#43474F]">On your first purchase</p>
          </div>
        </div>

        {/* What's Included */}
        <div className="mt-8">
          <h2 className="text-sm font-semibold text-[#747780] uppercase tracking-wide mb-4">{"WHAT'S INCLUDED"}</h2>
          <div className="space-y-4">
            {includedFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#18E3A4] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-[#001736]" strokeWidth={3} />
                </div>
                <p className="text-[#1A1B1F]">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pass Types */}
        <div className="mt-8">
          <h2 className="text-sm font-semibold text-[#747780] uppercase tracking-wide mb-4">Select Plan</h2>
          <div className="grid grid-cols-2 gap-3">
            <PassOption 
              type="1-Way Pass" 
              price="₹6,000" 
              description="Single direction only"
              active={false}
            />
            <PassOption 
              type="2-Way Pass" 
              price="₹10,000" 
              description="Both directions"
              active={true}
            />
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[390px] mx-auto px-5 py-4 bg-white border-t border-[#C4C6D0]">
        <MintButton showArrow>
          <Link href="/pickup-route" className="flex items-center gap-2">
            Continue to Route Setup
          </Link>
        </MintButton>
      </div>
    </MobileFrame>
  )
}

function PassOption({ 
  type, 
  price, 
  description,
  active 
}: { 
  type: string
  price: string
  description: string
  active: boolean
}) {
  return (
    <button 
      className={`p-4 rounded-xl border-2 text-left transition-all ${
        active 
          ? 'border-[#18E3A4] bg-[#18E3A4]/5' 
          : 'border-[#C4C6D0] bg-white hover:border-[#18E3A4]/50'
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-[#1A1B1F]">{type}</span>
        {active && (
          <div className="w-5 h-5 rounded-full bg-[#18E3A4] flex items-center justify-center">
            <Check className="h-3 w-3 text-[#001736]" strokeWidth={3} />
          </div>
        )}
      </div>
      <p className="text-lg font-bold text-[#001736]">{price}</p>
      <p className="text-sm text-[#747780]">{description}</p>
    </button>
  )
}
