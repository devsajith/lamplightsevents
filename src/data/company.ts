export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  eventTitle: string;
  venue: string;
  quote: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const companyDetails = {
  name: "Lamplights Events",
  tagline: "Bespoke Event Stage Decoration & Architectural Lighting",
  phone: "+91 90489 68531, +91 96569 39589",
  whatsappNumber: "919656939589",
  email: "",
  address: "Irumpupalam, Adimali",
  cityState: "Idukki, Kerala",
  operatingHours: "",
  serviceAreas: [
    "Munnar & Adimali High-Range Resorts",
    "Idukki & Vagamon Plantation Venues",
    "Kochi & Ernakulam Banquet Halls",
    "All Destination Wedding Venues in Kerala"
  ],
  stats: [
    { label: "Bespoke Events Executed", value: "500+" },
    { label: "Years of Craftsmanship", value: "12+" },
    { label: "Custom Stage Designs", value: "150+" },
    { label: "Client Satisfaction", value: "100%" },
  ],
};

export const servicesList: ServiceItem[] = [
  {
    id: "stage-decoration",
    title: "Luxury Stage Decoration",
    shortDesc: "Grand wedding mandaps, reception backdrops, and bespoke stage installations designed with premium floral and geometric architecture.",
    fullDesc: "Our flagship service crafts spellbinding stage setups tailored to your event theme. From royal golden pillars to minimalist contemporary arches, we blend hand-carved structures, exotic florals, and multi-tier platforms.",
    iconName: "Sparkles",
    features: [
      "Custom 3D Spatial Layout & Visualization",
      "Exotic & Fresh Floral Installations",
      "Royal Mandaps & Contemporary Receptions",
      "Modular Heavy-Duty Stage Platforms"
    ]
  },
  {
    id: "architectural-lighting",
    title: "Architectural & Ambient Lighting",
    shortDesc: "Transforming venues into luminous masterpieces with subtle wash lighting, accent uplighting, and warm golden atmospheres.",
    fullDesc: "Lighting sets the emotional depth of any grand event. We design architectural wash lighting that highlights venue facades, pillar structures, trees, and interior draping in warm golden hues and ambient temperatures.",
    iconName: "Sun",
    features: [
      "3000K Warm Gold Architectural Wash",
      "Wireless Battery LED Uplighters",
      "Tree & Landscape Ambient Illumination",
      "Facade & Pillar Accent Lighting"
    ]
  },
  {
    id: "intelligent-stage-lighting",
    title: "Intelligent Stage Lighting & Rigging",
    shortDesc: "Dynamic moving head beams, spot profiles, haze effects, and programmed light shows for sangeets, concerts, and award ceremonies.",
    fullDesc: "For high-energy celebrations, award galas, and concert stages, our certified technicians program DMX light shows with moving head fixtures, strobe profiles, follow spots, and atmospheric haze.",
    iconName: "Zap",
    features: [
      "Computer-Programmed DMX Light Shows",
      "Beam, Spot & Wash Moving Heads",
      "Certified Heavy Trussing & Rigging",
      "Low-Fog & Stage Haze Machines"
    ]
  },
  {
    id: "chandelier-pendant",
    title: "Luxury Chandeliers & Ceiling Draping",
    shortDesc: "Suspended crystal chandeliers, fairy light canopies, and lavish ceiling silk draping that elevate interior headroom.",
    fullDesc: "Turn simple convention halls or outdoor glasshouses into royal courtrooms. We specialize in heavy crystal chandelier rigging, cascading warm fairy light ceilings, and silk draping.",
    iconName: "Grid",
    features: [
      "Imported Multi-Tier Crystal Chandeliers",
      "Starry Night Fairy Light Canopies",
      "Fire-Retardant Premium Silk Draping",
      "Custom Overhead Structural Rigging"
    ]
  }
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Initial Consultation & Vision",
    description: "We connect via WhatsApp or phone to understand your event type, date, venue dimensions, color palette, and budget aspirations."
  },
  {
    number: "02",
    title: "3D Design & Lighting Proposal",
    description: "Our design team presents tailored stage concepts, 3D renders, and lighting layouts engineered specifically for your venue."
  },
  {
    number: "03",
    title: "Precision Rigging & Installation",
    description: "On event day, our master craftsmen and lighting engineers arrive early to execute structural setup, wiring, and floral styling."
  },
  {
    number: "04",
    title: "Live Event Support & Seamless Demount",
    description: "Our on-site tech team manages light transitions throughout your event, followed by quiet, efficient post-event disassembly."
  }
];

export const trustHighlights = [
  {
    title: "Structural Safety & Certified Rigging",
    description: "All heavy stage platforms, trusses, and chandelier suspensions are calculated for safety and installed by certified riggers."
  },
  {
    title: "Redundant Power & Tech Backup",
    description: "We deploy dual-source DMX controllers and backup battery units to guarantee zero light flickering or blackout during key moments."
  },
  {
    title: "Tailored Customization",
    description: "No cookie-cutter templates. Every stage backdrop and lighting color temperature is customized to reflect your family's story."
  },
  {
    title: "Direct Designer Access",
    description: "Speak directly with our principal stage architect via WhatsApp for quick modifications and real-time photo updates."
  }
];

export const testimonialsList: TestimonialItem[] = [
  {
    id: "1",
    clientName: "Ananya & Rohan Sharma",
    eventTitle: "Grand Wedding Reception",
    venue: "The Leela Palace, Bengaluru",
    quote: "Lamplights Events created a stage that literally took our breath away. The warm gold lighting paired with the custom floral arch looked straight out of a fairytale. Our guests are still talking about it!",
    rating: 5
  },
  {
    id: "2",
    clientName: "Vikramaditya Rao",
    eventTitle: "Corporate Excellence Awards 2026",
    venue: "JW Marriott Convention Hall",
    quote: "Extremely professional execution. The intelligent lighting show during award announcements was perfectly synced. Their team handled full rigging and safety checks flawlessly.",
    rating: 5
  },
  {
    id: "3",
    clientName: "Dr. Kavita & Siddharth",
    eventTitle: "Outdoor Destination Sangeet",
    venue: "Taj Exotica, Goa",
    quote: "The fairy light canopy combined with crystal chandeliers over the outdoor dance stage transformed the night. The WhatsApp communication was super smooth from start to finish.",
    rating: 5
  }
];

export const faqList: FAQItem[] = [
  {
    question: "How far in advance should we book Lamplights Events for our wedding or gala?",
    answer: "We recommend booking 2 to 4 months in advance, especially for high-peak wedding seasons (October through April). However, we do accommodate urgent dates depending on our production schedule."
  },
  {
    question: "Can stage designs be customized to fit our specific venue dimensions?",
    answer: "Yes, absolutely! Every stage design in our catalog can be scaled in width (from 20ft up to 60ft+), height, and floral density to match your venue's stage dimensions and ceiling clearance."
  },
  {
    question: "How does the WhatsApp inquiry process work?",
    answer: "When you browse our Stages or Lights catalog, click 'Enquire on WhatsApp' on any design. It opens WhatsApp directly with a pre-filled message specifying the design code (e.g. STG-01). Our team replies instantly with availability and pricing guidance."
  },
  {
    question: "Do you provide on-site technical engineers during the event?",
    answer: "Yes, every booking includes dedicated on-site lighting technicians and stage managers who remain present throughout your event to control light cues, mood shifts, and safety."
  },
  {
    question: "Do you travel for destination weddings across India?",
    answer: "Yes! We regularly execute luxury destination weddings in Goa, Udaipur, Jaipur, Hyderabad, Chennai, and Mysuru with our full transport and production crew."
  }
];
