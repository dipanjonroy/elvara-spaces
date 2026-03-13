type ReviewsType = {
  id: number;
  clientName: string;
  address: string;
  review: string;
  rating: number;
  image: string;
};

export const reviewsData:ReviewsType[]=[
  {
    id:1,
    clientName: "Emily Carter",
    address:"Toronto, ON",
    review:"They transformed our home beautifully. The team understood our vision from the very first consultation. The final design feels elegant, functional, and perfectly suited to our lifestyle.",
    rating:5,
    image:"/reviews/Client-1.jpg",
  },

  {
    id:2,
    clientName: "James Walker",
    address:"Vancouver, BC",
    review:"Professional and easy to work with. The 3D visualizations helped us feel confident before the renovation started. The kitchen layout is now much more practical and modern.",
    rating:4,
    image:"/reviews/Client-2.jpg",
  },

  {
    id:3,
    clientName: "Olivia Bennett",
    address:"Calgary, AB",
    review:"Outstanding attention to detail. Our office redesign was handled with precision and care. The space now feels open, productive, and aligned with our brand identity.",
    rating:5,
    image:"/reviews/Client-3.jpg",
  },

  {
    id:4,
    clientName: "Liam Schneider",
    address:"Montreal, QC",
    review:"Clear communication throughout the project. We appreciated the transparent budgeting and timeline updates. The bedroom makeover turned out calm, stylish, and exactly what we hoped for.",
    rating:5,
    image:"/reviews/Client-4.jpg",
  },

  {
    id:5,
    clientName: "Sophie Laurent",
    address:"Ottawa, ON",
    review:"A smooth and stress-free renovation. From planning to handover, everything was well organized. The materials and finishes truly elevated the overall look of our apartment.",
    rating:5,
    image:"/reviews/Client-5.jpg",
  },

  {
    id:6,
    clientName: "Daniel Thompson",
    address:"Edmonton, AB",
    review:"Creative solutions and practical planning. They maximized our small living space without compromising on style. The result feels much larger and more functional.",
    rating:4,
    image:"/reviews/Client-6.jpg",
  },

  {
    id:7,
    clientName: "Isabella Rossi",
    address:"Winnipeg, MB",
    review:"Highly recommended for commercial interiors. Our retail showroom now looks premium and welcoming. Customers immediately noticed the difference after the redesign.",
    rating:5,
    image:"/reviews/Client-7.jpg",
  },

  {
    id:8,
    clientName: "Matthew Clark",
    address:"Halifax, NS",
    review:"Great balance between design and budget. They helped us choose materials that looked high-end while staying within our budget. The false ceiling and lighting made a huge impact.",
    rating:4,
    image:"/reviews/Client-8.jpg",
  },

  {
    id:9,
    clientName: "Charlotte Evans",
    address:"Victoria, BC",
    review:"Truly understood our lifestyle needs. The residential design feels personal and thoughtfully planned. Every corner of the home now has purpose and harmony.",
    rating:5,
    image:"/reviews/Client-9.jpg",
  },

  {
    id:10,
    clientName: "Lucas Meyer",
    address:"Whitehorse, YT",
    review:"Reliable and well-structured process. The timeline was respected, and the final handover was professional. Our workspace renovation improved both comfort and productivity.",
    rating:4,
    image:"/reviews/Client-10.jpg",
  },
]