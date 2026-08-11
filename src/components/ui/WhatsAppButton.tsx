"use client";

import React from "react";
import { companyDetails } from "@/data/company";

interface WhatsAppButtonProps {
  message?: string;
  variant?: "primary" | "floating" | "inline" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
  fullWidth?: boolean;
}

export default function WhatsAppButton({
  message = "Hi Lamplights Events, I would like to inquire about your event stage decoration and lighting services.",
  variant = "primary",
  size = "md",
  className = "",
  label = "Enquire on WhatsApp",
  fullWidth = false,
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  const sizeClasses = {
    sm: "px-4 py-2 text-xs font-medium space-x-1.5",
    md: "px-5 py-2.5 text-sm font-medium space-x-2",
    lg: "px-6 py-3.5 text-base font-semibold space-x-2.5",
  };

  const variantClasses = {
    primary:
      "bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-sm hover:shadow transition-all duration-200 rounded-[6px]",
    floating:
      "bg-[#25D366] hover:bg-[#20BD5A] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl fixed bottom-6 right-6 z-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center",
    inline:
      "bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 rounded-[6px] transition-colors",
    outline:
      "bg-transparent border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white rounded-[6px] transition-all",
  };

  if (variant === "floating") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={`${variantClasses.floating} ${className}`}
      >
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.762.459 3.48 1.332 5.001L2 22l5.148-1.348c1.472.802 3.134 1.222 4.86 1.224h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.668-1.039-5.176-2.925-7.062A9.923 9.923 0 0 0 12.012 2zm5.82 14.286c-.244.688-1.42 1.314-1.96 1.37-.502.053-1.15.074-1.85-.15-.434-.138-1-.322-1.742-.644-3.072-1.333-5.074-4.46-5.228-4.664-.153-.205-1.254-1.67-1.254-3.18 0-1.51.79-2.253 1.07-2.54.28-.288.612-.36.816-.36.204 0 .408.002.586.01.19.008.444-.072.695.53.255.612.868 2.116.944 2.27.077.153.128.332.026.536-.102.204-.153.332-.306.51-.153.18-.32.404-.457.542-.153.153-.312.32-.134.626.178.306.79 1.305 1.696 2.112 1.164 1.038 2.146 1.36 2.452 1.513.306.153.485.128.664-.076.178-.204.765-.893.97-1.199.204-.306.408-.255.688-.153.28.102 1.785.842 2.091.995.306.153.51.23.586.357.077.128.077.74-.167 1.428z" />
        </svg>
      </a>
    );
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center font-sans tracking-wide cursor-pointer select-none ${
        sizeClasses[size]
      } ${variantClasses[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      <svg
        className={`${
          size === "sm" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : "w-5 h-5"
        } fill-current flex-shrink-0`}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.762.459 3.48 1.332 5.001L2 22l5.148-1.348c1.472.802 3.134 1.222 4.86 1.224h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.668-1.039-5.176-2.925-7.062A9.923 9.923 0 0 0 12.012 2zm5.82 14.286c-.244.688-1.42 1.314-1.96 1.37-.502.053-1.15.074-1.85-.15-.434-.138-1-.322-1.742-.644-3.072-1.333-5.074-4.46-5.228-4.664-.153-.205-1.254-1.67-1.254-3.18 0-1.51.79-2.253 1.07-2.54.28-.288.612-.36.816-.36.204 0 .408.002.586.01.19.008.444-.072.695.53.255.612.868 2.116.944 2.27.077.153.128.332.026.536-.102.204-.153.332-.306.51-.153.18-.32.404-.457.542-.153.153-.312.32-.134.626.178.306.79 1.305 1.696 2.112 1.164 1.038 2.146 1.36 2.452 1.513.306.153.485.128.664-.076.178-.204.765-.893.97-1.199.204-.306.408-.255.688-.153.28.102 1.785.842 2.091.995.306.153.51.23.586.357.077.128.077.74-.167 1.428z" />
      </svg>
      <span>{label}</span>
    </a>
  );
}
