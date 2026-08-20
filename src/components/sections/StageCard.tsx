"use client";

import React from "react";
import Image from "next/image";
import { StageDesign } from "@/data/stages";

interface StageCardProps {
  stage: StageDesign;
  onOpenModal?: (stage: StageDesign) => void;
}

export default function StageCard({ stage, onOpenModal }: StageCardProps) {
  return (
    <div
      onClick={() => onOpenModal?.(stage)}
      className="luxury-card group relative aspect-[4/3] w-full overflow-hidden bg-[#111111]/5 rounded-xl cursor-pointer shadow-sm border border-[#E8E5DF] hover:border-[#C9A45C] transition-all"
    >
      <Image
        src={stage.imageUrl}
        alt={stage.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Code overlay for identification */}
      <div className="absolute top-3 right-3 bg-[#111111]/75 backdrop-blur-sm px-2.5 py-1 text-white text-[11px] font-bold rounded">
        {stage.code}
      </div>
      {/* Hover action overlay */}
      <div className="absolute inset-0 bg-[#111111]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xs font-semibold tracking-widest uppercase backdrop-blur-[1px]">
        View Details
      </div>
    </div>
  );
}
