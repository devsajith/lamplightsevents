import React from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { companyDetails, processSteps, trustHighlights } from "@/data/company";

export default function AboutPage() {
  return (
    <div className="pt-28 pb-16 min-h-screen bg-[#FAF9F6]">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <SectionHeading
          badge="Our Craftsmanship"
          title="The Story Behind Lamplights Events"
          subtitle="Dedicated to crafting grand stage installations and luminous architectural ambiance for over a decade."
        />
      </div>

      {/* Main Narrative & Imagery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 sm:p-12 rounded-lg border border-[#E8E5DF] shadow-sm">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A45C]">
              Founded on Precision & Passion
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#111111] font-normal leading-tight">
              &ldquo;We don&apos;t just decorate stages; we craft spatial memories illuminated in golden light.&rdquo;
            </h3>
            <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed">
              Established in 2014, {companyDetails.name} began with a singular vision: to elevate traditional event stage decoration into fine structural architecture and atmospheric lighting design.
            </p>
            <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed">
              Whether designing a hand-carved golden mandap for a royal heritage wedding in Mysuru, a floating poolside sangeet stage in Goa, or an intelligent DMX light show for a corporate gala in Bengaluru, our master craftsmen and certified lighting technicians bring unmatched detail to every square foot.
            </p>

            <div className="pt-4 flex items-center gap-6 border-t border-[#E8E5DF]">
              <div>
                <p className="font-serif text-3xl font-bold text-[#C9A45C]">500+</p>
                <p className="text-xs text-[#6B6B6B] uppercase">Bespoke Events</p>
              </div>
              <div className="w-px h-10 bg-[#E8E5DF]" />
              <div>
                <p className="font-serif text-3xl font-bold text-[#C9A45C]">12+</p>
                <p className="text-xs text-[#6B6B6B] uppercase">Years Experience</p>
              </div>
              <div className="w-px h-10 bg-[#E8E5DF]" />
              <div>
                <p className="font-serif text-3xl font-bold text-[#C9A45C]">100%</p>
                <p className="text-xs text-[#6B6B6B] uppercase">On-Time Setup</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden border border-[#C9A45C]/30 shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
              alt="Lamplights Events Stage Craftsmanship"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our 4-Step Turnkey Process */}
      <section className="bg-white py-20 border-y border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Turnkey Execution"
            title="Our Seamless 4-Step Process"
            subtitle="From initial 3D visualization to flawless live event management."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="bg-[#FAF9F6] p-6 rounded-lg border border-[#E8E5DF] space-y-4 hover:border-[#C9A45C] transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-[#111111] text-[#C9A45C] font-serif text-lg font-bold flex items-center justify-center">
                  {step.number}
                </div>
                <h4 className="font-serif text-xl font-normal text-[#111111]">
                  {step.title}
                </h4>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Strengths */}
      <section className="py-20 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Quality Assurance"
            title="Uncompromising Standards"
            subtitle="Why luxury wedding planners and venue managers partner with Lamplights Events."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {trustHighlights.map((trust, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg border border-[#E8E5DF] space-y-3 shadow-sm hover:border-[#C9A45C] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#C9A45C]/10 text-[#C9A45C] flex items-center justify-center font-bold text-sm">
                    ✓
                  </div>
                  <h4 className="font-serif text-xl text-[#111111] font-normal">
                    {trust.title}
                  </h4>
                </div>
                <p className="text-sm text-[#6B6B6B] leading-relaxed pl-11">
                  {trust.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <CTASection
        title="Schedule a Design Consultation"
        subtitle="Speak directly with our principal stage architect. Send your venue photos and event details for an immediate concept review."
      />
    </div>
  );
}
