

import Image from "next/image";

interface MainButtonProps {
  className?: string;
  onClick: () => void;
}

export default function MainButton({ className, onClick }: MainButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-(--foreground) p-2 rounded-full cursor-pointer ${className}`}
    >
      <div className="flex items-center justify-between gap-3 2xl:gap-10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full overflow-hidden relative">
            <Image
              src="/consultant_avatar.jpg"
              alt="A woman consultant headshot"
              fill
              priority
              sizes="40px"
              className="object-cover"
            />
          </div>

          <div className="flex lg:hidden 2xl:flex flex-col items-start leading-tight">
            <span className="block text-sm font-semibold text-(--background)">
              Olivia Bennett
            </span>
            <span className="block text-xs font-thin text-(--background)/70">
              Lead Interior Designer
            </span>
          </div>
        </div>
        <span className="text-sm text-(--text-color) bg-(--background) px-4 py-2 rounded-full block">
          Book now
        </span>
      </div>
    </button>
  );
}
