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
    imageUrl: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop",
    galleryUrls: [
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508997449629-303059a039c0?q=80&w=1200&auto=format&fit=crop"
    ],
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
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
    galleryUrls: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop"
    ],
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
    imageUrl: "https://images.unsplash.com/photo-1508997449629-303059a039c0?q=80&w=1200&auto=format&fit=crop",
    galleryUrls: [
      "https://images.unsplash.com/photo-1508997449629-303059a039c0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1200&auto=format&fit=crop"
    ],
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
    imageUrl: "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?q=80&w=1200&auto=format&fit=crop",
    galleryUrls: [
      "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?q=80&w=1200&auto=format&fit=crop"
    ],
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
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    galleryUrls: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
    ],
    keyFeatures: [
      "100% Cordless Battery Powered (10hr Runtime)",
      "Ultra-Strong Magnetic Mount for Truss/Pillars",
      "No Cables Across Guest Flooring",
      "CRI 98 for Vibrant Flower Color Rendition"
    ],
    recommendedUse: "Banquet Table Centerpieces, Cake Tables & Photo Booth Backdrops",
    powerRequirements: "Rechargeable Lithium Battery"
  },
  {
    id: "vintage-edison-filament",
    code: "LGT-06",
    title: "Vintage Filament Edison Festoon",
    category: "Ambient & Fairy Lights",
    shortDescription: "Suspended amber glass Edison bulbs strung along braided black vintage cables.",
    description: "Adds a charming rustic-chic and cozy glow to outdoor lawns, beachside weddings, and lounge bar areas.",
    specs: {
      output: "ST64 Warm Amber Edison Bulbs",
      colorTemp: "2200K Vintage Warm Amber",
      coverage: "Strands of 20m / 50m / 100m",
      control: "Rotary Rotary Dimmer Console"
    },
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1200&auto=format&fit=crop",
    galleryUrls: [
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1200&auto=format&fit=crop"
    ],
    keyFeatures: [
      "Shatter-Resistant Amber Polycarbonate Bulbs",
      "Heavy-Duty Weatherproof Rubber Cable",
      "Subtle Spiraled Filament Visual Pattern",
      "Warm Golden Lounge Atmosphere"
    ],
    recommendedUse: "Cocktail Lounges, Food Station Canopies & Beach Lawns",
    powerRequirements: "220V AC / 4W per bulb"
  },
  {
    id: "black-truss-box-rigging",
    code: "LGT-07",
    title: "Black Matte Box Truss Structure",
    category: "Stage Truss & Rigging",
    shortDescription: "Certified heavy-duty aluminum F34 square truss system with stealth black powder coating.",
    description: "The structural foundation for grand stages, lighting grids, and LED screens. Powder-coated in sleek matte black for a clean minimal visual look.",
    specs: {
      output: "SWL Up to 1,500 kg Span Load",
      colorTemp: "Matte Black Stealth Coating",
      coverage: "Custom Spans up to 80ft Width",
      control: "Motorized Electric Chain Hoists"
    },
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",
    galleryUrls: [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop"
    ],
    keyFeatures: [
      "TUV Certified Heavy-Duty Aluminum Alloy",
      "Stealth Powder-Coated Finish (Non-Reflective)",
      "Integrated Cable Management Trailing",
      "Base Plates & Ground Support Towers"
    ],
    recommendedUse: "Concert Stages, Heavy Chandelier Suspensions & LED Screen Support",
    powerRequirements: "Mechanical Rigging System"
  },
  {
    id: "low-fog-haze-atmosphere",
    code: "LGT-08",
    title: "Low-Lying Fog & Stage Haze Systems",
    category: "Intelligent Moving Heads",
    shortDescription: "Ultrasonic water-based low fog generator creating dry-ice cloud effects for first dances.",
    description: "Creates an ethereal 'dancing on clouds' low-lying white fog effect that stays hugging the stage floor without tripping fire alarms or clouding guest views.",
    specs: {
      output: "Continuous Low-Lying Dense Cloud",
      colorTemp: "Pure White Non-Toxic Water-Based Haze",
      coverage: "Covers 2,000 sq ft Stage in 30 Seconds",
      control: "DMX Remote Trigger"
    },
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
    galleryUrls: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop"
    ],
    keyFeatures: [
      "Uses Pure Water & Fluid (No Odor or Residue)",
      "Stays Below Knee Level for Crisp Floor Coverage",
      "Completely Residue-Free for Evening Gowns",
      "Fast Reheat & Continuous Output"
    ],
    recommendedUse: "Couples First Dance, Grand Entries & Stage Performance Cues",
    powerRequirements: "220V AC / 2200W"
  }
];

export const lightCategories = [
  "All",
  "Architectural Wash",
  "Intelligent Moving Heads",
  "Ambient & Fairy Lights",
  "Luxury Chandeliers",
  "Stage Truss & Rigging"
];
