import { RefObject, useEffect } from "react";

export default function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  cb: () => void,
) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        cb();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, cb]);
}
