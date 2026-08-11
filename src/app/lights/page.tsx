"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import LightCard from "@/components/sections/LightCard";
import Modal from "@/components/ui/Modal";
import CTASection from "@/components/sections/CTASection";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { lightsData, lightCategories, LightOption } from "@/data/lights";

export default function LightsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedLight, setSelectedLight] = useState<LightOption | null>(null);

  const filteredLights = lightsData.filter((light) => {
    const matchesCategory =
      activeCategory === "All" || light.category === activeCategory;
    const matchesSearch =
      light.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      light.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      light.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-16 min-h-screen bg-[#FAF9F6]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeading
          badge="Lighting Architecture"
          title="Architectural & Stage Lighting Solutions"
          subtitle="Explore warm gold facade washes, intelligent moving heads, fairy light canopies, and grand crystal chandeliers for elevated event atmospheres."
        />

        {/* Filter Controls Bar */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-4 sm:p-6 rounded-lg border border-[#E8E5DF] shadow-sm">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {lightCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase whitespace-nowrap rounded-[6px] transition-all ${
                  activeCategory === cat
                    ? "bg-[#111111] text-[#C9A45C] border border-[#C9A45C]"
                    : "bg-[#FAF9F6] text-[#6B6B6B] hover:text-[#111111] border border-[#E8E5DF]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search light code (e.g. LGT-01)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 text-sm bg-[#FAF9F6] border border-[#E8E5DF] rounded-[6px] focus:outline-none focus:border-[#C9A45C] text-[#111111]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 text-xs text-[#6B6B6B] hover:text-[#111111]"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Light Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredLights.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLights.map((light) => (
              <LightCard
                key={light.id}
                light={light}
                onOpenModal={(lgt) => setSelectedLight(lgt)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg border border-[#E8E5DF] p-8 space-y-4">
            <p className="text-lg text-[#6B6B6B]">
              No lighting options matched your criteria &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="px-6 py-2 bg-[#C9A45C] text-[#111111] text-xs font-semibold tracking-wider uppercase rounded"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

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
                <span className="text-[#6B6B6B] block font-medium">Output</span>
                <span className="font-semibold text-[#111111]">{selectedLight.specs.output}</span>
              </div>
              <div>
                <span className="text-[#6B6B6B] block font-medium">Color Temp</span>
                <span className="font-semibold text-[#111111]">{selectedLight.specs.colorTemp}</span>
              </div>
              <div>
                <span className="text-[#6B6B6B] block font-medium">Coverage</span>
                <span className="font-semibold text-[#111111]">{selectedLight.specs.coverage}</span>
              </div>
              <div>
                <span className="text-[#6B6B6B] block font-medium">Control</span>
                <span className="font-semibold text-[#111111]">{selectedLight.specs.control}</span>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-[#E8E5DF]">
              <div className="text-xs text-[#6B6B6B]">
                Recommended Use:{" "}
                <span className="font-medium text-[#111111]">
                  {selectedLight.recommendedUse}
                </span>
              </div>
              <WhatsAppButton
                size="md"
                message={`Hi, I'm inquiring about ${selectedLight.title} (${selectedLight.code}). Please share setup details and availability.`}
                label="Enquire Lighting on WhatsApp"
              />
            </div>
          </div>
        </Modal>
      )}

      {/* Bottom WhatsApp CTA Banner */}
      <div className="mt-16">
        <CTASection
          title="Need Venue Lighting Design Support?"
          subtitle="Our lighting architects calculate power loads, DMX programming, and fixture counts tailored specifically to your venue blueprints."
        />
      </div>
    </div>
  );
}
