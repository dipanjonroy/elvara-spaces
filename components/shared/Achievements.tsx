import Counter from "../animation/Counter";

type AchievementsProps = {
  className?: string;
  itemAlign?: "center" | "left" | "right";
  color?: "white" | "black";
};

export default function Achievements({
  className,
  itemAlign = "left",
  color,
}: AchievementsProps) {
  let alignment;

  if (itemAlign === "center") {
    alignment = "flex flex-col items-center";
  }

  return (
    <div
      className={`${className} ${color === "white" ? "text-(--background)" : "text-(--text-color)"}`}
    >
      <div className={alignment}>
        <Counter
          end={60}
          duration={2}
          suffix="+"
          className="font-bold text-4xl lg:text-6xl"
        />
        <span className="font-medium opacity-80">Projects Completed</span>
      </div>
      <span
        className={`w-full sm:w-px h-px sm:h-14 ${color === "white" ? "bg-(--background)" : "bg-(--foreground)"}`}
      />
      <div className={alignment}>
        <Counter
          end={10}
          duration={1}
          suffix="+"
          className="font-bold text-4xl lg:text-6xl"
        />
        <span className="font-medium opacity-80">Years of Experience</span>
      </div>
      <span
        className={`w-full sm:w-px h-px sm:h-14 ${color === "white" ? "bg-(--background)" : "bg-(--foreground)"}`}
      />
      <div className={alignment}>
        <Counter
          end={30}
          duration={1}
          suffix="+"
          className="font-bold text-4xl lg:text-6xl"
        />
        <span className="font-medium opacity-80">Awards & Recognition</span>
      </div>
    </div>
  );
}
