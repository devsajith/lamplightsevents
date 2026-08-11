import React from "react";
import Link from "next/link";
import { companyDetails } from "@/data/company";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white border-t border-[#C9A45C]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded border border-[#C9A45C] flex items-center justify-center bg-[#C9A45C]/10 text-[#C9A45C]">
                  <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <span className="font-serif text-2xl font-bold tracking-widest uppercase">
                  LAMPLIGHTS
                </span>
              </div>
              <p className="text-xs text-[#C9A45C] tracking-[0.2em] font-medium uppercase">
                EVENTS & LIGHTING
              </p>
            </Link>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">
              Bespoke event stage decoration, luxury mandap architectures, and architectural event lighting designed to turn your wedding or gala into an unforgettable celebration.
            </p>
            <div className="pt-2">
              <WhatsAppButton size="sm" label="Chat with Designer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-6 tracking-wide border-b border-[#C9A45C]/30 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-[#6B6B6B]">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#C9A45C] transition-colors inline-block"
                >
                  Home Page
                </Link>
              </li>
              <li>
                <Link
                  href="/stages"
                  className="hover:text-[#C9A45C] transition-colors inline-block"
                >
                  Stage Design Catalog
                </Link>
              </li>
              <li>
                <Link
                  href="/lights"
                  className="hover:text-[#C9A45C] transition-colors inline-block"
                >
                  Event Lighting Catalog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#C9A45C] transition-colors inline-block"
                >
                  About Our Craftsmanship
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#C9A45C] transition-colors inline-block"
                >
                  Contact & Bookings
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-6 tracking-wide border-b border-[#C9A45C]/30 pb-2 inline-block">
              Service Regions
            </h4>
            <ul className="space-y-2.5 text-sm text-[#6B6B6B]">
              {companyDetails.serviceAreas.map((area, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-6 tracking-wide border-b border-[#C9A45C]/30 pb-2 inline-block">
              Direct Contact
            </h4>
            <ul className="space-y-4 text-sm text-[#6B6B6B]">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[#C9A45C] flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  {companyDetails.address}, {companyDetails.cityState}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-[#C9A45C] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h32a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href={`tel:${companyDetails.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {companyDetails.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-[#C9A45C] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href={`mailto:${companyDetails.email}`}
                  className="hover:text-white transition-colors"
                >
                  {companyDetails.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="border-t border-[#E8E5DF]/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B6B6B] gap-4">
          <p>© {new Date().getFullYear()} {companyDetails.name}. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span>Luxury Stage Decoration</span>
            <span>Architectural Lighting</span>
            <span>Goa & Pan-India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
