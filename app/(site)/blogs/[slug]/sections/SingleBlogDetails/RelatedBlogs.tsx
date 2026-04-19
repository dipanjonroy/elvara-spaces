import ArticleCard from "@/components/shared/ArticleCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { articlesData } from "@/lib/articles";

export default function RelatedBlogs() {
  return (
    <section className="pt-20 md:pt-25 lg:pt-30">
      <div className="container mx-auto">
        <SectionHeader
          title="Related Blogs"
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10">
          {
            articlesData.slice(0,3).map((article)=>(
              <ArticleCard key={article.id} article={article}/>
            ))
          }
        </div>
      </div>
    </section>
  );
}