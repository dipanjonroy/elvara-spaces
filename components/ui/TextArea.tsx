"use client";

type TextAreaProps = {
  label?: string;
  placeholder?: string;
  required?: boolean;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function TextArea({
  label,
  placeholder,
  required = false,
  name,
  onChange,
}: TextAreaProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={name} className="text-base font-medium capitalize">
          {label}
          {required && <span className="text-red-500 ms-0.5">*</span>}
        </label>
      )}

      <textarea
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full border border-(--black-border) text-sm px-4 py-3 rounded-md focus:outline-none resize-y h-40"
      />
    </div>
  );
}
