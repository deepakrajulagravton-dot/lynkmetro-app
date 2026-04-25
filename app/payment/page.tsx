"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronRight, Shield, CreditCard, Building2, Smartphone, Check, Lock, MapPin, Train } from "lucide-react"
import { MobileFrame } from "@/components/lynkmetro/mobile-frame"
import { Header } from "@/components/lynkmetro/header"
import { MintButton } from "@/components/lynkmetro/mint-button"

const paymentMethods = [
  {
    id: "upi",
    icon: Smartphone,
    title: "UPI / QR",
    subtitle: "Instant payment via UPI apps",
    logos: ["GPay", "PhonePe", "Paytm"]
  },
  {
    id: "cards",
    icon: CreditCard,
    title: "Cards",
    subtitle: "Visa, Mastercard, RuPay, Amex",
    logos: []
  },
  {
    id: "netbanking",
    icon: Building2,
    title: "Netbanking",
    subtitle: "All major Indian banks supported",
    logos: []
  },
]

export default function PaymentScreen() {
  const router = useRouter()
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null)

  const handlePayment = () => {
    router.push("/home")
  }

  return (
    <MobileFrame className="bg-[#F8F9FF]">
      <Header showBack showBell={false} title="Complete Your Purchase" />

      <div className="px-5 pt-4 pb-32">
        {/* Order Summary */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#C4C6D0]/30">
          <h2 className="text-sm font-medium text-[#747780] uppercase tracking-wide mb-4">Order Summary</h2>
          
          <div className="pb-4 border-b border-[#C4C6D0]/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-[#1A1B1F]">LynkMetro 2-Way Monthly Pass</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-[#747780] line-through">₹12,000</p>
                <p className="text-lg font-bold text-[#1A1B1F]">₹10,000</p>
              </div>
            </div>
          </div>

          {/* Route Summary */}
          <div className="py-4 border-b border-[#C4C6D0]/50">
            <div className="flex items-start gap-3">
              <div className="flex flex-col items-center pt-1">
                <MapPin className="h-4 w-4 text-[#18E3A4]" />
                <div className="w-0.5 h-4 bg-[#C4C6D0]" />
                <Train className="h-4 w-4 text-[#0066CC]" />
                <div className="w-0.5 h-4 bg-[#C4C6D0]" />
                <Train className="h-4 w-4 text-[#0066CC]" />
                <div className="w-0.5 h-4 bg-[#C4C6D0]" />
                <MapPin className="h-4 w-4 text-[#FFBC5A]" />
              </div>
              <div className="flex-1 space-y-2 text-sm">
                <p className="text-[#1A1B1F]">SV Heights, LB Nagar</p>
                <p className="text-[#747780]">LB Nagar Metro</p>
                <p className="text-[#747780]">Raidurg Metro</p>
                <p className="text-[#1A1B1F]">Cyber Towers, Hitech City</p>
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">+</span>
              <span className="text-sm text-[#18E3A4] font-medium">2,000 pts on this purchase</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-[#C4C6D0]/50">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[#1A1B1F]">Total Amount</span>
              <span className="text-xl font-bold text-[#001736]">₹10,000</span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-6">
          <h2 className="text-sm font-medium text-[#747780] uppercase tracking-wide mb-3">Pay Securely With</h2>
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <button 
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`w-full text-left bg-white rounded-xl p-4 shadow-sm border-2 transition-colors ${
                  selectedMethod === method.id 
                    ? 'border-[#18E3A4] bg-[#18E3A4]/5' 
                    : 'border-[#C4C6D0]/30 hover:border-[#18E3A4]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F8F9FF] flex items-center justify-center">
                      <method.icon className="h-6 w-6 text-[#001736]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A1B1F]">{method.title}</p>
                      <p className="text-sm text-[#747780]">{method.subtitle}</p>
                    </div>
                  </div>
                  {selectedMethod === method.id ? (
                    <div className="w-6 h-6 rounded-full bg-[#18E3A4] flex items-center justify-center">
                      <Check className="h-4 w-4 text-[#001736]" strokeWidth={3} />
                    </div>
                  ) : (
                    <ChevronRight className="h-5 w-5 text-[#747780]" />
                  )}
                </div>
                
                {method.logos.length > 0 && (
                  <div className="mt-3 flex items-center gap-2 pl-16">
                    {method.logos.map((logo) => (
                      <span 
                        key={logo}
                        className="px-2 py-1 bg-[#F8F9FF] rounded text-xs font-medium text-[#43474F]"
                      >
                        {logo}
                      </span>
                    ))}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Razorpay Footer */}
        <div className="mt-6 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 text-[#747780]">
            <Lock className="h-4 w-4" />
            <span className="text-xs">Secured by Razorpay. Your data is encrypted.</span>
          </div>
          <div className="text-lg font-bold text-[#001736]">
            <span className="text-[#528FF0]">Razor</span>pay
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[390px] mx-auto px-5 py-4 bg-white border-t border-[#C4C6D0]">
        <MintButton 
          onClick={handlePayment}
          disabled={!selectedMethod}
          showArrow
        >
          Pay ₹10,000
        </MintButton>
      </div>
    </MobileFrame>
  )
}
