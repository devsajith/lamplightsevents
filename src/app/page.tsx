"use client";

import React, { useState } from "react";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";
import StageCard from "@/components/sections/StageCard";
import LightCard from "@/components/sections/LightCard";
import CTASection from "@/components/sections/CTASection";
import Modal from "@/components/ui/Modal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { stagesData, StageDesign } from "@/data/stages";
import { lightsData, LightOption } from "@/data/lights";
import { servicesList, trustHighlights, testimonialsList } from "@/data/company";

export default function HomePage() {
  const [selectedStage, setSelectedStage] = useState<StageDesign | null>(null);
  const [selectedLight, setSelectedLight] = useState<LightOption | null>(null);

  const featuredStages = stagesData.filter((s) => s.featured).slice(0, 3);
  const featuredLights = lightsData.filter((l) => l.featured).slice(0, 3);

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Featured Stage Designs Section */}
      <section className="py-20 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Curated Showcase"
            title="Featured Stage Architecture"
            subtitle="Explore our most celebrated wedding mandaps, reception backdrops, and floral stage setups."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredStages.map((stage) => (
              <StageCard
                key={stage.id}
                stage={stage}
                onOpenModal={(stg) => setSelectedStage(stg)}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/stages"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-[#111111] text-[#111111] font-medium text-sm rounded-[6px] hover:bg-[#111111] hover:text-white transition-all group"
            >
              <span>View All Stage Designs ({stagesData.length})</span>
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Featured Lighting Section */}
      <section className="py-20 bg-[#FFFFFF] border-y border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Atmospheric Artistry"
            title="Signature Event Lighting"
            subtitle="From warm gold architectural washes to intelligent stage moving profiles and luxury chandeliers."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredLights.map((light) => (
              <LightCard
                key={light.id}
                light={light}
                onOpenModal={(lgt) => setSelectedLight(lgt)}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/lights"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-[#111111] text-[#111111] font-medium text-sm rounded-[6px] hover:bg-[#111111] hover:text-white transition-all group"
            >
              <span>View All Lighting Options ({lightsData.length})</span>
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Services Overview Section */}
      <section className="py-20 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Full-Scale Production"
            title="Our Core Specializations"
            subtitle="Turnkey design, fabrication, rigging, and lighting engineering under one master production team."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {servicesList.map((service) => (
              <div
                key={service.id}
                className="bg-white p-8 rounded-lg border border-[#E8E5DF] hover:border-[#C9A45C] transition-all space-y-4 shadow-sm"
              >
                <div className="w-12 h-12 rounded-md bg-[#FAF9F6] border border-[#C9A45C]/40 flex items-center justify-center text-[#C9A45C]">
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-[#111111] font-normal">
                  {service.title}
                </h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  {service.fullDesc}
                </p>

                <ul className="pt-2 space-y-2 text-xs text-[#171717]">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                      <span className="font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section className="py-20 bg-[#111111] text-white border-y border-[#C9A45C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            dark
            badge="The Lamplights Standard"
            title="Why Discerning Hosts Trust Us"
            subtitle="Built on structural safety, design originality, and zero-compromise live technical support."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {trustHighlights.map((trust, idx) => (
              <div
                key={idx}
                className="bg-[#171717] p-6 rounded-lg border border-white/10 hover:border-[#C9A45C] transition-colors space-y-3"
              >
                <div className="text-[#C9A45C] font-serif text-3xl font-bold">
                  0{idx + 1}
                </div>
                <h4 className="font-serif text-lg font-normal text-white">
                  {trust.title}
                </h4>
                <p className="text-xs text-[#E8E5DF]/70 leading-relaxed">
                  {trust.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section className="py-20 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Client Voices"
            title="Stories of Unforgettable Nights"
            subtitle="Hear how our stage decoration and lighting transformed high-profile celebrations."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonialsList.map((item) => (
              <div
                key={item.id}
                className="bg-white p-8 rounded-lg border border-[#E8E5DF] flex flex-col justify-between space-y-6 shadow-sm"
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-[#C9A45C]">
                    {[...Array(item.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-[#171717] italic leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="border-t border-[#E8E5DF] pt-4">
                  <p className="font-serif text-base font-medium text-[#111111]">
                    {item.clientName}
                  </p>
                  <p className="text-xs text-[#6B6B6B]">{item.eventTitle}</p>
                  <p className="text-[11px] text-[#C9A45C] font-medium mt-0.5">
                    {item.venue}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WhatsApp CTA Section */}
      <CTASection />

      {/* Stage Detail Lightbox Modal */}
      {selectedStage && (
        <Modal
          isOpen={!!selectedStage}
          onClose={() => setSelectedStage(null)}
          title={`${selectedStage.title} (${selectedStage.code})`}
        >
          <div className="space-y-6">
            <div className="relative aspect-[16/9] w-full rounded-md overflow-hidden bg-[#111111]">
              <img
                src={selectedStage.imageUrl}
                alt={selectedStage.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#C9A45C] text-[#111111] text-xs font-bold uppercase rounded">
                  {selectedStage.category}
                </span>
                <span className="text-xs text-[#6B6B6B]">
                  Dimensions: {selectedStage.dimensions}
                </span>
              </div>
              <p className="text-sm text-[#171717] leading-relaxed">
                {selectedStage.description}
              </p>
            </div>

            <div className="bg-[#FAF9F6] p-4 rounded-md border border-[#E8E5DF] space-y-2">
              <h4 className="font-serif text-sm font-semibold text-[#111111]">
                Key Architectural Highlights:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#6B6B6B]">
                {selectedStage.keyHighlights.map((hl, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-[#E8E5DF]">
              <div className="text-xs text-[#6B6B6B]">
                Recommended Lighting:{" "}
                <span className="font-medium text-[#111111]">
                  {selectedStage.recommendedLighting}
                </span>
              </div>
              <WhatsAppButton
                size="md"
                message={`Hi, I'm inspecting ${selectedStage.title} (${selectedStage.code}). Please share availability and customized quotation for my venue.`}
                label="Enquire Design on WhatsApp"
              />
            </div>
          </div>
        </Modal>
      )}

      {/* Light Detail Lightbox Modal */}
      {selectedLight && (
        <Modal
          isOpen={!!selectedLight}
          onClose={() => setSelectedLight(null)}
          title={`${selectedLight.title} (${selectedLight.code})`}
        >
          <div className="space-y-6">
            <div className="relative aspect-[16/9] w-full rounded-md overflow-hidden bg-[#111111]">
              <img
                src={selectedLight.imageUrl}
                alt={selectedLight.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#C9A45C] text-[#111111] text-xs font-bold uppercase rounded">
                  {selectedLight.category}
                </span>
                <span className="text-xs text-[#6B6B6B]">
                  Power: {selectedLight.powerRequirements}
                </span>
              </div>
              <p className="text-sm text-[#171717] leading-relaxed">
                {selectedLight.description}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#FAF9F6] p-4 rounded-md border border-[#E8E5DF] text-xs">
              <div>
                <span className="text-[#6B6B6B] block">Light Output</span>
                <span className="font-semibold text-[#111111]">{selectedLight.specs.output}</span>
              </div>
              <div>
                <span className="text-[#6B6B6B] block">Color Temp</span>
                <span className="font-semibold text-[#111111]">{selectedLight.specs.colorTemp}</span>
              </div>
              <div>
                <span className="text-[#6B6B6B] block">Coverage</span>
                <span className="font-semibold text-[#111111]">{selectedLight.specs.coverage}</span>
              </div>
              <div>
                <span className="text-[#6B6B6B] block">Control</span>
                <span className="font-semibold text-[#111111]">{selectedLight.specs.control}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-[#E8E5DF]">
              <div className="text-xs text-[#6B6B6B]">
                Recommended Use:{" "}
                <span className="font-medium text-[#111111]">
                  {selectedLight.recommendedUse}
                </span>
              </div>
              <WhatsAppButton
                size="md"
                message={`Hi, I'm inquiring about ${selectedLight.title} (${selectedLight.code}). Could you please share specs & setup details?`}
                label="Enquire Lighting on WhatsApp"
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
