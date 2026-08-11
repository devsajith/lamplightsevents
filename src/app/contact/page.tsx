"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { companyDetails, faqList } from "@/data/company";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventDate: "",
    eventType: "Wedding Mandap & Stage",
    venueCity: "",
    guestCount: "",
    message: "",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = `Hi Lamplights Events!

Name: ${formData.name || "Not specified"}
Phone: ${formData.phone || "Not specified"}
Event Date: ${formData.eventDate || "Not specified"}
Service Required: ${formData.eventType}
Venue / City: ${formData.venueCity || "Not specified"}
Estimated Guests: ${formData.guestCount || "Not specified"}

Message: ${formData.message || "I would like to request availability and a design consultation."}`;

    const url = `https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(payload)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="pt-28 pb-16 min-h-screen bg-[#FAF9F6]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <SectionHeading
          badge="Direct Inquiry"
          title="Contact Our Design Studio"
          subtitle="Whether you're planning an intimate luxury wedding or a grand award ceremony, our team is ready to discuss your stage & lighting vision."
        />
      </div>

      {/* Main Grid: Form + Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Interactive Form (8 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-lg border border-[#E8E5DF] shadow-sm space-y-6">
            <div className="border-b border-[#E8E5DF] pb-4">
              <h3 className="font-serif text-2xl font-normal text-[#111111]">
                Send an Inquiry Payload to WhatsApp
              </h3>
              <p className="text-xs text-[#6B6B6B] mt-1">
                Fill in your event details below to instantly trigger a pre-formatted WhatsApp consultation request.
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
                    Phone / Mobile *
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
                    Service Required
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) =>
                      setFormData({ ...formData, eventType: e.target.value })
                    }
                    className="w-full px-4 py-2.5 text-sm bg-[#FAF9F6] border border-[#E8E5DF] rounded-[6px] focus:outline-none focus:border-[#C9A45C]"
                  >
                    <option>Wedding Mandap & Stage</option>
                    <option>Reception Stage Architecture</option>
                    <option>Architectural & Ambient Lighting</option>
                    <option>Intelligent Stage Lighting & Rigging</option>
                    <option>Full Turnkey Stage & Lighting Package</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                <div>
                  <label className="block text-xs font-semibold text-[#111111] uppercase tracking-wider mb-1">
                    Estimated Guests
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 500 Guests"
                    value={formData.guestCount}
                    onChange={(e) =>
                      setFormData({ ...formData, guestCount: e.target.value })
                    }
                    className="w-full px-4 py-2.5 text-sm bg-[#FAF9F6] border border-[#E8E5DF] rounded-[6px] focus:outline-none focus:border-[#C9A45C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#111111] uppercase tracking-wider mb-1">
                  Additional Design Requirements / Notes
                </label>
                <textarea
                  rows={4}
                  placeholder="Share details about your desired stage dimensions, color theme, floral preferences, or lighting requirements..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
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
                <span>Send Inquiry Directly via WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Right Column: Contact Metadata & Service Areas (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-[#111111] text-white p-8 rounded-lg border border-[#C9A45C]/30 space-y-6 shadow-md">
              <h4 className="font-serif text-2xl font-normal border-b border-white/10 pb-3">
                Studio Information
              </h4>

              <div className="space-y-4 text-sm text-[#E8E5DF]">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#C9A45C] font-semibold">
                    Studio Location
                  </p>
                  <p className="mt-1 font-medium">{companyDetails.address}</p>
                  <p className="text-xs text-[#6B6B6B]">{companyDetails.cityState}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-[#C9A45C] font-semibold">
                    Direct Phone & WhatsApp
                  </p>
                  <p className="mt-1 font-medium">{companyDetails.phone}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-[#C9A45C] font-semibold">
                    Email Inquiry
                  </p>
                  <p className="mt-1 font-medium">{companyDetails.email}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-[#C9A45C] font-semibold">
                    Studio Working Hours
                  </p>
                  <p className="mt-1 text-xs text-[#6B6B6B]">
                    {companyDetails.operatingHours}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <WhatsAppButton
                  fullWidth
                  size="md"
                  label="Instant WhatsApp Call / Chat"
                />
              </div>
            </div>

            {/* Service Coverage Card */}
            <div className="bg-white p-6 rounded-lg border border-[#E8E5DF] space-y-3">
              <h5 className="font-serif text-lg text-[#111111] font-semibold">
                Service & Destination Coverage
              </h5>
              <p className="text-xs text-[#6B6B6B]">
                We deploy dedicated transport and installation crews to luxury convention centers, heritage palaces, and beach resorts across:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#171717] pt-2">
                {companyDetails.serviceAreas.map((area, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <section className="bg-white py-20 border-t border-[#E8E5DF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <SectionHeading
            badge="Frequently Asked Questions"
            title="Everything You Need to Know Before Booking"
            subtitle="Clear details regarding booking lead times, custom site visits, safety compliance, and live event management."
          />

          <div className="space-y-4 mt-8">
            {faqList.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-[#E8E5DF] rounded-lg overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 bg-[#FAF9F6] hover:bg-white flex items-center justify-between font-serif text-lg text-[#111111] font-normal transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="text-[#C9A45C] text-xl font-bold ml-4">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-5 bg-white border-t border-[#E8E5DF] text-sm text-[#6B6B6B] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
