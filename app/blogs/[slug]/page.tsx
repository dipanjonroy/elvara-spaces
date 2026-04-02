import { articlesData } from "@/lib/articles";
import SingleBlogHero from "./sections/SingleBlogHero";
import SingleBlogDetails from "./sections/SingleBlogDetails";
import RelatedBlogs from "./sections/SingleBlogDetails/RelatedBlogs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = articlesData.find(
    (item) => item.slug.toString() === slug.toString(),
  );

  if (!article) return;

  return {
    title: article.title,
    description: article.desc,
  };
}

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = articlesData.find(
    (item) => item.slug.toString() === slug.toString(),
  );

  if (!article) return;

  return (
    <>
      <SingleBlogHero data={article}/>
      <SingleBlogDetails/>
      <RelatedBlogs/>
    </>
  );
}
