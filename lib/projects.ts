type ProjectTypes = {
  id:number;
  title:string;
  category: string;
  images:string[];
  location: string;
}

export const projects: ProjectTypes[]=[
  {
    id:1,
    title: "Cozy Family Home Interior",
    category:"Residential",
    images:[
      "/projects/Residential/p1/Residential-project-1-1.jpg",
      "/projects/Residential/p1/Residential-project-1-2.jpg",
      "/projects/Residential/p1/Residential-project-1-3.jpg",
      "/projects/Residential/p1/Residential-project-1-4.jpg",
      "/projects/Residential/p1/Residential-project-1-5.jpg",
    ],
    location:"120 Front St W, Toronto, ON, Canada"
  },

  {
    id:2,
    title: "Luxury Retail Store Makeover",
    category:"Commercial",
    images:[
      "/projects/Commercial/p1/Commercial-project-1-1.jpg",
      "/projects/Commercial/p1/Commercial-project-1-2.jpg",
      "/projects/Commercial/p1/Commercial-project-1-3.jpg",
      "/projects/Commercial/p1/Commercial-project-1-4.jpg",
      "/projects/Commercial/p1/Commercial-project-1-5.jpg",
    ],
    location:"1055 Canada Pl, Vancouver, BC, Canada"
  },

  {
    id:3,
    title: "Modern Modular Kitchen",
    category:"Kitchen",
    images:[
      "/projects/Kitchen/p1/Kitchen-project-1-1.jpg",
      "/projects/Kitchen/p1/Kitchen-project-1-2.jpg",
      "/projects/Kitchen/p1/Kitchen-project-1-3.jpg",
      "/projects/Kitchen/p1/Kitchen-project-1-4.jpg",
      "/projects/Kitchen/p1/Kitchen-project-1-5.jpg",
    ],
    location:"1000 Rue De La Gauchetière O, Montreal, QC, Canada"
  },

  {
    id:4,
    title: "Functional Space Revamp",
    category:"Remodeling",
    images:[
      "/projects/Remodeling/p1/Remodeling-project-1-1.jpg",
      "/projects/Remodeling/p1/Remodeling-project-1-2.jpg",
      "/projects/Remodeling/p1/Remodeling-project-1-3.jpg",
      "/projects/Remodeling/p1/Remodeling-project-1-4.jpg",
      "/projects/Remodeling/p1/Remodeling-project-1-5.jpg",
    ],
    location:"800 9 Ave SW, Calgary, AB, Canada"
  },

  {
    id:5,
    title: "Contemporary Bedroom Redesign",
    category:"Bedroom",
    images:[
      "/projects/Bedroom/P1/Bedroom-project-1-1.jpg",
      "/projects/Bedroom/P1/Bedroom-project-1-2.jpg",
      "/projects/Bedroom/P1/Bedroom-project-1-3.jpg",
      "/projects/Bedroom/P1/Bedroom-project-1-4.jpg",
      "/projects/Bedroom/P1/Bedroom-project-1-5.jpg",
    ],
    location:"111 Wellington St, Ottawa, ON, Canada"
  },

  {
    id:6,
    title: "Premium Lounge & Reception Ceiling",
    category:"Ceiling",
    images:[
      "/projects/Ceiling/p1/Ceiling-project-1-1.jpg",
      "/projects/Ceiling/p1/Ceiling-project-1-2.jpg",
      "/projects/Ceiling/p1/Ceiling-project-1-3.jpg",
      "/projects/Ceiling/p1/Ceiling-project-1-4.jpg",
      "/projects/Ceiling/p1/Ceiling-project-1-5.jpg",
    ],
    location:"300 Main St, Whitehorse, YT, Canada"
  },
]