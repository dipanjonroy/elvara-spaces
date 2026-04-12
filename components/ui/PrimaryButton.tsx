import { MdKeyboardArrowRight } from "react-icons/md";
import Spinner from "./Spinner";

interface PrimaryBtnProps {
  name: string;
  className?: string;
  iconClass?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  loading?: boolean;
}

export default function PrimaryButton({
  name,
  className,
  iconClass,
  type = "button",
  onClick,
  loading,
}: PrimaryBtnProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} inline-flex items-center gap-2 ps-6 pe-3 py-3 rounded-full cursor-pointer overflow-hidden group`}
    >
      {/* Text */}
      <span className="relative h-6 overflow-hidden">
        <span className="block text-base transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
          {name}
        </span>
        <span className="absolute inset-0 block text-base translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
          {name}
        </span>
      </span>

      {loading ? (
        <Spinner className="border-t-white" />
      ) : (
        <>
          {/* Arrow icon */}
          <span
            className={`relative w-6 h-6 rounded-full grid place-items-center overflow-hidden ${iconClass}`}
          >
            <span className="absolute transition-all duration-300 ease-in-out group-hover:translate-x-10">
              <MdKeyboardArrowRight className="text-xl" />
            </span>
            <span className="absolute transition-all duration-300 ease-in-out -translate-x-10 group-hover:translate-x-0">
              <MdKeyboardArrowRight className="text-xl" />
            </span>
          </span>
        </>
      )}
    </button>
  );
}
