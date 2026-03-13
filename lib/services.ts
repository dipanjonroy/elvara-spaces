type ServiceItem = {
  id: number;
  name: string;
  img: string;
  desc: string;
};

export const services: ServiceItem[] = [
  {
    id: 1,
    name: "Residential Interior",
    img: "/services/Residential_Service.jpg",
    desc: "We design comfortable, functional, and stylish home interiors tailored to your lifestyle. Every detail is planned to make your space feel truly like home.",
  },

  {
    id: 2,
    name: "Commercial Interior",
    img: "/services/Commercial_Service.jpg",
    desc: "We design commercial interiors that align with your brand and business goals. Every space is planned to improve workflow, productivity, and customer experience.",
  },

  {
    id: 3,
    name: "Kitchen Interior",
    img: "/services/Kitchen_Service.jpg",
    desc: "We design kitchens that are efficient, organized, and easy to use every day. Layout, storage, and finishes are planned to support your cooking habits.",
  },

  {
    id: 4,
    name: "Renovation & Remodeling",
    img: "/services/Renovation.jpg",
    desc: "We transform outdated spaces into functional, stylish interiors that fit your lifestyle. Every renovation is carefully planned, from layout changes to finishes, for lasting impact.",
  },

  {
    id: 5,
    name: "Bedroom Interior",
    img: "/services/Bedroom_Service.jpg",
    desc: "We design bedrooms that are cozy, functional, and tailored to your personal style. Every detail—from layout to lighting—is crafted to create a relaxing, inspiring space.",
  },

  {
    id: 6,
    name: "False Ceiling",
    img: "/services/False_ceiling_Service.jpg",
    desc: "We create false ceilings that enhance aesthetics, lighting, and spatial harmony. Every design is customized to complement your room and elevate its overall look.",
  },
];
