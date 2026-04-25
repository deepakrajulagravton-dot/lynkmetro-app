"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { ChevronLeft, Search, Check, MapPin } from "lucide-react"
import { MobileFrame } from "@/components/lynkmetro/mobile-frame"
import { MintButton } from "@/components/lynkmetro/mint-button"

const metroStations = [
  { id: 1, name: "LB Nagar", line: "Blue", lineColor: "#0066CC", distance: "1.2 km" },
  { id: 2, name: "Victoria Memorial", line: "Blue", lineColor: "#0066CC", distance: "2.8 km" },
  { id: 3, name: "Chaitanyapuri", line: "Blue", lineColor: "#0066CC", distance: "3.1 km" },
  { id: 4, name: "Dilsukhnagar", line: "Blue", lineColor: "#0066CC", distance: "4.2 km" },
  { id: 5, name: "Musarambagh", line: "Blue", lineColor: "#0066CC", distance: "5.0 km" },
  { id: 6, name: "New Market", line: "Blue", lineColor: "#0066CC", distance: "5.8 km" },
  { id: 7, name: "Malakpet", line: "Blue", lineColor: "#0066CC", distance: "6.3 km" },
  { id: 8, name: "MG Bus Station", line: "Blue", lineColor: "#0066CC", distance: "7.1 km" },
  { id: 9, name: "Ameerpet", line: "Blue", lineColor: "#0066CC", distance: "12.5 km" },
  { id: 10, name: "Raidurg", line: "Blue", lineColor: "#0066CC", distance: "18.2 km" },
]

export default function MetroStationScreen() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const type = searchParams.get("type") || "boarding" // "boarding" or "destination"
  
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStation, setSelectedStation] = useState<number | null>(null)

  const filteredStations = metroStations.filter(station =>
    station.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleConfirm = () => {
    if (type === "boarding") {
      router.push("/metro-station?type=destination")
    } else {
      router.push("/return-route")
    }
  }

  const isBoarding = type === "boarding"

  return (
    <MobileFrame className="bg-[#F8F9FF]">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-[#F8F9FF] px-5 py-4">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-[#1A1B1F]"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </header>

      {/* Content */}
      <div className="px-5 pb-32">
        <h1 className="text-2xl font-bold text-[#1A1B1F] leading-tight">
          {isBoarding ? "Select Boarding Metro Station" : "Select Destination Metro Station"}
        </h1>
        <p className="mt-2 text-[#43474F] text-base leading-relaxed">
          {isBoarding 
            ? "Choose the station you'll board from each morning"
            : "Choose the station closest to your destination"
          }
        </p>

        {/* Search */}
        <div className="mt-6 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#747780]" />
          <input
            type="text"
            placeholder="Search station name or area"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 pl-12 pr-4 rounded-xl border border-[#C4C6D0] bg-white text-[#1A1B1F] placeholder:text-[#747780] focus:outline-none focus:ring-2 focus:ring-[#18E3A4] focus:border-transparent"
          />
        </div>

        {/* Popular Stations */}
        <div className="mt-6">
          <p className="text-sm font-medium text-[#747780] uppercase tracking-wide mb-3">
            Popular Stations
          </p>
          
          <div className="space-y-3">
            {filteredStations.map((station) => (
              <button
                key={station.id}
                onClick={() => setSelectedStation(station.id)}
                className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                  selectedStation === station.id
                    ? "border-[#18E3A4] bg-[#18E3A4]/5"
                    : "border-[#C4C6D0]/30 bg-white hover:border-[#18E3A4]/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F8F9FF] flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-[#001736]" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-[#1A1B1F]">{station.name}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span 
                        className="px-2 py-0.5 rounded text-xs font-medium text-white"
                        style={{ backgroundColor: station.lineColor }}
                      >
                        {station.line} Line
                      </span>
                      <span className="text-sm text-[#747780]">{station.distance}</span>
                    </div>
                  </div>
                </div>
                
                {selectedStation === station.id && (
                  <div className="w-6 h-6 rounded-full bg-[#18E3A4] flex items-center justify-center">
                    <Check className="h-4 w-4 text-[#001736]" strokeWidth={3} />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[390px] mx-auto px-5 py-4 bg-white border-t border-[#C4C6D0]">
        <MintButton 
          onClick={handleConfirm}
          disabled={!selectedStation}
          showArrow
        >
          Confirm This Station
        </MintButton>
      </div>
    </MobileFrame>
  )
}
