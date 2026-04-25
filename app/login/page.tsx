"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { MobileFrame } from "@/components/lynkmetro/mobile-frame"
import { LynkMetroLogo, Header } from "@/components/lynkmetro/header"
import { MintButton } from "@/components/lynkmetro/mint-button"

export default function LoginScreen() {
  const router = useRouter()
  const [phone, setPhone] = useState("")
  const [showOtp, setShowOtp] = useState(false)
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [resendTimer, setResendTimer] = useState(30)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (showOtp && resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [showOtp, resendTimer])

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10)
    setPhone(value)
    if (value.length === 10) {
      setShowOtp(true)
      setResendTimer(30)
    }
  }

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return
    
    const newOtp = [...otp]
    newOtp[index] = value.slice(-1)
    setOtp(newOtp)

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleLogin = () => {
    // Check if user has active membership
    // For demo: first-time users go to membership setup, returning users go to home
    const hasActiveMembership = false // In real app, check from backend/state
    
    if (hasActiveMembership) {
      router.push("/home") // Journey 2: Returning user
    } else {
      router.push("/membership") // Journey 1: First-time setup
    }
  }

  const handleResendOtp = () => {
    setResendTimer(30)
    // In real app, trigger OTP resend
  }

  const isOtpComplete = otp.every(digit => digit !== "")

  return (
    <MobileFrame className="bg-white">
      <Header showBack showBell={false} />

      <div className="px-5 pt-8">
        <h1 className="text-2xl font-bold text-[#1A1B1F]">Welcome to LynkMetro</h1>
        <p className="mt-2 text-[#43474F] text-base">
          Enter your mobile number to begin
        </p>

        {/* Phone Input */}
        <div className="mt-8">
          <label className="block text-sm font-medium text-[#43474F] mb-2">
            Mobile Number
          </label>
          <div className="flex items-center border border-[#C4C6D0] rounded-xl overflow-hidden bg-[#FAF9FE]">
            <span className="px-4 py-4 text-[#1A1B1F] font-medium bg-[#F8F9FF] border-r border-[#C4C6D0]">
              +91
            </span>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Enter mobile number"
              className="flex-1 px-4 py-4 text-base text-[#1A1B1F] bg-transparent outline-none placeholder:text-[#747780]"
            />
          </div>
        </div>

        {/* OTP Input */}
        {showOtp && (
          <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <label className="block text-sm font-medium text-[#43474F] mb-2">
              Enter OTP
            </label>
            <p className="text-sm text-[#747780] mb-4">
              {"We've sent a 6-digit code to your number"}
            </p>
            <div className="flex gap-3 justify-between">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={el => { inputRefs.current[index] = el }}
                  type="tel"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-14 text-center text-xl font-semibold border border-[#C4C6D0] rounded-xl bg-[#FAF9FE] text-[#1A1B1F] outline-none focus:border-[#18E3A4] focus:ring-2 focus:ring-[#18E3A4]/20 transition-all"
                />
              ))}
            </div>
            <div className="mt-4">
              {resendTimer > 0 ? (
                <p className="text-sm text-[#747780]">
                  {"Didn't receive it? Resend in 0:"}{resendTimer.toString().padStart(2, "0")}
                </p>
              ) : (
                <button 
                  onClick={handleResendOtp}
                  className="text-[#18E3A4] text-sm font-medium"
                >
                  Resend OTP
                </button>
              )}
            </div>
          </div>
        )}

        {/* Login Button */}
        <div className="mt-8">
          <MintButton 
            onClick={handleLogin}
            disabled={!isOtpComplete}
          >
            Verify & Continue
          </MintButton>
        </div>
      </div>

      {/* Help Center */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <Link href="#" className="text-[#747780] text-sm font-medium">
          Need help? Contact support
        </Link>
      </div>
    </MobileFrame>
  )
}
