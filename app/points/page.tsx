"use client"

import Link from "next/link"
import { Gift, Info, Zap, ArrowRight, Wallet } from "lucide-react"
import { MobileFrame } from "@/components/lynkmetro/mobile-frame"
import { Header } from "@/components/lynkmetro/header"
import { BottomNav } from "@/components/lynkmetro/bottom-nav"
import { MintButton } from "@/components/lynkmetro/mint-button"

const rechargeSteps = [
  { step: 1, title: "Use Points", description: "Apply points during payment" },
  { step: 2, title: "Get Discount", description: "100 points = ₹10 discount" },
  { step: 3, title: "Save More", description: "Accumulate and save big" },
]

export default function PointsScreen() {
  return (
    <MobileFrame showBottomNav className="bg-[#F8F9FF]">
      <Header showBack showBell title="Points" />

      <div className="px-5 pt-4 pb-24">
        {/* Balance Card */}
        <div className="bg-gradient-to-br from-[#001736] to-[#002050] rounded-2xl p-6 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#18E3A4]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#4BFEBD]/10 rounded-full blur-2xl" />
          
          <div className="relative">
            <p className="text-white/60 text-sm uppercase tracking-wide">Available Balance</p>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-5xl font-bold text-white">8,800</span>
              <span className="text-xl text-[#18E3A4] font-semibold">PTS</span>
            </div>
            
            <div className="flex gap-3 mt-6">
              <button className="flex-1 py-3 bg-[#18E3A4] rounded-xl text-[#001736] font-semibold text-sm flex items-center justify-center gap-2">
                <Gift className="h-4 w-4" />
                Redeem Now
              </button>
              <button className="px-4 py-3 border border-white/20 rounded-xl text-white font-medium text-sm flex items-center gap-2">
                <Info className="h-4 w-4" />
                How it works
              </button>
            </div>
          </div>
        </div>

        {/* How to Recharge */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-[#1A1B1F] mb-4">How to Recharge</h2>
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#C4C6D0]/30">
            <div className="space-y-4">
              {rechargeSteps.map((item, index) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#18E3A4] flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-[#001736]">{item.step}</span>
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="font-medium text-[#1A1B1F]">{item.title}</p>
                    <p className="text-sm text-[#747780]">{item.description}</p>
                  </div>
                  {index < rechargeSteps.length - 1 && (
                    <div className="absolute left-9 mt-8 w-0.5 h-8 bg-[#C4C6D0]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Savings Card */}
        <div className="mt-6 bg-[#001736] rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#18E3A4]/20 flex items-center justify-center">
              <Wallet className="h-5 w-5 text-[#18E3A4]" />
            </div>
            <div>
              <p className="text-white/60 text-sm">Estimated Saving</p>
              <p className="text-2xl font-bold text-white">₹2,000</p>
            </div>
          </div>
          <p className="text-white/80 text-sm">
            You can cover your next 10 trips with these points
          </p>
          <div className="mt-4 flex items-center gap-2 text-[#18E3A4]">
            <Zap className="h-4 w-4" />
            <span className="text-sm font-medium">{"That's 10 free commutes!"}</span>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[#1A1B1F]">Recent Transactions</h2>
            <Link href="#" className="text-sm text-[#18E3A4] font-medium">View All</Link>
          </div>
          <div className="space-y-3">
            <TransactionItem 
              title="Journey Completed"
              date="Today, 9:05 AM"
              points="+50"
              positive
            />
            <TransactionItem 
              title="Pass Renewal Bonus"
              date="Mar 20, 2024"
              points="+2000"
              positive
            />
            <TransactionItem 
              title="Points Redeemed"
              date="Mar 15, 2024"
              points="-500"
            />
          </div>
        </div>

        {/* Earn More Points */}
        <div className="mt-6 bg-gradient-to-r from-[#18E3A4]/20 to-[#4BFEBD]/20 rounded-2xl p-4 border border-[#18E3A4]/30">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#18E3A4] flex items-center justify-center">
              <Gift className="h-6 w-6 text-[#001736]" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-[#001736]">Refer & Earn 500 Points</p>
              <p className="text-sm text-[#43474F]">Share LynkMetro with friends</p>
            </div>
            <ArrowRight className="h-5 w-5 text-[#18E3A4]" />
          </div>
        </div>
      </div>

      <BottomNav />
    </MobileFrame>
  )
}

function TransactionItem({ 
  title, 
  date, 
  points,
  positive = false 
}: { 
  title: string
  date: string
  points: string
  positive?: boolean
}) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-[#C4C6D0]/30 flex items-center justify-between">
      <div>
        <p className="font-medium text-[#1A1B1F]">{title}</p>
        <p className="text-sm text-[#747780]">{date}</p>
      </div>
      <span className={`font-bold ${positive ? 'text-[#18E3A4]' : 'text-[#BA1A1A]'}`}>
        {points}
      </span>
    </div>
  )
}
