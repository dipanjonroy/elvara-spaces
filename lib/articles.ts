type ArticleProps = {
  id: number;
  title: string;
  desc: string;
  category: string;
  image: string;
  slug:string;
};

export const articlesData: ArticleProps[] = [
  {
    id: 1,
    title: "How Smart Layout Planning Transforms Small Homes",
    desc: "Learn how thoughtful space planning can make compact homes feel open, functional, and comfortable without adding extra square footage.",
    category: "Small Space Design",
    image: "/articles/ArticleOne.jpg",
    slug:"how-smart-layout-planning-transforms-small-homes"
  },
  {
    id: 2,
    title: "What Most Renovations Get Wrong — And How to Avoid It",
    desc: "From budget overruns to poor material choices, discover the common renovation mistakes and how proper planning saves time and cost.",
    category: "Home Renovation",
    image: "/articles/ArticleTwo.jpg",
    slug: "what-most-renovations-get-wrong-and-how-to-avoid-it",
  },
  {
    id: 3,
    title: "Designing Kitchens That Actually Work for Daily Life",
    desc: "A practical guide to kitchen design focusing on workflow, storage, and everyday usability—not just visual appeal.",
    category: "Kitchen Design",
    image: "/articles/ArticleThree.jpg",
    slug: "designing-kitchens-that-actually-work-for-daily-life",
  },
];
