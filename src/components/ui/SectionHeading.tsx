import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  dark = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} ${className}`}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#C9A45C]/40 bg-[#C9A45C]/10 text-[#C9A45C]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]"></span>
          {badge}
        </div>
      )}

      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight mb-4 ${
          dark ? "text-white" : "text-[#111111]"
        }`}
      >
        {title}
      </h2>

      <div
        className={`w-16 h-0.5 bg-[#C9A45C] mb-4 ${
          centered ? "mx-auto" : ""
        }`}
      />

      {subtitle && (
        <p
          className={`text-base sm:text-lg font-normal leading-relaxed ${
            dark ? "text-[#E8E5DF]/80" : "text-[#6B6B6B]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
