export interface LightOption {
  id: string;
  code: string;
  title: string;
  category: "Architectural Wash" | "Intelligent Moving Heads" | "Ambient & Fairy Lights" | "Luxury Chandeliers" | "Stage Truss & Rigging";
  shortDescription: string;
  description: string;
  specs: {
    output: string;
    colorTemp: string;
    coverage: string;
    control: string;
  };
  featured: boolean;
  imageUrl: string;
  galleryUrls: string[];
  keyFeatures: string[];
  recommendedUse: string;
  powerRequirements: string;
}

export const lightsData: LightOption[] = [
  {
    id: "architectural-gold-wash",
    code: "LGT-01",
    title: "Warm Gold Architectural Wash",
    category: "Architectural Wash",
    shortDescription: "High-power IP65 outdoor LED flood wash in signature 3000K warm gold for venue facades and pillars.",
    description: "Our signature architectural wash lighting casts a continuous, flicker-free warm gold glow across grand hotel facades, heritage columns, and garden trees, instantly elevating night ambiance.",
    specs: {
      output: "18,000 Lumens per bar",
      colorTemp: "2700K - 3200K Warm Gold (CRI > 95)",
      coverage: "Up to 30ft vertical wall wash",
      control: "Wireless DMX / Static Presets"
    },
    featured: true,
    imageUrl: "/images/lights/evlight1.webp",
    galleryUrls: ["/images/lights/evlight1.webp"],
    keyFeatures: [
      "IP65 Weatherproof Aluminum Enclosure",
      "Soft Amber & Champagne Gold Color Palette",
      "Silent Convection Cooling (Zero Fan Noise)",
      "Wireless Battery & Mains Hybrid Power"
    ],
    recommendedUse: "Palace Facades, Pillar Rows, Garden Trees & Ballroom Entrances",
    powerRequirements: "220V AC / 180W per fixture"
  },
  {
    id: "intelligent-moving-profile",
    code: "LGT-02",
    title: "Intelligent Moving Head Beam & Spot",
    category: "Intelligent Moving Heads",
    shortDescription: "350W hybrid moving head fixture with custom gobo patterns, motorized zoom, and sharp beam effects.",
    description: "Designed for sangeet dance stages and award galas. Projects crisp textured patterns, sharp aerial beams, and dynamic color sweeps synchronized with musical cues.",
    specs: {
      output: "350W Discharge Light Engine",
      colorTemp: "Full CMY Color Mixing + CTO",
      coverage: "5° to 45° Motorized Zoom Range",
      control: "32-Channel DMX 512 / ArtNet"
    },
    featured: true,
    imageUrl: "/images/lights/evlight2.webp",
    galleryUrls: ["/images/lights/evlight2.webp"],
    keyFeatures: [
      "14 Static + 9 Rotating Custom Gobos",
      "8-Facet Rotating Circular & Linear Prism",
      "Ultra-Fast Pan (540°) & Tilt (270°)",
      "Syncs directly with DJ / Live Band Control"
    ],
    recommendedUse: "Dance Stages, Concert Rigging & Award Announcement Cues",
    powerRequirements: "220V AC / 450W per fixture"
  },
  {
    id: "fairy-starry-canopy",
    code: "LGT-03",
    title: "Starry Night Fairy Light Canopy",
    category: "Ambient & Fairy Lights",
    shortDescription: "Ultra-dense warm micro-LED string canopy with subtle twinkle options for ceiling and lawn spaces.",
    description: "Transform open-air lawns or indoor glasshouses into a sparkling starlight sanctuary. Features copper-wire micro-LED strands suspended at custom heights.",
    specs: {
      output: "2,500+ Dimmable Warm Micro LEDs",
      colorTemp: "2400K Sunset Warm Amber",
      coverage: "Custom Span (up to 5,000 sq ft)",
      control: "Dimmer Console / Twinkle FX Controller"
    },
    featured: true,
    imageUrl: "/images/lights/evlight3.webp",
    galleryUrls: ["/images/lights/evlight3.webp"],
    keyFeatures: [
      "Commercial Grade Heavy-Duty Wiring",
      "Flicker-Free Smooth 0-100% Dimming",
      "Safe Low-Voltage DC Transformers",
      "Custom Overhead Structural Support Wire Mesh"
    ],
    recommendedUse: "Dining Pavilions, Outdoor Sangeet Lawns & Pathway Tunnels",
    powerRequirements: "110V-240V Low Voltage Transformer Network"
  },
  {
    id: "grand-crystal-chandelier",
    code: "LGT-04",
    title: "Grand Imperial Crystal Chandelier",
    category: "Luxury Chandeliers",
    shortDescription: "18-arm hand-cut K9 crystal chandelier with internal warm candle LEDs and gold metal accents.",
    description: "An exquisite statement piece hung over mandap centers, main entrance foyers, or VIP dining tables. Features genuine hand-cut crystal drops that catch every ray of ambient light.",
    specs: {
      output: "18 x E14 LED Dimmable Candle Lamps",
      colorTemp: "2700K Soft Golden Candlelight",
      coverage: "Direct Focal Illumination (6ft Diameter)",
      control: "Smooth DMX Triac Dimming"
    },
    featured: true,
    imageUrl: "/images/lights/evlight4.webp",
    galleryUrls: ["/images/lights/evlight4.webp"],
    keyFeatures: [
      "Genuine K9 Faceted Optical Crystal",
      "Brushed Warm Brass Metallic Frame",
      "Includes Safety Steel Aircraft Cable Suspension",
      "Adjustable Drop Height (up to 12ft)"
    ],
    recommendedUse: "Mandap Centerpieces, Stage Overhead & Grand Ballroom Entrances",
    powerRequirements: "220V AC / 120W total"
  },
  {
    id: "pinspot-table-accent",
    code: "LGT-05",
    title: "Precision Pin-Spot Table Accents",
    category: "Architectural Wash",
    shortDescription: "Narrow 3-degree beam magnetic battery pin-spots designed to illuminate floral centerpieces.",
    description: "Focus sharp, clear light directly onto banquet table floral arrangements without spilling unwanted glare into guests' eyes.",
    specs: {
      output: "15W High-CRI Spot Engine",
      colorTemp: "3000K Warm Neutral White",
      coverage: "Sharp 3° Pinpoint Beam",
      control: "Wireless Remote / Magnetic Base"
    },
    featured: true,
    imageUrl: "/images/lights/evlight5.webp",
    galleryUrls: ["/images/lights/evlight5.webp"],
    keyFeatures: [
      "100% Cordless Battery Powered (10hr Runtime)",
      "Ultra-Strong Magnetic Mount for Truss/Pillars",
      "No Cables Across Guest Flooring",
      "CRI 98 for Vibrant Flower Color Rendition"
    ],
    recommendedUse: "Banquet Table Centerpieces, Cake Tables & Photo Booth Backdrops",
    powerRequirements: "Rechargeable Lithium Battery"
  }
];

export const lightCategories = [
  "All",
  "Architectural Wash",
  "Intelligent Moving Heads",
  "Ambient & Fairy Lights",
  "Luxury Chandeliers"
];
