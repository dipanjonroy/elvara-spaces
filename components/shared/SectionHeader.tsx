import EntryBottom from "../animation/EntryBottom";

interface SectionHeaderProps {
  badge: string;
  title: string;
  align?: "center" | "right";
}

export default function SectionHeader({
  badge,
  title,
  align,
}: SectionHeaderProps) {
  let alignClass;

  if (align === "center") {
    alignClass = "items-center justify-center text-center";
  } else if (align === "right") {
    alignClass = "items-end justify-end text-right";
  } else {
    alignClass = "items-start justify-start text-left";
  }

  return (
    <EntryBottom>
      <div className={`flex flex-col ${alignClass} gap-2`}>
        <span className="inline-flex items-center gap-2 bg-(--foreground)/10 px-4 py-1.5 rounded-full">
          <span className="block w-1.5 h-1.5 rounded-full bg-(--foreground)" />
          <span className="text-sm">{badge}</span>
        </span>

        <h2>{title}</h2>
      </div>
    </EntryBottom>
  );
}
