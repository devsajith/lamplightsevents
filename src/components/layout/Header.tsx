"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "services", "stages", "lights", "about", "contact"];
      const scrollPos = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "What We Do", href: "#services", id: "services" },
    { name: "Stage Designs", href: "#stages", id: "stages" },
    { name: "Event Lighting", href: "#lights", id: "lights" },
    { name: "About Us", href: "#about", id: "about" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#111111]/95 backdrop-blur-md shadow-md py-3.5 border-b border-[#C9A45C]/20"
            : "bg-[#111111] py-5 border-b border-[#E8E5DF]/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group flex items-center gap-3 cursor-pointer"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#C9A45C]/60 bg-white flex items-center justify-center group-hover:border-[#C9A45C] transition-all shadow-sm flex-shrink-0">
              <Image
                src="/logo.jpg"
                alt="Lamplights Events Logo"
                fill
                className="object-cover scale-105"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-white uppercase">
                LAMPLIGHTS
              </span>
              <span className="text-[10px] tracking-[0.25em] font-medium text-[#C9A45C] uppercase -mt-1">
                EVENTS & LIGHTING
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium tracking-wide transition-colors relative py-1 cursor-pointer ${
                    isActive
                      ? "text-[#C9A45C]"
                      : "text-[#FAF9F6]/80 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9A45C] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

        </div>
      </header>
    </>
  );
}
