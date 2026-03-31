"use client";

import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

type MultiProps = {
  variant: "multi";
  selectedValues?: string[];
  onChange?: (val: string[]) => void;
};

type SingleProps = {
  variant: "single";
  selectedValue?: string;
  onChange?: (val: string) => void;
};

type BaseProps = {
  label?: string;
  options: { label: string; value: string }[];
  required?: boolean;
  className?: string;
};

type SelectChecklistProps = BaseProps & (MultiProps | SingleProps);

export default function SelectChecklist(props: SelectChecklistProps) {

  const {label,options,required,className} = props;

  const [multiSelected, setMultiSelected] = useState<string[]>(props.variant === "multi" ? props.selectedValues||[] :[]);
  const [singleSelected, setSingleSelected] = useState<string>(props.variant === "single" ? props.selectedValue || "" :"");


  const toggleActions = (value: string) => {
    if (props.variant === "multi") {
      let newSelected: string[];

      if (multiSelected.includes(value)) {
        newSelected = multiSelected.filter((val) => val !== value);
      } else {
        newSelected = [...multiSelected, value];
      }

      setMultiSelected(newSelected);

      props.onChange?.(newSelected);
    } else {
      let newSelected:string;
      if (singleSelected === value) {
        newSelected = "";
      } else {
        newSelected = value;
      }

      setSingleSelected(newSelected);
      props.onChange?.(newSelected);
    }
  };

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {label && (
        <span className="text-base font-medium capitalize">
          {label}
          {required && <span className="text-red-500 ms-0.5">*</span>}
        </span>
      )}

      <div className="grid grid-cols-2 gap-3">
        {options?.map((option, index) => {
          const isSelected =
            multiSelected.includes(option.value) ||
            option.value === singleSelected;

          return (
            <label
              key={index}
              className="inline-flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                className="sr-only"
                checked={isSelected}
                onChange={() => toggleActions(option.value)}
              />

              <div
                className={`w-5 h-5 rounded flex items-center justify-center ${isSelected ? "bg-(--foreground)" : "border border-(--black-border)"}`}
              >
                {isSelected && (
                  <FaCheck className="text-(--background) text-xs" />
                )}
              </div>

              <span>{option.label}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
