"use client";

import useClickOutside from "@/hooks/useClickOutside";
import { useRef, useState } from "react";

type OptionType = {
  key: string;
  value: string;
};

type SelectDropdownProps = {
  ariaLabel?: string;
  label?: string;
  required?: boolean;
  icon?: React.ReactNode;
  values: OptionType[];
  onChange?:(time:string)=>void;
};

export default function SelectDropdown({
  ariaLabel,
  label,
  required = false,
  icon,
  values,
  onChange
}: SelectDropdownProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<OptionType | null>(null);

  const optionsRef = useRef<HTMLDivElement>(null);

  useClickOutside(optionsRef, () => {
    setOpen(false);
  });

  const handleSelect = (option:OptionType)=>{
    onChange?.(option.value);
    setSelected(option);
    setOpen(false);
  }

  return (
    <div aria-label={ariaLabel} className="relative">
      {label && (
        <span className="text-base font-medium capitalize">
          {label}
          {required && <span className="text-red-500 ms-0.5">*</span>}
        </span>
      )}

      <button
        onClick={() => setOpen(!open)}
        type="button"
        className="w-full border border-(--black-border) text-sm px-4 h-10 rounded-md mt-2 cursor-pointer flex items-center gap-6"
      >
        {icon}
        {selected ? selected.key : "Select time"}
      </button>

      {/* DropDown */}
      {open && (
        <div
          ref={optionsRef}
          data-lenis-prevent
          className="absolute bottom-0 rounded-lg w-full shadow-lg bg-(--background) z-1 max-h-50 overflow-y-auto"
        >
          {values?.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelect(item)}
              className={`block w-full cursor-pointer text-left px-7 py-1.5 ${selected?.value === item.value ? "bg-(--foreground) text-(--background)" : "hover:bg-(--foreground)/50 hover:text-(--background)"}`}
            >
              {item.key}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
