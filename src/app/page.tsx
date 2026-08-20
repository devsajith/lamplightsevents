"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";
import StageCard from "@/components/sections/StageCard";
import LightCard from "@/components/sections/LightCard";
import CTASection from "@/components/sections/CTASection";
import Modal from "@/components/ui/Modal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { stagesData, StageDesign } from "@/data/stages";
import { lightsData, LightOption } from "@/data/lights";
import {
  companyDetails,
  servicesList,
  trustHighlights,
  testimonialsList,
  processSteps,
} from "@/data/company";

export default function SinglePageApp() {
  // Modal states
  const [selectedStage, setSelectedStage] = useState<StageDesign | null>(null);
  const [selectedLight, setSelectedLight] = useState<LightOption | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.05 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventDate: "",
    eventType: "Wedding Mandap & Stage",
    venueCity: "",
    guestCount: "",
    message: "",
  });


  // Handle WhatsApp Contact Form Submit
  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = `Hi Lamplights Events!

Name: ${formData.name || "Not specified"}
Phone: ${formData.phone || "Not specified"}
Event Date: ${formData.eventDate || "Not specified"}
Service Required: ${formData.eventType}
Venue / City: ${formData.venueCity || "Not specified"}`;

    const url = `https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(payload)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="space-y-0 min-h-screen bg-[#FAF9F6] text-[#171717]">
      {/* 1. HERO SECTION */}
      <section id="home" className="scroll-mt-20">
        <HeroSection />
      </section>

      {/* 2. WHAT WE DO / SERVICES OVERVIEW */}
      <section id="services" className="py-20 bg-[#FFFFFF] border-b border-[#E8E5DF] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="What We Do"
            title="Our Services Made Simple"
            subtitle="Whether you are planning a grand wedding, a reception party, or an outdoor sangeet, we take care of stage decoration and event lighting from start to finish."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Card 1: Stage Decoration */}
            <div className="reveal bg-[#FAF9F6] p-8 rounded-xl border border-[#E8E5DF] hover:border-[#C9A45C] transition-all space-y-4 shadow-sm group">
              <div className="w-12 h-12 rounded-lg bg-white border border-[#E8E5DF] flex items-center justify-center text-2xl group-hover:scale-105 transition-transform">
                💐
              </div>
              <h3 className="font-serif text-2xl text-[#111111] font-medium">
                Stage & Mandap Decoration
              </h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                Custom wedding mandaps, reception backdrops, floral arches, entrance gates, and stage sofas designed to fit your venue perfectly.
              </p>
              <ul className="pt-2 space-y-2 text-xs text-[#171717]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                  <span>Fresh & Exotic Flower Backdrops</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                  <span>Traditional Royal Mandaps & Pillars</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                  <span>Modern Geometric & Glasshouse Stages</span>
                </li>
              </ul>
              <div className="pt-2">
                <a
                  href="#stages"
                  className="text-xs font-semibold text-[#C9A45C] hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Stage Catalog ({stagesData.length} Designs)</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>

            {/* Card 2: Event Lighting */}
            <div className="reveal delay-100 bg-[#FAF9F6] p-8 rounded-xl border border-[#E8E5DF] hover:border-[#C9A45C] transition-all space-y-4 shadow-sm group">
              <div className="w-12 h-12 rounded-lg bg-white border border-[#E8E5DF] flex items-center justify-center text-2xl group-hover:scale-105 transition-transform">
                💡
              </div>
              <h3 className="font-serif text-2xl text-[#111111] font-medium">
                Professional Event Lighting
              </h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                Transform halls and lawn venues with warm golden ambient lights, fairy light ceilings, stage spotlights, and crystal chandeliers.
              </p>
              <ul className="pt-2 space-y-2 text-xs text-[#171717]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                  <span>Warm Golden Venue Uplighters</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                  <span>Starry Night Fairy Light Canopies</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                  <span>Stage Moving Head Spotlights & Beams</span>
                </li>
              </ul>
              <div className="pt-2">
                <a
                  href="#lights"
                  className="text-xs font-semibold text-[#C9A45C] hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Lighting Options ({lightsData.length} Options)</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>

            {/* Card 3: Complete Turnkey Setup */}
            <div className="reveal delay-200 bg-[#FAF9F6] p-8 rounded-xl border border-[#E8E5DF] hover:border-[#C9A45C] transition-all space-y-4 shadow-sm group">
              <div className="w-12 h-12 rounded-lg bg-white border border-[#E8E5DF] flex items-center justify-center text-2xl group-hover:scale-105 transition-transform">
                🛠️
              </div>
              <h3 className="font-serif text-2xl text-[#111111] font-medium">
                Full Setup & Support
              </h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                Our team handles transport, structural setup, wiring, live lighting control during your event, and hassle-free cleanup afterward.
              </p>
              <ul className="pt-2 space-y-2 text-xs text-[#171717]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                  <span>Certified Heavy-Duty Stage Rigging</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                  <span>On-Site Lighting Technicians</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                  <span>Quick Post-Event Dismantling</span>
                </li>
              </ul>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="text-xs font-semibold text-[#C9A45C] hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Get Quick Quote & Contact</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STAGE DESIGN CATALOG SECTION */}
      <section id="stages" className="py-20 bg-[#FAF9F6] border-b border-[#E8E5DF] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Stage Catalog"
            title="Stage & Mandap Designs"
            subtitle="Browse our collection of wedding mandaps, reception backdrops, and floral stage setups."
          />

          {/* Stage Grid */}
          <div className="reveal mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stagesData.map((stage) => (
                <StageCard
                  key={stage.id}
                  stage={stage}
                  onOpenModal={(stg) => setSelectedStage(stg)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. EVENT LIGHTING CATALOG SECTION */}
      <section id="lights" className="py-20 bg-[#FFFFFF] border-b border-[#E8E5DF] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Lighting Catalog"
            title="Event Lighting Options"
            subtitle="Explore warm ambient lights, stage spotlights, fairy light canopies, and crystal chandeliers."
          />

          {/* Lighting Grid */}
          <div className="reveal mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {lightsData.map((light) => (
                <LightCard
                  key={light.id}
                  light={light}
                  onOpenModal={(lgt) => setSelectedLight(lgt)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. ABOUT US & PROCESS SECTION */}
      <section id="about" className="py-20 bg-[#FAF9F6] border-b border-[#E8E5DF] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            badge="About Us"
            title="Over a Decade of Stage Craftsmanship"
            subtitle="We design and set up custom wedding stages, mandaps, floral backdrops, and professional event lights across Kerala."
          />

          {/* Story Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 sm:p-12 rounded-xl border border-[#E8E5DF] shadow-sm">
            <div className="reveal space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A45C]">
                Based in Adimali, Idukki
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#111111] font-medium leading-tight">
                Crafting spatial memories illuminated in warm golden light.
              </h3>
              <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed">
                {companyDetails.name} began with a simple goal: to make stage decoration and event lighting seamless, safe, and breathtaking for every wedding and celebration in the high-range region.
              </p>
              <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed">
                Whether designing a traditional floral mandap, a rustic outdoor lawn stage in Munnar, or warm ambient fairy light canopies for estate resort weddings across Idukki and Kerala, our master craftsmen and lighting technicians ensure complete peace of mind.
              </p>

            </div>

            <div className="reveal delay-200 relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-[#C9A45C]/30 shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
                alt="Lamplights Events Stage Craftsmanship"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>


      {/* 7. CONTACT & FAQ SECTION */}
      <section id="contact" className="py-20 bg-[#FAF9F6] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            badge="Get In Touch"
            title="Contact Us for Booking & Price Quotes"
            subtitle="Fill in your event details below to send us an instant WhatsApp message, or call us directly."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Column */}
            <div className="reveal lg:col-span-7 bg-white p-8 sm:p-10 rounded-xl border border-[#E8E5DF] shadow-sm space-y-6">
              <div className="border-b border-[#E8E5DF] pb-4">
                <h3 className="font-serif text-2xl font-medium text-[#111111]">
                  Send Inquiry on WhatsApp
                </h3>
                <p className="text-xs text-[#6B6B6B] mt-1">
                  Enter your event details to generate a pre-formatted WhatsApp message instantly.
                </p>
              </div>

              <form onSubmit={handleSubmitWhatsApp} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#111111] uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 text-sm bg-[#FAF9F6] border border-[#E8E5DF] rounded-[6px] focus:outline-none focus:border-[#C9A45C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#111111] uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-2.5 text-sm bg-[#FAF9F6] border border-[#E8E5DF] rounded-[6px] focus:outline-none focus:border-[#C9A45C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#111111] uppercase tracking-wider mb-1">
                      Event Date
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) =>
                        setFormData({ ...formData, eventDate: e.target.value })
                      }
                      className="w-full px-4 py-2.5 text-sm bg-[#FAF9F6] border border-[#E8E5DF] rounded-[6px] focus:outline-none focus:border-[#C9A45C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#111111] uppercase tracking-wider mb-1">
                      Service Needed
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) =>
                        setFormData({ ...formData, eventType: e.target.value })
                      }
                      className="w-full px-4 py-2.5 text-sm bg-[#FAF9F6] border border-[#E8E5DF] rounded-[6px] focus:outline-none focus:border-[#C9A45C]"
                    >
                      <option>Wedding Stage & Mandap</option>
                      <option>Reception Stage Backdrop</option>
                      <option>Event & Ambient Lighting</option>
                      <option>Stage Spotlights & Rigging</option>
                      <option>Full Stage & Lighting Package</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#111111] uppercase tracking-wider mb-1">
                    Venue Location / City
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Leela Palace, Bengaluru"
                    value={formData.venueCity}
                    onChange={(e) =>
                      setFormData({ ...formData, venueCity: e.target.value })
                    }
                    className="w-full px-4 py-2.5 text-sm bg-[#FAF9F6] border border-[#E8E5DF] rounded-[6px] focus:outline-none focus:border-[#C9A45C]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-medium text-base rounded-[6px] transition-all flex items-center justify-center space-x-2 shadow"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.762.459 3.48 1.332 5.001L2 22l5.148-1.348c1.472.802 3.134 1.222 4.86 1.224h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.668-1.039-5.176-2.925-7.062A9.923 9.923 0 0 0 12.012 2zm5.82 14.286c-.244.688-1.42 1.314-1.96 1.37-.502.053-1.15.074-1.85-.15-.434-.138-1-.322-1.742-.644-3.072-1.333-5.074-4.46-5.228-4.664-.153-.205-1.254-1.67-1.254-3.18 0-1.51.79-2.253 1.07-2.54.28-.288.612-.36.816-.36.204 0 .408.002.586.01.19.008.444-.072.695.53.255.612.868 2.116.944 2.27.077.153.128.332.026.536-.102.204-.153.332-.306.51-.153.18-.32.404-.457.542-.153.153-.312.32-.134.626.178.306.79 1.305 1.696 2.112 1.164 1.038 2.146 1.36 2.452 1.513.306.153.485.128.664-.076.178-.204.765-.893.97-1.199.204-.306.408-.255.688-.153.28.102 1.785.842 2.091.995.306.153.51.23.586.357.077.128.077.74-.167 1.428z" />
                  </svg>
                  <span>Send Request Directly to WhatsApp</span>
                </button>
              </form>
            </div>

            {/* Information Column */}
            <div className="reveal delay-200 lg:col-span-5 space-y-6">
              <div className="bg-[#111111] text-white p-8 rounded-xl border border-[#C9A45C]/30 space-y-6 shadow-md">
                <h4 className="font-serif text-2xl font-medium border-b border-white/10 pb-3">
                  Direct Contact Info
                </h4>

                <div className="space-y-4 text-sm text-[#E8E5DF]">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#C9A45C] font-semibold">
                      Main Office & Studio
                    </p>
                    <p className="mt-1 font-medium">{companyDetails.address}</p>
                    <p className="text-xs text-[#A1A1AA]">{companyDetails.cityState}</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#C9A45C] font-semibold">
                      Phone & WhatsApp
                    </p>
                    <p className="mt-1 font-medium">{companyDetails.phone}</p>
                  </div>

                </div>

                <div className="pt-2">
                  <WhatsAppButton
                    fullWidth
                    size="md"
                    label="Chat Live on WhatsApp"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 8. CTA BANNER SECTION */}
      <section id="cta" className="scroll-mt-20">
        <CTASection />
      </section>

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
                Key Highlights:
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

            <div className="pt-2 flex items-center justify-between border-t border-[#E8E5DF]">
              <div className="text-xs text-[#6B6B6B]">
                Recommended Lighting:{" "}
                <span className="font-medium text-[#111111]">
                  {selectedStage.recommendedLighting}
                </span>
              </div>
              <WhatsAppButton
                size="md"
                message={`Hi, I'm inspecting ${selectedStage.title} (${selectedStage.code}). Please share availability and customized quotation for my venue.`}
                label="Enquire Design on WhatsApp"
              />
            </div>
          </div>
        </Modal>
      )}

      {/* Light Detail Lightbox Modal */}
      {selectedLight && (
        <Modal
          isOpen={!!selectedLight}
          onClose={() => setSelectedLight(null)}
          title={`${selectedLight.title} (${selectedLight.code})`}
        >
          <div className="space-y-6">
            <div className="relative aspect-[16/9] w-full rounded-md overflow-hidden bg-[#111111]">
              <img
                src={selectedLight.imageUrl}
                alt={selectedLight.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#C9A45C] text-[#111111] text-xs font-bold uppercase rounded">
                  {selectedLight.category}
                </span>
                <span className="text-xs text-[#6B6B6B]">
                  Power: {selectedLight.powerRequirements}
                </span>
              </div>
              <p className="text-sm text-[#171717] leading-relaxed">
                {selectedLight.description}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#FAF9F6] p-4 rounded-md border border-[#E8E5DF] text-xs">
              <div>
                <span className="text-[#6B6B6B] block">Light Output</span>
                <span className="font-semibold text-[#111111]">
                  {selectedLight.specs.output}
                </span>
              </div>
              <div>
                <span className="text-[#6B6B6B] block">Color Temp</span>
                <span className="font-semibold text-[#111111]">
                  {selectedLight.specs.colorTemp}
                </span>
              </div>
              <div>
                <span className="text-[#6B6B6B] block">Coverage</span>
                <span className="font-semibold text-[#111111]">
                  {selectedLight.specs.coverage}
                </span>
              </div>
              <div>
                <span className="text-[#6B6B6B] block">Control</span>
                <span className="font-semibold text-[#111111]">
                  {selectedLight.specs.control}
                </span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-[#E8E5DF]">
              <div className="text-xs text-[#6B6B6B]">
                Recommended Use:{" "}
                <span className="font-medium text-[#111111]">
                  {selectedLight.recommendedUse}
                </span>
              </div>
              <WhatsAppButton
                size="md"
                message={`Hi, I'm inquiring about ${selectedLight.title} (${selectedLight.code}). Could you please share specs & setup details?`}
                label="Enquire Lighting on WhatsApp"
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
