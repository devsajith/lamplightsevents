import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { companyDetails } from "@/data/company";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${companyDetails.name} | Bespoke Event Stage Decoration & Lighting`,
  description:
    "Premium stage decoration, wedding mandaps, reception backdrops, and architectural event lighting designed to elevate your celebrations across India.",
  keywords: [
    "Event Stage Decoration",
    "Wedding Mandap Design",
    "Reception Stage Setup",
    "Architectural Lighting",
    "Event Lighting",
    "Bengaluru Wedding Stages",
    "Goa Destination Weddings",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#FAF9F6] text-[#171717] antialiased selection:bg-[#C9A45C]/30 selection:text-[#111111] min-h-screen flex flex-col justify-between">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton variant="floating" aria-label="Chat on WhatsApp" />
      </body>
    </html>
  );
}
