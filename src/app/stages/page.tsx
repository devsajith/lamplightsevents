"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import StageCard from "@/components/sections/StageCard";
import Modal from "@/components/ui/Modal";
import CTASection from "@/components/sections/CTASection";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { stagesData, stageCategories, StageDesign } from "@/data/stages";

export default function StagesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedStage, setSelectedStage] = useState<StageDesign | null>(null);

  const filteredStages = stagesData.filter((stage) => {
    const matchesCategory =
      activeCategory === "All" || stage.category === activeCategory;
    const matchesSearch =
      stage.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stage.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stage.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-16 min-h-screen bg-[#FAF9F6]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeading
          badge="Design Catalog"
          title="Bespoke Stage Architecture & Mandaps"
          subtitle="Discover curated stage designs engineered for luxury weddings, royal receptions, floral glasshouses, and high-profile award galas."
        />

        {/* Filter Controls Bar */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-4 sm:p-6 rounded-lg border border-[#E8E5DF] shadow-sm">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {stageCategories.map((cat) => (
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
              placeholder="Search stage code (e.g. STG-01)..."
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

      {/* Stage Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredStages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStages.map((stage) => (
              <StageCard
                key={stage.id}
                stage={stage}
                onOpenModal={(stg) => setSelectedStage(stg)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg border border-[#E8E5DF] p-8 space-y-4">
            <p className="text-lg text-[#6B6B6B]">
              No stage designs matched your criteria &ldquo;{searchQuery}&rdquo;.
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

            <div className="pt-4 flex items-center justify-between border-t border-[#E8E5DF]">
              <div className="text-xs text-[#6B6B6B]">
                Recommended Lighting:{" "}
                <span className="font-medium text-[#111111]">
                  {selectedStage.recommendedLighting}
                </span>
              </div>
              <WhatsAppButton
                size="md"
                message={`Hi, I'm inquiring about ${selectedStage.title} (${selectedStage.code}). Please share details and date availability.`}
                label="Enquire Design on WhatsApp"
              />
            </div>
          </div>
        </Modal>
      )}

      {/* Bottom WhatsApp CTA Banner */}
      <div className="mt-16">
        <CTASection
          title="Looking for a Custom Stage Concept?"
          subtitle="We specialize in bespoke architectural mandaps and customized floral stage installations engineered for your venue dimensions."
        />
      </div>
    </div>
  );
}
