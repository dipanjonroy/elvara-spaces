import EntryBottom from "@/components/animation/EntryBottom";
import ImageShutter from "@/components/animation/ImageShutter";
import Image from "next/image";

type StoryItemType = {
  badge: string;
  title: string;
  desc: string;
  textDirection: "left" | "right";
  image: string;
  isLast?:boolean;
};

export default function ProjectStoryItem({
  badge,
  title,
  desc,
  textDirection,
  image,
  isLast
}: StoryItemType) {
  const direction =
    textDirection === "right"
      ? "flex flex-col items-end text-right justify-end"
      : "";

  return (
    <div className={`${isLast ? "pt-10 lg:pt-20":"py-10 lg:py-20"} space-y-10`}>
      <EntryBottom>
        <div className={`${direction}`}>
          <div className="inline-flex items-center gap-2 bg-(--foreground)/10 px-4 py-1.5 rounded-full">
            <span className="block w-1.5 h-1.5 rounded-full bg-(--foreground)" />
            <span className="text-sm">{badge}</span>
          </div>
          <h2>{title}</h2>
          <p className="mt-3 w-full max-w-250 opacity-75">{desc}</p>
        </div>
      </EntryBottom>

      <ImageShutter className="w-full aspect-12/8 lg:aspect-12/6 xl:aspect-12/5 relative overflow-hidden rounded-3xl">
        <Image
          src={image}
          alt="Premium quality interior design"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </ImageShutter>
    </div>
  );
}
