type ProjectTypes = {
  id:number;
  title:string;
  category: string;
  images:string[];
  location: string;
  slug:string;
  clientName:string;
  date:string;
}

export const projects: ProjectTypes[]=[
  {
    id:1,
    title: "Cozy Family Home Interior",
    category:"residential",
    images:[
      "/projects/Residential/p1/Residential-project-1-1.jpg",
      "/projects/Residential/p1/Residential-project-1-2.jpg",
      "/projects/Residential/p1/Residential-project-1-3.jpg",
      "/projects/Residential/p1/Residential-project-1-4.jpg",
      "/projects/Residential/p1/Residential-project-1-5.jpg",
    ],
    location:"Ontario, Canada",
    slug: "cozy-family-home-interior",
    clientName:"Carter Residence",
    date:"12 March, 2026"
  },

  {
    id:2,
    title: "Luxury Retail Store Makeover",
    category:"commercial",
    images:[
      "/projects/Commercial/p1/Commercial-project-1-1.jpg",
      "/projects/Commercial/p1/Commercial-project-1-2.jpg",
      "/projects/Commercial/p1/Commercial-project-1-3.jpg",
      "/projects/Commercial/p1/Commercial-project-1-4.jpg",
      "/projects/Commercial/p1/Commercial-project-1-5.jpg",
    ],
    location:"Vancouver, Canada",
    slug: "luxury-retail-store-makeover",
    clientName:"Charlotte Evans",
    date:"27 November, 2025"
  },

  {
    id:3,
    title: "Modern Modular Kitchen",
    category:"kitchen",
    images:[
      "/projects/Kitchen/p1/Kitchen-project-1-1.jpg",
      "/projects/Kitchen/p1/Kitchen-project-1-2.jpg",
      "/projects/Kitchen/p1/Kitchen-project-1-3.jpg",
      "/projects/Kitchen/p1/Kitchen-project-1-4.jpg",
      "/projects/Kitchen/p1/Kitchen-project-1-5.jpg",
    ],
    location:"Montreal, Canada",
    slug: "modern-modular-kitchen",
    clientName:"The Anderson Residence",
    date:"7 December, 2025"
  },

  {
    id:4,
    title: "Functional Space Revamp",
    category:"renovation",
    images:[
      "/projects/Remodeling/p1/Remodeling-project-1-1.jpg",
      "/projects/Remodeling/p1/Remodeling-project-1-2.jpg",
      "/projects/Remodeling/p1/Remodeling-project-1-3.jpg",
      "/projects/Remodeling/p1/Remodeling-project-1-4.jpg",
      "/projects/Remodeling/p1/Remodeling-project-1-5.jpg",
    ],
    location:"Calgary, Canada",
    slug: "functional-space-revamp",
    clientName:"Bennett House",
    date:"21 January, 2026"
  },

  {
    id:5,
    title: "Contemporary Bedroom Redesign",
    category:"bedroom",
    images:[
      "/projects/Bedroom/P1/Bedroom-project-1-1.jpg",
      "/projects/Bedroom/P1/Bedroom-project-1-2.jpg",
      "/projects/Bedroom/P1/Bedroom-project-1-3.jpg",
      "/projects/Bedroom/P1/Bedroom-project-1-4.jpg",
      "/projects/Bedroom/P1/Bedroom-project-1-5.jpg",
    ],
    location:"Ottawa, Canada",
    slug: "contemporary-bedroom-redesign",
    clientName:"Walker Family Home",
    date:"3 February, 2026"
  },

  {
    id:6,
    title: "Premium Lounge & Reception Ceiling",
    category:"ceiling",
    images:[
      "/projects/Ceiling/p1/Ceiling-project-1-1.jpg",
      "/projects/Ceiling/p1/Ceiling-project-1-2.jpg",
      "/projects/Ceiling/p1/Ceiling-project-1-3.jpg",
      "/projects/Ceiling/p1/Ceiling-project-1-4.jpg",
      "/projects/Ceiling/p1/Ceiling-project-1-5.jpg",
    ],
    location:"Whitehorse, Canada",
    slug: "premium-lounge-reception-ceiling",
    clientName:"The Thompson Villa",
    date:"03 March, 2026"
  },
]