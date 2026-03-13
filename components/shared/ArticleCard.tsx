import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import ImageShutter from "../animation/ImageShutter";

type ArticleProps = {
  id: number;
  title: string;
  desc: string;
  category: string;
  image: string;
  index?: number;
};

export default function ArticleCard({ article }: { article: ArticleProps }) {
  return (
    <Link href="#" className="w-full">
      <div className="bg-(--foreground)/8 p-8 rounded-3xl group">
        <div className="w-full space-y-7">
          <div className="relative">
            <ImageShutter className="w-full aspect-16/12 relative overflow-hidden rounded-2xl">
              <Image
                src={article.image}
                alt="Articles Image"
                fill
                sizes="100vw"
                className="object-cover group-hover:scale-130 transition-all duration-700 ease-in-out"
              />
            </ImageShutter>
            <span className="absolute top-4 left-4 inline-block bg-(--foreground) text-(--background) px-4 py-1.5 text-sm rounded-lg">
              {article.category}
            </span>
          </div>

          <div className="w-full">
            <h3 className="text-lg sm:text-2xl leading-tight mt-5 line-clamp-2">
              {article.title}
            </h3>
            <p className="line-clamp-3 mt-3 opacity-70">{article.desc}</p>

            <div className="mt-6 flex items-center justify-between">
              <span className="font-semibold">Read More</span>
              <div className="relative w-12 h-12 flex items-center justify-center bg-(--foreground) rounded-full text-3xl text-(--background) overflow-hidden">
                <span className="absolute duration-300 transition-all ease-in-out group-hover:translate-x-10">
                  <MdKeyboardArrowRight />
                </span>
                <span className="absolute duration-300 transition-all ease-in-out -translate-x-10 group-hover:translate-x-0">
                  <MdKeyboardArrowRight />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
