import React from "react";
import Link from "next/link";
import Image from "next/image";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { companyDetails } from "@/data/company";

export default function HeroSection() {
  return (
    <section className="relative bg-[#111111] text-white min-h-[90vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden border-b border-[#C9A45C]/20">
      {/* Visual Background Photography Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Stage Decoration and Lighting"
          fill
          priority
          className="object-cover opacity-25 scale-105 transform animate-pulse duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#111111]/50 to-[#111111]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center py-12">
        <div className="max-w-3xl space-y-6">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-[#C9A45C]/40 bg-[#C9A45C]/10 text-[#C9A45C] backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#C9A45C] animate-ping" />
            <span>Luxury Stage Decoration & Architectural Lighting</span>
          </div>

          {/* Hero Main Heading */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.1]">
            Where Grand Architecture Meets <span className="gold-gradient-text italic font-serif">Luminous Art.</span>
          </h1>

          {/* Hero Subtitle */}
          <p className="text-base sm:text-xl text-[#E8E5DF]/90 font-normal leading-relaxed max-w-2xl">
            We design, craft, and illuminate bespoke wedding stages, mandaps, galas, and concert venues across India. Let your event work speak for itself.
          </p>

          {/* CTA Button Group */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <WhatsAppButton
              size="lg"
              label="Instant WhatsApp Consultation"
              message="Hi, I am planning an upcoming luxury event and would like to consult with your stage & lighting team."
            />

            <Link
              href="/stages"
              className="inline-flex items-center justify-center px-6 py-3.5 border border-white/30 text-white font-medium text-base rounded-[6px] hover:border-[#C9A45C] hover:text-[#C9A45C] transition-all bg-white/5 backdrop-blur-sm"
            >
              <span>Explore Stage Catalog</span>
              <svg
                className="w-5 h-5 ml-2"
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

      {/* Hero Bottom Stats Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          {companyDetails.stats.map((stat, index) => (
            <div key={index} className="space-y-1">
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#C9A45C]">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-[#6B6B6B] tracking-wider uppercase font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
