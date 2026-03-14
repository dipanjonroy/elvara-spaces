import EntryBottom from "@/components/animation/EntryBottom";
import ArticleCard from "@/components/shared/ArticleCard";
import SectionHeader from "@/components/shared/SectionHeader";
import LinkButton from "@/components/ui/LinkButton";
import { articlesData } from "@/lib/articles";

export default function BlogsSection() {
  return (
    <section className="py-20 md:py-25 lg:py-30">
      <div className="container mx-auto">
        <div className="space-y-4">
          <div className="w-full max-w-140">
            <SectionHeader
              badge="Blogs"
              title="Design Insights From Real Projects"
            />
          </div>

          <div className="flex flex-col lg:flex-row items-end justify-between gap-8">
            <EntryBottom>
              <p className="w-full max-w-140">
                Practical articles based on real design experience, covering
                planning, renovation, and everyday interior challenges.
              </p>
            </EntryBottom>

            <EntryBottom className="flex justify-start lg:justify-end">
              <LinkButton
                name="Explore More Articles"
                className="bg-(--foreground) text-(--background)"
                iconClass="bg-(--background) text-(--text-color)"
                path="#"
              />
            </EntryBottom>
          </div>

          {/* Blogs Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-14">
            {articlesData.slice(0, 3).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
