"use client"

import Link from "next/link"
import { ChevronRight, MapPin, CreditCard, HelpCircle, LogOut, User } from "lucide-react"
import { MobileFrame } from "@/components/lynkmetro/mobile-frame"
import { Header } from "@/components/lynkmetro/header"
import { BottomNav } from "@/components/lynkmetro/bottom-nav"

export default function ProfileScreen() {
  return (
    <MobileFrame showBottomNav className="bg-[#F8F9FF]">
      <Header showMenu showBell />

      <div className="px-5 pt-2 pb-24">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#C4C6D0]/30">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#001736] flex items-center justify-center">
              <User className="h-8 w-8 text-[#18E3A4]" />
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-[#1A1B1F]">Sai Prasad</h1>
              <p className="text-sm text-[#747780]">sai.prasad@email.com</p>
            </div>
            <Link href="#" className="text-[#18E3A4] text-sm font-medium">
              Edit
            </Link>
          </div>

          {/* Profile Completion */}
          <div className="mt-4 pt-4 border-t border-[#C4C6D0]/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-[#43474F]">Profile completion</span>
              <span className="text-sm font-semibold text-[#18E3A4]">75%</span>
            </div>
            <div className="h-2 bg-[#F8F9FF] rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-to-r from-[#18E3A4] to-[#4BFEBD] rounded-full" />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Link href="/points" className="bg-white rounded-2xl p-4 shadow-sm border border-[#C4C6D0]/30">
            <p className="text-sm text-[#747780]">Points Balance</p>
            <p className="text-2xl font-bold text-[#18E3A4] mt-1">8,800</p>
            <p className="text-xs text-[#747780] mt-1">Redeem now</p>
          </Link>
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#C4C6D0]/30">
            <p className="text-sm text-[#747780]">Days Left</p>
            <p className="text-2xl font-bold text-[#001736] mt-1">18</p>
            <p className="text-xs text-[#747780] mt-1">Renew pass</p>
          </div>
        </div>

        {/* Management Section */}
        <div className="mt-6">
          <p className="text-xs font-medium text-[#747780] uppercase tracking-wide mb-3">Management</p>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#C4C6D0]/30">
            <MenuItem 
              icon={MapPin}
              label="Route Details"
              sublabel="LB Nagar ↔ Raidurg"
              href="/pickup-route"
            />
            <MenuItem 
              icon={CreditCard}
              label="Membership Status"
              sublabel="Premium • Active"
              href="/membership"
              badge="ACTIVE"
            />
            <MenuItem 
              icon={HelpCircle}
              label="Support"
              sublabel="Help & FAQs"
              href="#"
              isLast
            />
          </div>
        </div>

        {/* Session Section */}
        <div className="mt-6">
          <p className="text-xs font-medium text-[#747780] uppercase tracking-wide mb-3">Session</p>
          <button className="w-full bg-white rounded-2xl p-4 shadow-sm border border-[#C4C6D0]/30 flex items-center gap-4 hover:bg-[#F8F9FF] transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#BA1A1A]/10 flex items-center justify-center">
              <LogOut className="h-5 w-5 text-[#BA1A1A]" />
            </div>
            <span className="font-medium text-[#BA1A1A]">Logout</span>
          </button>
        </div>

        {/* App Version */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[#747780]">LynkMetro v1.0.0</p>
          <p className="text-xs text-[#C4C6D0] mt-1">by Zargo</p>
        </div>
      </div>

      <BottomNav />
    </MobileFrame>
  )
}

function MenuItem({ 
  icon: Icon, 
  label, 
  sublabel, 
  href,
  badge,
  isLast = false 
}: { 
  icon: React.ElementType
  label: string
  sublabel: string
  href: string
  badge?: string
  isLast?: boolean
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-4 p-4 hover:bg-[#F8F9FF] transition-colors ${
        !isLast ? 'border-b border-[#C4C6D0]/50' : ''
      }`}
    >
      <div className="w-10 h-10 rounded-xl bg-[#F8F9FF] flex items-center justify-center">
        <Icon className="h-5 w-5 text-[#001736]" />
      </div>
      <div className="flex-1">
        <p className="font-medium text-[#1A1B1F]">{label}</p>
        <p className="text-sm text-[#747780]">{sublabel}</p>
      </div>
      <div className="flex items-center gap-2">
        {badge && (
          <span className="px-2 py-1 bg-[#18E3A4]/10 text-[#18E3A4] text-xs font-medium rounded-full">
            {badge}
          </span>
        )}
        <ChevronRight className="h-5 w-5 text-[#C4C6D0]" />
      </div>
    </Link>
  )
}
