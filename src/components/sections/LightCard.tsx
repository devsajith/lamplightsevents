"use client";

import React from "react";
import Image from "next/image";
import { LightOption } from "@/data/lights";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

interface LightCardProps {
  light: LightOption;
  onOpenModal?: (light: LightOption) => void;
}

export default function LightCard({ light, onOpenModal }: LightCardProps) {
  const whatsappMessage = `Hi, I am interested in ${light.title} (${light.code}). Could you please share rental/installation details and setup availability?`;

  return (
    <div className="luxury-card group flex flex-col h-full overflow-hidden bg-white">
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#111111]/5">
        <Image
          src={light.imageUrl}
          alt={light.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Category & Code Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 bg-[#111111]/85 backdrop-blur-md text-white text-[11px] font-semibold tracking-wider uppercase rounded-[4px] border border-[#C9A45C]/30">
            {light.category}
          </span>
          <span className="px-2.5 py-1 bg-[#C9A45C] text-[#111111] text-[11px] font-bold tracking-wider rounded-[4px] shadow-sm">
            {light.code}
          </span>
        </div>

        {/* Hover Quick View Trigger */}
        {onOpenModal && (
          <button
            onClick={() => onOpenModal(light)}
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
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Inspect Technical Specs
          </button>
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#111111] group-hover:text-[#C9A45C] transition-colors line-clamp-1">
            {light.title}
          </h3>
          <p className="text-xs text-[#6B6B6B] leading-relaxed line-clamp-2">
            {light.shortDescription}
          </p>
        </div>

        {/* Key Technical Specs summary */}
        <div className="pt-3 border-t border-[#E8E5DF] text-xs text-[#171717] grid grid-cols-2 gap-2 bg-[#FAF9F6] p-2.5 rounded-[4px]">
          <div>
            <span className="text-[#6B6B6B] block text-[10px] uppercase">Light Output</span>
            <span className="font-medium text-[#111111] line-clamp-1">{light.specs.output}</span>
          </div>
          <div>
            <span className="text-[#6B6B6B] block text-[10px] uppercase">Color Temp</span>
            <span className="font-medium text-[#111111] line-clamp-1">{light.specs.colorTemp}</span>
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
              onClick={() => onOpenModal(light)}
              className="p-2 border border-[#E8E5DF] text-[#111111] hover:border-[#C9A45C] hover:text-[#C9A45C] rounded-[6px] transition-colors"
              title="View Specs & Details"
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
