"use client"

import Link from "next/link"
import { ChevronDown, Play } from "lucide-react"
import { MobileFrame } from "@/components/lynkmetro/mobile-frame"
import { LynkMetroLogo } from "@/components/lynkmetro/header"
import { MintButton } from "@/components/lynkmetro/mint-button"

export default function OnboardingScreen() {
  return (
    <MobileFrame className="bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-5 py-4">
        <LynkMetroLogo />
        <Link href="/login" className="text-[#747780] text-sm font-medium">
          SKIP
        </Link>
      </header>

      {/* Content */}
      <div className="px-5 pt-8 flex flex-col">
        <h1 className="text-2xl font-bold text-[#1A1B1F] leading-tight text-balance">
          Your Daily Commute, Completely Sorted
        </h1>
        
        <p className="mt-4 text-[#43474F] text-base leading-relaxed">
          Door-to-door EV pickup, seamless metro access, and last-mile drop — all in one pass
        </p>

        {/* Video placeholder card */}
        <div className="mt-8 rounded-2xl bg-[#F8F9FF] border border-[#C4C6D0] overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-[#001736] to-[#002050] flex items-center justify-center relative">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#18E3A4]/40 blur-2xl" />
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-[#4BFEBD]/40 blur-2xl" />
            </div>
            <button className="relative w-16 h-16 rounded-full bg-[#18E3A4] flex items-center justify-center hover:scale-105 transition-transform">
              <Play className="h-7 w-7 text-[#001736] ml-1" fill="#001736" />
            </button>
          </div>
          <div className="p-4">
            <p className="text-sm text-[#43474F]">Watch how LynkMetro transforms your daily commute</p>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          <FeaturePill label="Zero Wait Time" />
          <FeaturePill label="QR Metro Access" />
          <FeaturePill label="Eco Friendly" />
          <FeaturePill label="Fixed Monthly Rate" />
        </div>
      </div>

      {/* Bottom CTAs */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-8 pt-4 bg-gradient-to-t from-white via-white to-transparent">
        <MintButton showArrow>
          <Link href="/login" className="flex items-center gap-2">
            Get Started
          </Link>
        </MintButton>
        
        <button className="mt-4 w-full flex items-center justify-center gap-1 text-[#43474F] text-sm font-medium">
          See how it works
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </MobileFrame>
  )
}

function FeaturePill({ label }: { label: string }) {
  return (
    <div className="px-4 py-2 rounded-full bg-[#18E3A4]/10 border border-[#18E3A4]/30">
      <p className="text-sm text-[#001736] font-medium">{label}</p>
    </div>
  )
}
