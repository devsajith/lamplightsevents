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
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    galleryUrls: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200&auto=format&fit=crop"
    ],
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
    imageUrl: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1200&auto=format&fit=crop",
    galleryUrls: [
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=1200&auto=format&fit=crop"
    ],
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
    id: "botanical-glasshouse-mandap",
    code: "STG-03",
    title: "Botanical Glasshouse & Floral Arch",
    category: "Floral Architecture",
    shortDescription: "Lush green foliage ceiling canopy with cascading fairy lights and white lily pillars.",
    description: "Immerse your guests in nature's luxury. This botanical glasshouse theme combines dense monstera, white roses, eucalyptus arches, and warm fairy light strings.",
    dimensions: "35ft Width x 25ft Depth x 15ft Height",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1200&auto=format&fit=crop",
    galleryUrls: [
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop"
    ],
    keyHighlights: [
      "1,000+ Meters of Overhead Fairy Light Mesh",
      "Fresh Botanical Eucalyptus & White Lily Walls",
      "Custom Timber Decking Platform",
      "Ambient Tree Uplighting System"
    ],
    recommendedLighting: "Fairy Canopy + Soft Warm Green Landscape Wash",
    setupTimeHours: 9
  },
  {
    id: "gilded-heritage-palace",
    code: "STG-04",
    title: "Gilded Heritage Palace Architecture",
    category: "Wedding Mandap",
    shortDescription: "Traditional royal Rajasthani arches with gold leaf work, marigold cascades, and brass lamps.",
    description: "Evoking timeless Indian heritage, this stage features arched jharokha backdrops, hand-finished gold foil carving, traditional brass samai lamps, and vibrant marigold floral garlands.",
    dimensions: "50ft Width x 30ft Depth x 18ft Height",
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
    galleryUrls: [
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop"
    ],
    keyHighlights: [
      "Handmade Heritage Jharokha Arches",
      "Traditional Antique Brass Lighting Fixtures",
      "Fresh Marigold & Jasmine Floral Installations",
      "Royal Red Carpeted Multi-Step Platform"
    ],
    recommendedLighting: "Deep Amber Warm Wash + Flame Effect Accents",
    setupTimeHours: 10
  },
  {
    id: "minimalist-gold-geometric",
    code: "STG-05",
    title: "Minimalist Gold Line Geometry",
    category: "Reception Stage",
    shortDescription: "Sleek brass arch structures with soft ivory draping and modern candle wall displays.",
    description: "Designed for couples who appreciate clean lines and understated luxury. Features floating brass geometric rings, warm pillar candles, and soft ivory silk backdrops.",
    dimensions: "30ft Width x 18ft Depth x 12ft Height",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    galleryUrls: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop"
    ],
    keyHighlights: [
      "Custom Brushed Brass Ring Sculptures",
      "Flameless LED Safety Candle Array",
      "Minimalist Silk Fabric Draping",
      "Ultra-Clean Seamless White Flooring"
    ],
    recommendedLighting: "Warm Soft Diffused Profile Lights",
    setupTimeHours: 5
  },
  {
    id: "celestial-led-galaxy",
    code: "STG-06",
    title: "Celestial LED & Award Gala Stage",
    category: "Corporate Gala",
    shortDescription: "State-of-the-art curved LED video wall integrated with aluminum truss framing and moving beams.",
    description: "Built for high-profile corporate award nights, product launches, and gala dinners. Features a central P2.5 high-definition curved LED screen framed by metallic gold trusses and sharp light beams.",
    dimensions: "60ft Width x 30ft Depth x 20ft Height",
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
    galleryUrls: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop"
    ],
    keyHighlights: [
      "Seamless Curved P2.5 HD LED Video Screen",
      "Heavy-Duty Black Anodized Truss Rigging",
      "Computer-Controlled DMX Beam Sequence",
      "Podium & Speaker Riser Integration"
    ],
    recommendedLighting: "Beam & Wash Moving Heads + DMX Console Control",
    setupTimeHours: 12
  },
  {
    id: "outdoor-poolside-pavilion",
    code: "STG-07",
    title: "Outdoor Poolside Floating Stage",
    category: "Outdoor Luxury",
    shortDescription: "Water-floating acrylic platform with wooden pergola, festoon lights, and starry night canopy.",
    description: "Built over water bodies or resort lawns, this floating stage structure creates an ethereal setting for evening sangeets and cocktail night performances.",
    dimensions: "40ft Width x 25ft Depth x 14ft Height",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200&auto=format&fit=crop",
    galleryUrls: [
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200&auto=format&fit=crop"
    ],
    keyHighlights: [
      "Waterproof Heavy-Load Submerged Stage Framing",
      "Custom Teakwood Pergola Roof",
      "Warm Filament Bulbs & Festoon Strings",
      "Underwater LED Pool Wash Fixtures"
    ],
    recommendedLighting: "Festoon Strings + Submerged Underwater RGBW Wash",
    setupTimeHours: 11
  },
  {
    id: "opulent-velvet-opera",
    code: "STG-08",
    title: "Opulent Velvet & Gold Opera Stage",
    category: "Reception Stage",
    shortDescription: "Dramatic deep royal red velvet drapes with Victorian golden frames and grand chandeliers.",
    description: "A dramatic opera-inspired stage decoration featuring grand velvet drapes, multi-tiered crystal chandeliers, and golden baroque floral urns.",
    dimensions: "50ft Width x 25ft Depth x 16ft Height",
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    galleryUrls: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
    ],
    keyHighlights: [
      "Heavy Flame-Retardant Velvet Theater Drapes",
      "3 Imported 12-Arm Crystal Chandeliers",
      "Baroque Style Gold Carved Archways",
      "Plush Velvet Lounge Seating Platform"
    ],
    recommendedLighting: "Warm White Key Lights + Golden Velvet Spotlight Accent",
    setupTimeHours: 8
  }
];

export const stageCategories = [
  "All",
  "Wedding Mandap",
  "Reception Stage",
  "Floral Architecture",
  "Corporate Gala",
  "Outdoor Luxury"
];
