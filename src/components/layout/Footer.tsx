import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyDetails } from "@/data/company";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white border-t border-[#C9A45C]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-3 mb-2">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#C9A45C]/60 bg-white flex items-center justify-center group-hover:border-[#C9A45C] transition-all shadow-sm flex-shrink-0">
                  <Image
                    src="/logo.jpg"
                    alt="Lamplights Events Logo"
                    fill
                    className="object-cover scale-105"
                  />
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
              Quick Navigation
            </h4>
            <ul className="space-y-3 text-sm text-[#6B6B6B]">
              <li>
                <a
                  href="#home"
                  className="hover:text-[#C9A45C] transition-colors inline-block cursor-pointer"
                >
                  Home Top
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#C9A45C] transition-colors inline-block cursor-pointer"
                >
                  What We Do
                </a>
              </li>
              <li>
                <a
                  href="#stages"
                  className="hover:text-[#C9A45C] transition-colors inline-block cursor-pointer"
                >
                  Stage Design Catalog
                </a>
              </li>
              <li>
                <a
                  href="#lights"
                  className="hover:text-[#C9A45C] transition-colors inline-block cursor-pointer"
                >
                  Event Lighting Catalog
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[#C9A45C] transition-colors inline-block cursor-pointer"
                >
                  About Our Craftsmanship
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#C9A45C] transition-colors inline-block cursor-pointer"
                >
                  Contact & Booking
                </a>
              </li>
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
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="border-t border-[#E8E5DF]/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B6B6B] gap-4">
          <p>© {new Date().getFullYear()} {companyDetails.name}. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span>Luxury Stage Decoration</span>
            <span>Architectural Lighting</span>
            <span>Idukki & Kerala</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
