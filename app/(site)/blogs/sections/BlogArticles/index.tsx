import ArticleCard from "@/components/shared/ArticleCard";
import { articlesData } from "@/lib/articles";

export default function ArticlesSection() {
  return (
    <section className="pt-20 md:pt-25 lg:pt-30 z-10 bg-(--background) relative">
      <div className="container mx-auto">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {
            articlesData.map((article)=>(
              <ArticleCard key={article.id} article={article}/>
            ))
          }
        </div>
      </div>
    </section>
  );
}