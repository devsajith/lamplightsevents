export interface StageDesign {
  id: string;
  code: string;
  title: string;
  category: "Wedding Mandap" | "Reception Stage" | "Corporate Gala" | "Floral Architecture" | "Outdoor Luxury";
  shortDescription: string;
  description: string;
  dimensions: string;
  featured: boolean;
  imageUrl: string;
  galleryUrls: string[];
  keyHighlights: string[];
  recommendedLighting: string;
  setupTimeHours: number;
}

export const stagesData: StageDesign[] = [
  {
    id: "royal-gold-mandap",
    code: "STG-01",
    title: "Royal Gold Carved Mandap",
    category: "Wedding Mandap",
    shortDescription: "Majestic 4-pillar carved gold dome with cascading white orchids and warm ambient backlighting.",
    description: "Designed for grand wedding ceremonies, the Royal Gold Carved Mandap features hand-engraved golden pillars, a central floral dome, and layered velvet backdrop curtains illuminated with soft 3000K warm gold lights.",
    dimensions: "40ft Width x 25ft Depth x 16ft Height",
    featured: true,
    imageUrl: "/images/stages/stage1.webp",
    galleryUrls: ["/images/stages/stage1.webp"],
    keyHighlights: [
      "4 Hand-carved Gold Pillars with LED Core",
      "Cascading Dutch Roses & White Orchid Dome",
      "Raised 3-Tier Wooden Stage Platform",
      "Integrated Warm Gold Uplighting Package"
    ],
    recommendedLighting: "Warm Gold Architectural Wash + Soft Profile Spotlights",
    setupTimeHours: 8
  },
  {
    id: "crystal-mirror-reception",
    code: "STG-02",
    title: "Bespoke Crystal Mirror Backdrop",
    category: "Reception Stage",
    shortDescription: "Ultra-modern reflective glass panel backdrop with geometric gold framing and chandeliers.",
    description: "A showstopping reception stage setup crafted with high-reflection acrylic mirror panels, floating warm pendant lights, and romantic blush pink floral arches.",
    dimensions: "45ft Width x 20ft Depth x 14ft Height",
    featured: true,
    imageUrl: "/images/stages/stage3.webp",
    galleryUrls: ["/images/stages/stage3.webp"],
    keyHighlights: [
      "High-Gloss Mirror Floor & Backdrop Panels",
      "Suspended Crystal Candle Chandeliers",
      "Blush & Champagne Hydrangea Archway",
      "Dimmable LED Linear Strip Accents"
    ],
    recommendedLighting: "Intelligent Moving Spot Profiles + Low Haze Fog",
    setupTimeHours: 7
  },
  {
    id: "gilded-heritage-palace",
    code: "STG-03",
    title: "Gilded Heritage Palace Architecture",
    category: "Wedding Mandap",
    shortDescription: "Traditional royal Rajasthani arches with gold leaf work, marigold cascades, and brass lamps.",
    description: "Evoking timeless Indian heritage, this stage features arched jharokha backdrops, hand-finished gold foil carving, traditional brass samai lamps, and vibrant marigold floral garlands.",
    dimensions: "50ft Width x 30ft Depth x 18ft Height",
    featured: true,
    imageUrl: "/images/stages/stage4.webp",
    galleryUrls: ["/images/stages/stage4.webp"],
    keyHighlights: [
      "Handmade Heritage Jharokha Arches",
      "Traditional Antique Brass Lighting Fixtures",
      "Fresh Marigold & Jasmine Floral Installations",
      "Royal Red Carpeted Multi-Step Platform"
    ],
    recommendedLighting: "Deep Amber Warm Wash + Flame Effect Accents",
    setupTimeHours: 10
  }
];

export const stageCategories = [
  "All",
  "Wedding Mandap",
  "Reception Stage"
];
