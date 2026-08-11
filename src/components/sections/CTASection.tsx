import React from "react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { companyDetails } from "@/data/company";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export default function CTASection({
  title = "Ready to Transform Your Event Stage?",
  subtitle = "Speak directly with our principal stage designer on WhatsApp. Share your venue layout and event date for an immediate consultation and 3D visual concept.",
}: CTASectionProps) {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-lg bg-[#111111] text-white p-8 sm:p-12 md:p-16 overflow-hidden border border-[#C9A45C]/30 shadow-2xl">
          {/* Subtle Decorative Background Gold Lines */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#C9A45C]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-[#C9A45C]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-block px-3 py-1 bg-[#C9A45C]/20 border border-[#C9A45C]/40 text-[#C9A45C] text-xs font-semibold uppercase tracking-widest rounded-full">
              Direct Designer Consultation
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white leading-tight">
              {title}
            </h2>

            <p className="text-base sm:text-lg text-[#E8E5DF]/80 font-normal leading-relaxed">
              {subtitle}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppButton
                size="lg"
                label="Chat with Designer on WhatsApp"
                message="Hi Lamplights Events, I would like to schedule a stage & lighting consultation for my upcoming event."
              />

              <a
                href={`tel:${companyDetails.phone}`}
                className="inline-flex items-center justify-center px-6 py-3.5 border border-[#E8E5DF]/30 text-[#E8E5DF] hover:text-white hover:border-white text-base font-medium rounded-[6px] transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2 text-[#C9A45C]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Call {companyDetails.phone}</span>
              </a>
            </div>

            <p className="text-xs text-[#6B6B6B] pt-2">
              Instant responses during business hours • Turnkey production across South & Destination India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
