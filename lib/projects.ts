type ProjectTypes = {
  id: number;
  title: string;
  category: string;
  images: string[];
  location: string;
  slug: string;
  clientName: string;
  area: string;
  duration: string;
  description: {
    shortDescription: string;
    clientVision: string;
    challenge: string;
    solution: string;
    result: string;
  };
};

export const projects: ProjectTypes[] = [
  {
    id: 1,
    title: "Cozy Family Home Interior",
    category: "residential",
    images: [
      "/projects/Residential/p1/Residential-project-1-1.jpg",
      "/projects/Residential/p1/Residential-project-1-2.jpg",
      "/projects/Residential/p1/Residential-project-1-3.jpg",
      "/projects/Residential/p1/Residential-project-1-4.jpg",
      "/projects/Residential/p1/Residential-project-1-5.jpg",
    ],
    location: "Ontario, Canada",
    slug: "cozy-family-home-interior",
    clientName: "Carter Residence",
    area: "1200 sq ft",
    duration: "3 months",
    description: {
      shortDescription:
        "This cozy family home combines warmth and functionality to create a welcoming environment for daily living. Soft neutral tones and natural textures enhance comfort while maintaining a modern aesthetic.",
      clientVision:
        "The client envisioned a home that was modern yet warm, minimalist but cozy, and highly functional for everyday life. They wanted spaces flooded with natural light, clean lines, and a calming color palette that promotes relaxation and comfort. Every corner needed to reflect their personality while remaining practical for family living.",
      challenge:
        "The space posed multiple challenges: rooms were cramped, natural light barely reached the interior, and storage was inadequate. Awkward furniture placement made the layout feel cluttered, while the existing materials and color scheme lacked harmony. Balancing aesthetic appeal with functionality seemed difficult without a complete rethink of the space.",
      solution:
        "We reimagined the layout by opening up walls, creating seamless flow between living areas, and introducing multifunctional furniture. Neutral tones and natural textures were combined to create a sense of warmth and spaciousness. Clever storage solutions were integrated without compromising style, while lighting design maximized brightness and mood. The space became not only visually stunning but also highly practical for daily living.",
      result:
        "The completed project transformed the home into a bright, airy, and harmonious environment. Each room now feels spacious and welcoming, perfectly balancing aesthetics and functionality. The client can enjoy clutter-free living, enhanced natural light, and a serene atmosphere that reflects their lifestyle, turning their vision into a tangible, livable reality.",
    },
  },

  {
    id: 2,
    title: "Luxury Retail Store Makeover",
    category: "commercial",
    images: [
      "/projects/Commercial/p1/Commercial-project-1-1.jpg",
      "/projects/Commercial/p1/Commercial-project-1-2.jpg",
      "/projects/Commercial/p1/Commercial-project-1-3.jpg",
      "/projects/Commercial/p1/Commercial-project-1-4.jpg",
      "/projects/Commercial/p1/Commercial-project-1-5.jpg",
    ],
    location: "Vancouver, Canada",
    slug: "luxury-retail-store-makeover",
    clientName: "Charlotte Evans",
    area: "1400 sq ft",
    duration: "5 months",
    description: {
      shortDescription:
        "This luxury retail store makeover transforms the space into an elegant and immersive shopping experience. Sleek finishes, high-end materials, and a cohesive color palette create a sophisticated atmosphere.",
      clientVision:
        "The client envisioned a home that was modern yet warm, minimalist but cozy, and highly functional for everyday life. They wanted spaces flooded with natural light, clean lines, and a calming color palette that promotes relaxation and comfort. Every corner needed to reflect their personality while remaining practical for family living.",
      challenge:
        "The space posed multiple challenges: rooms were cramped, natural light barely reached the interior, and storage was inadequate. Awkward furniture placement made the layout feel cluttered, while the existing materials and color scheme lacked harmony. Balancing aesthetic appeal with functionality seemed difficult without a complete rethink of the space.",
      solution:
        "We reimagined the layout by opening up walls, creating seamless flow between living areas, and introducing multifunctional furniture. Neutral tones and natural textures were combined to create a sense of warmth and spaciousness. Clever storage solutions were integrated without compromising style, while lighting design maximized brightness and mood. The space became not only visually stunning but also highly practical for daily living.",
      result:
        "The completed project transformed the home into a bright, airy, and harmonious environment. Each room now feels spacious and welcoming, perfectly balancing aesthetics and functionality. The client can enjoy clutter-free living, enhanced natural light, and a serene atmosphere that reflects their lifestyle, turning their vision into a tangible, livable reality.",
    },
  },

  {
    id: 3,
    title: "Modern Modular Kitchen",
    category: "kitchen",
    images: [
      "/projects/Kitchen/p1/Kitchen-project-1-1.jpg",
      "/projects/Kitchen/p1/Kitchen-project-1-2.jpg",
      "/projects/Kitchen/p1/Kitchen-project-1-3.jpg",
      "/projects/Kitchen/p1/Kitchen-project-1-4.jpg",
      "/projects/Kitchen/p1/Kitchen-project-1-5.jpg",
    ],
    location: "Montreal, Canada",
    slug: "modern-modular-kitchen",
    clientName: "The Anderson Residence",
    area: "700 sq ft",
    duration: "1 month",
    description: {
      shortDescription:
        "This modern modular kitchen blends style, functionality, and efficiency for a seamless cooking experience. Sleek cabinetry, durable surfaces, and smart storage solutions maximize space while keeping the design clean and contemporary.",
      clientVision:
        "The client envisioned a home that was modern yet warm, minimalist but cozy, and highly functional for everyday life. They wanted spaces flooded with natural light, clean lines, and a calming color palette that promotes relaxation and comfort. Every corner needed to reflect their personality while remaining practical for family living.",
      challenge:
        "The space posed multiple challenges: rooms were cramped, natural light barely reached the interior, and storage was inadequate. Awkward furniture placement made the layout feel cluttered, while the existing materials and color scheme lacked harmony. Balancing aesthetic appeal with functionality seemed difficult without a complete rethink of the space.",
      solution:
        "We reimagined the layout by opening up walls, creating seamless flow between living areas, and introducing multifunctional furniture. Neutral tones and natural textures were combined to create a sense of warmth and spaciousness. Clever storage solutions were integrated without compromising style, while lighting design maximized brightness and mood. The space became not only visually stunning but also highly practical for daily living.",
      result:
        "The completed project transformed the home into a bright, airy, and harmonious environment. Each room now feels spacious and welcoming, perfectly balancing aesthetics and functionality. The client can enjoy clutter-free living, enhanced natural light, and a serene atmosphere that reflects their lifestyle, turning their vision into a tangible, livable reality.",
    },
  },

  {
    id: 4,
    title: "Functional Space Revamp",
    category: "renovation",
    images: [
      "/projects/Remodeling/p1/Remodeling-project-1-1.jpg",
      "/projects/Remodeling/p1/Remodeling-project-1-2.jpg",
      "/projects/Remodeling/p1/Remodeling-project-1-3.jpg",
      "/projects/Remodeling/p1/Remodeling-project-1-4.jpg",
      "/projects/Remodeling/p1/Remodeling-project-1-5.jpg",
    ],
    location: "Calgary, Canada",
    slug: "functional-space-revamp",
    clientName: "Bennett House",
    area: "1100 sq ft",
    duration: "3 months",
    description: {
      shortDescription:
        "This functional space revamp transforms the area into a highly efficient and visually appealing environment. Thoughtful layouts, smart storage solutions, and practical design elements enhance usability without compromising style.",
      clientVision:
        "The client envisioned a home that was modern yet warm, minimalist but cozy, and highly functional for everyday life. They wanted spaces flooded with natural light, clean lines, and a calming color palette that promotes relaxation and comfort. Every corner needed to reflect their personality while remaining practical for family living.",
      challenge:
        "The space posed multiple challenges: rooms were cramped, natural light barely reached the interior, and storage was inadequate. Awkward furniture placement made the layout feel cluttered, while the existing materials and color scheme lacked harmony. Balancing aesthetic appeal with functionality seemed difficult without a complete rethink of the space.",
      solution:
        "We reimagined the layout by opening up walls, creating seamless flow between living areas, and introducing multifunctional furniture. Neutral tones and natural textures were combined to create a sense of warmth and spaciousness. Clever storage solutions were integrated without compromising style, while lighting design maximized brightness and mood. The space became not only visually stunning but also highly practical for daily living.",
      result:
        "The completed project transformed the home into a bright, airy, and harmonious environment. Each room now feels spacious and welcoming, perfectly balancing aesthetics and functionality. The client can enjoy clutter-free living, enhanced natural light, and a serene atmosphere that reflects their lifestyle, turning their vision into a tangible, livable reality.",
    },
  },

  {
    id: 5,
    title: "Contemporary Bedroom Redesign",
    category: "bedroom",
    images: [
      "/projects/Bedroom/P1/Bedroom-project-1-1.jpg",
      "/projects/Bedroom/P1/Bedroom-project-1-2.jpg",
      "/projects/Bedroom/P1/Bedroom-project-1-3.jpg",
      "/projects/Bedroom/P1/Bedroom-project-1-4.jpg",
      "/projects/Bedroom/P1/Bedroom-project-1-5.jpg",
    ],
    location: "Ottawa, Canada",
    slug: "contemporary-bedroom-redesign",
    clientName: "Walker Family Home",
    area: "700 sq ft",
    duration: "1 month",
    description: {
      shortDescription:
        "This contemporary bedroom redesign creates a serene and stylish retreat for rest and relaxation. Neutral tones, soft textures, and carefully chosen furnishings bring warmth and comfort while maintaining a modern aesthetic.",
      clientVision:
        "The client envisioned a home that was modern yet warm, minimalist but cozy, and highly functional for everyday life. They wanted spaces flooded with natural light, clean lines, and a calming color palette that promotes relaxation and comfort. Every corner needed to reflect their personality while remaining practical for family living.",
      challenge:
        "The space posed multiple challenges: rooms were cramped, natural light barely reached the interior, and storage was inadequate. Awkward furniture placement made the layout feel cluttered, while the existing materials and color scheme lacked harmony. Balancing aesthetic appeal with functionality seemed difficult without a complete rethink of the space.",
      solution:
        "We reimagined the layout by opening up walls, creating seamless flow between living areas, and introducing multifunctional furniture. Neutral tones and natural textures were combined to create a sense of warmth and spaciousness. Clever storage solutions were integrated without compromising style, while lighting design maximized brightness and mood. The space became not only visually stunning but also highly practical for daily living.",
      result:
        "The completed project transformed the home into a bright, airy, and harmonious environment. Each room now feels spacious and welcoming, perfectly balancing aesthetics and functionality. The client can enjoy clutter-free living, enhanced natural light, and a serene atmosphere that reflects their lifestyle, turning their vision into a tangible, livable reality.",
    },
  },

  {
    id: 6,
    title: "Premium Lounge & Reception Ceiling",
    category: "ceiling",
    images: [
      "/projects/Ceiling/p1/Ceiling-project-1-1.jpg",
      "/projects/Ceiling/p1/Ceiling-project-1-2.jpg",
      "/projects/Ceiling/p1/Ceiling-project-1-3.jpg",
      "/projects/Ceiling/p1/Ceiling-project-1-4.jpg",
      "/projects/Ceiling/p1/Ceiling-project-1-5.jpg",
    ],
    location: "Whitehorse, Canada",
    slug: "premium-lounge-reception-ceiling",
    clientName: "The Thompson Villa",
    area: "1200 sq ft",
    duration: "3 months",
    description: {
      shortDescription:
        "This premium lounge and reception area showcases a stunning ceiling design that elevates the entire space. Elegant materials, layered textures, and integrated lighting create a sophisticated and welcoming atmosphere.",
      clientVision:
        "The client envisioned a home that was modern yet warm, minimalist but cozy, and highly functional for everyday life. They wanted spaces flooded with natural light, clean lines, and a calming color palette that promotes relaxation and comfort. Every corner needed to reflect their personality while remaining practical for family living.",
      challenge:
        "The space posed multiple challenges: rooms were cramped, natural light barely reached the interior, and storage was inadequate. Awkward furniture placement made the layout feel cluttered, while the existing materials and color scheme lacked harmony. Balancing aesthetic appeal with functionality seemed difficult without a complete rethink of the space.",
      solution:
        "We reimagined the layout by opening up walls, creating seamless flow between living areas, and introducing multifunctional furniture. Neutral tones and natural textures were combined to create a sense of warmth and spaciousness. Clever storage solutions were integrated without compromising style, while lighting design maximized brightness and mood. The space became not only visually stunning but also highly practical for daily living.",
      result:
        "The completed project transformed the home into a bright, airy, and harmonious environment. Each room now feels spacious and welcoming, perfectly balancing aesthetics and functionality. The client can enjoy clutter-free living, enhanced natural light, and a serene atmosphere that reflects their lifestyle, turning their vision into a tangible, livable reality.",
    },
  },
];
