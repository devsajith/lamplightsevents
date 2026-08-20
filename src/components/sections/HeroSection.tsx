import React from "react";
import Link from "next/link";
import Image from "next/image";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { companyDetails } from "@/data/company";

export default function HeroSection() {
  return (
    <section className="relative bg-[#111111] text-white min-h-[85vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden border-b border-[#C9A45C]/20">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop"
          alt="Wedding Stage Decoration and Event Lighting"
          fill
          priority
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/85 to-transparent" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center py-10">
        <div className="max-w-3xl space-y-6">
          {/* Minimal Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#C9A45C]/50 bg-[#C9A45C]/10 text-[#C9A45C] backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#C9A45C]" />
            <span>Wedding Stage & Event Light Setup</span>
          </div>

          {/* Plain English Main Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.15]">
            Stage Decoration & <span className="gold-gradient-text">Event Light Setup.</span>
          </h1>

          {/* Easy to Understand Subtitle */}
          <p className="text-base sm:text-lg text-[#E8E5DF]/90 font-normal leading-relaxed max-w-2xl">
            We design beautiful wedding stages, floral mandaps, and set up professional event lights for weddings and receptions in Adimali, Munnar, Idukki, and Ernakulam.
          </p>

          {/* Niche Summary Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="flex items-center gap-2.5 p-2.5 rounded-md bg-white/5 border border-white/10 text-xs text-[#E8E5DF]">
              <span className="text-base">💐</span>
              <div>
                <span className="font-semibold block text-white">Stage Decoration</span>
                <span className="text-[11px] text-[#A1A1AA]">Wedding Mandaps & Backdrops</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 p-2.5 rounded-md bg-white/5 border border-white/10 text-xs text-[#E8E5DF]">
              <span className="text-base">💡</span>
              <div>
                <span className="font-semibold block text-white">Event Lighting</span>
                <span className="text-[11px] text-[#A1A1AA]">Fairy Lights & Stage Lights</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 p-2.5 rounded-md bg-white/5 border border-white/10 text-xs text-[#E8E5DF]">
              <span className="text-base">🚚</span>
              <div>
                <span className="font-semibold block text-white">Full On-Site Setup</span>
                <span className="text-[11px] text-[#A1A1AA]">We Deliver & Install for You</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <WhatsAppButton
              size="lg"
              label="Get Quick Quote on WhatsApp"
              message="Hi! I need stage decoration or event lighting for an upcoming event. Please share designs and details."
            />

            <Link
              href="/stages"
              className="inline-flex items-center justify-center px-6 py-3.5 border border-white/30 text-white font-medium text-sm rounded-[6px] hover:border-[#C9A45C] hover:text-[#C9A45C] transition-all bg-white/5 backdrop-blur-sm"
            >
              <span>View Stage Catalog</span>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
