"use client";

import React from "react";
import Image from "next/image";
import { StageDesign } from "@/data/stages";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

interface StageCardProps {
  stage: StageDesign;
  onOpenModal?: (stage: StageDesign) => void;
}

export default function StageCard({ stage, onOpenModal }: StageCardProps) {
  const whatsappMessage = `Hi, I am interested in ${stage.title} (${stage.code}). Could you please share pricing details, availability, and customization options?`;

  return (
    <div className="luxury-card group flex flex-col h-full overflow-hidden bg-white">
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#111111]/5">
        <Image
          src={stage.imageUrl}
          alt={stage.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Category & Code Overlay Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 bg-[#111111]/85 backdrop-blur-md text-white text-[11px] font-semibold tracking-wider uppercase rounded-[4px] border border-[#C9A45C]/30">
            {stage.category}
          </span>
          <span className="px-2.5 py-1 bg-[#C9A45C] text-[#111111] text-[11px] font-bold tracking-wider rounded-[4px] shadow-sm">
            {stage.code}
          </span>
        </div>

        {/* Hover Quick View Trigger */}
        {onOpenModal && (
          <button
            onClick={() => onOpenModal(stage)}
            className="absolute inset-0 bg-[#111111]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xs font-semibold tracking-widest uppercase gap-2 backdrop-blur-[2px]"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            Inspect Design Details
          </button>
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#111111] group-hover:text-[#C9A45C] transition-colors line-clamp-1">
            {stage.title}
          </h3>
          <p className="text-xs text-[#6B6B6B] leading-relaxed line-clamp-2">
            {stage.shortDescription}
          </p>
        </div>

        {/* Stage Specs pill summary */}
        <div className="pt-3 border-t border-[#E8E5DF] text-xs text-[#171717] space-y-1.5">
          <div className="flex items-center justify-between text-[#6B6B6B]">
            <span>Dimensions:</span>
            <span className="font-medium text-[#111111]">{stage.dimensions}</span>
          </div>
          <div className="flex items-center justify-between text-[#6B6B6B]">
            <span>Setup Duration:</span>
            <span className="font-medium text-[#111111]">{stage.setupTimeHours} Hours</span>
          </div>
        </div>

        {/* Card Actions */}
        <div className="pt-2 flex items-center gap-2">
          <WhatsAppButton
            fullWidth
            size="sm"
            message={whatsappMessage}
            label="Enquire on WhatsApp"
          />
          {onOpenModal && (
            <button
              onClick={() => onOpenModal(stage)}
              className="p-2 border border-[#E8E5DF] text-[#111111] hover:border-[#C9A45C] hover:text-[#C9A45C] rounded-[6px] transition-colors"
              title="View Specs & Photos"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
