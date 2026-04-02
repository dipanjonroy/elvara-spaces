import BlogDetailsContent from "./BlogDetailsContent";
import BlogDetailsSidebar from "./BlogDetailsSidebar";

export default function SingleBlogDetails() {
  return (
    <section className="relative bg-(--background) z-3 pt-20 md:pt-25 lg:pt-30">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/4 order-2 lg:order-1 lg:sticky lg:top-28 lg:h-fit">
            <BlogDetailsSidebar/>
          </div>
          <div className="w-full lg:flex-1 order-1 lg:order-2">
            <BlogDetailsContent/>
          </div>
        </div>
      </div>
    </section>
  );
}