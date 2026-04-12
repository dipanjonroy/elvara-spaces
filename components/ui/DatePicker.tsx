"use client";
import { useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import { SlCalender } from "react-icons/sl";
import "react-day-picker/style.css";
import useClickOutside from "@/hooks/useClickOutside";

type DatePickerProps = {
  select?: Date | undefined;
  setDate?: (date: Date) => void;
};

export default function DatePicker({ select, setDate }: DatePickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(select);
  const [open, setOpen] = useState<boolean>(false);
  const calenderRef = useRef<HTMLDivElement>(null);

  const today = new Date();

  useClickOutside(calenderRef, () => {
    setOpen(false);
  });

  useEffect(() => {
    setDate?.(new Date());
  }, []);

  const handleSetDate = (date: Date | undefined) => {
    if (!date) return;
    setDate?.(date ?? new Date());
    setSelectedDate(date);
    setOpen(false);
  };

  // Disable dates
  const disabledDates = [
    {before:new Date()},
    (date:Date)=>date.getDay() === 0,
  ]

  return (
    <div className="relative inline-block w-full ">
      <label className="text-base font-medium capitalize">
        Select date:
        <span className="text-red-500 ms-0.5">*</span>
      </label>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full border border-(--black-border) text-sm px-4 h-10 rounded-md mt-2 cursor-pointer flex items-center gap-6"
      >
        <SlCalender />
        {selectedDate &&
          selectedDate.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
      </button>

      {/* Calender */}
      {open && (
        <div
          ref={calenderRef}
          className="absolute bottom-0 rounded-lg p-5 shadow-lg bg-(--background) z-1"
        >
          <DayPicker
            animate
            mode="single"
            selected={selectedDate}
            defaultMonth={selectedDate ?? new Date()}
            onSelect={handleSetDate}
            navLayout="around"
            startMonth={today}
            disabled={disabledDates}
            classNames={{
              selected: `bg-(--foreground) text-white border border-(--foreground) transition-none`,
              today: selectedDate
                ? "text-(--foreground) border border-(--foreground) transition-none"
                : "text-white",
              chevron: "fill-(--foreground)",
            }}
          />
        </div>
      )}
    </div>
  );
}
