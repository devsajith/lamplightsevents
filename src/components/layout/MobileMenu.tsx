"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { companyDetails } from "@/data/company";

interface NavLink {
  name: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
  currentPath: string;
}

export default function MobileMenu({
  isOpen,
  onClose,
  navLinks,
  currentPath,
}: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden bg-[#111111]/95 backdrop-blur-lg flex flex-col justify-between pt-24 pb-8 px-6 transition-all duration-300 animate-fadeIn">
      {/* Top Close Row */}
      <div className="absolute top-5 right-5">
        <button
          onClick={onClose}
          className="p-2 text-white hover:text-[#C9A45C] focus:outline-none"
          aria-label="Close Navigation Menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Navigation List */}
      <div className="flex flex-col space-y-6 my-auto">
        <div className="text-xs uppercase tracking-widest text-[#C9A45C] font-semibold mb-2">
          Navigation
        </div>
        {navLinks.map((link) => {
          return (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                onClose();
                if (link.href.startsWith("#")) {
                  e.preventDefault();
                  const targetId = link.href.replace("#", "");
                  const element = document.getElementById(targetId);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
              className="font-serif text-2xl tracking-wide transition-colors text-white/90 hover:text-[#C9A45C] cursor-pointer"
            >
              {link.name}
            </a>
          );
        })}
      </div>

      {/* Bottom Actions & Contact Info */}
      <div className="border-t border-[#E8E5DF]/10 pt-6 space-y-4">
        <WhatsAppButton
          fullWidth
          size="lg"
          label="Direct WhatsApp Consultation"
        />

        <div className="text-center text-xs text-[#6B6B6B] space-y-1">
          <p>{companyDetails.phone}</p>
          <p>{companyDetails.cityState}</p>
        </div>
      </div>
    </div>
  );
}
