"use client"

import { useState } from "react"
import Link from "next/link"
import { Train, MapPin, ChevronRight, Leaf } from "lucide-react"
import { MobileFrame } from "@/components/lynkmetro/mobile-frame"
import { Header } from "@/components/lynkmetro/header"
import { BottomNav } from "@/components/lynkmetro/bottom-nav"
import { cn } from "@/lib/utils"

const trips = [
  {
    id: 1,
    from: "LB Nagar",
    to: "Raidurg",
    date: "Today",
    timeRange: "8:00 AM - 9:05 AM",
    status: "COMPLETED"
  },
  {
    id: 2,
    from: "Raidurg",
    to: "LB Nagar",
    date: "Yesterday",
    timeRange: "6:30 PM - 7:35 PM",
    status: "COMPLETED"
  },
  {
    id: 3,
    from: "LB Nagar",
    to: "Raidurg",
    date: "Yesterday",
    timeRange: "8:00 AM - 9:10 AM",
    status: "COMPLETED"
  },
  {
    id: 4,
    from: "Raidurg",
    to: "LB Nagar",
    date: "March 23",
    timeRange: "6:30 PM - 7:40 PM",
    status: "COMPLETED"
  },
]

const notifications = [
  {
    id: 1,
    title: "Your rider Kiran Kumar will arrive in 15 minutes",
    time: "7:45 AM",
    isNew: true
  },
  {
    id: 2,
    title: "Journey confirmed for tomorrow at 8:00 AM",
    time: "Yesterday",
    isNew: false
  },
  {
    id: 3,
    title: "Scan your QR at the LB Nagar metro gate",
    time: "Yesterday",
    isNew: false
  },
  {
    id: 4,
    title: "You've earned 200 bonus points this week",
    time: "March 22",
    isNew: false
  },
]

export default function ActivityScreen() {
  const [activeTab, setActiveTab] = useState<"trips" | "notifications">("trips")

  return (
    <MobileFrame showBottomNav className="bg-[#F8F9FF]">
      <Header showMenu showBell />

      <div className="px-5 pt-2 pb-24">
        <h1 className="text-2xl font-bold text-[#1A1B1F]">Your Journeys</h1>

        {/* Tab Switcher */}
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => setActiveTab("trips")}
            className={cn(
              "flex-1 py-3 rounded-xl font-semibold text-sm transition-all",
              activeTab === "trips"
                ? "bg-[#001736] text-white"
                : "bg-white text-[#43474F] border border-[#C4C6D0]"
            )}
          >
            Trips
          </button>
          <button
            onClick={() => setActiveTab("notifications")}
            className={cn(
              "flex-1 py-3 rounded-xl font-semibold text-sm transition-all",
              activeTab === "notifications"
                ? "bg-[#001736] text-white"
                : "bg-white text-[#43474F] border border-[#C4C6D0]"
            )}
          >
            Notifications
          </button>
        </div>

        {activeTab === "trips" && (
          <>
            {/* This Month Stats */}
            <div className="mt-6 bg-white rounded-2xl p-4 shadow-sm border border-[#C4C6D0]/30">
              <p className="text-sm font-medium text-[#747780] uppercase tracking-wide mb-3">This Month</p>
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#1A1B1F]">12</p>
                  <p className="text-sm text-[#747780]">trips</p>
                </div>
                <div className="w-px h-12 bg-[#C4C6D0]" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#18E3A4]">₹1,200</p>
                  <p className="text-sm text-[#747780]">saved</p>
                </div>
                <div className="w-px h-12 bg-[#C4C6D0]" />
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1">
                    <Leaf className="h-5 w-5 text-[#18E3A4]" />
                    <p className="text-lg font-bold text-[#18E3A4]">High</p>
                  </div>
                  <p className="text-sm text-[#747780]">impact</p>
                </div>
              </div>
            </div>

            {/* Recent Journeys */}
            <div className="mt-6">
              <h2 className="text-sm font-medium text-[#747780] uppercase tracking-wide mb-3">
                Recent Journeys
              </h2>
              <div className="space-y-3">
                {trips.map((trip) => (
                  <Link 
                    key={trip.id}
                    href="#"
                    className="block bg-white rounded-2xl p-4 shadow-sm border border-[#C4C6D0]/30 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#001736] flex items-center justify-center">
                        <Train className="h-6 w-6 text-[#18E3A4]" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-[#1A1B1F]">
                          {trip.from} - {trip.to}
                        </p>
                        <p className="text-sm text-[#747780]">{trip.date} &bull; {trip.timeRange}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-[#18E3A4] text-[#001736] text-xs font-medium rounded-full">
                          {trip.status}
                        </span>
                        <ChevronRight className="h-5 w-5 text-[#C4C6D0]" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === "notifications" && (
          <div className="mt-6 space-y-3">
            {notifications.map((notification) => (
              <div 
                key={notification.id}
                className="bg-white rounded-2xl p-4 shadow-sm border border-[#C4C6D0]/30"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    {notification.isNew && (
                      <div className="w-2 h-2 rounded-full bg-[#18E3A4] mt-2 flex-shrink-0" />
                    )}
                    <p className={cn(
                      "text-[#1A1B1F]",
                      notification.isNew ? "font-semibold" : "font-normal"
                    )}>
                      {notification.title}
                    </p>
                  </div>
                  <span className="text-xs text-[#747780] flex-shrink-0">{notification.time}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <BottomNav />
    </MobileFrame>
  )
}
