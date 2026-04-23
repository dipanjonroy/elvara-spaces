"use client";

type InputFieldProps = {
  label?: string;
  name: string;
  type?: "text" | "password" | "email" | "number";
  value?:string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  autoComplete?:string;
};

export default function InputField({
  label,
  name,
  type,
  value,
  placeholder,
  onChange,
  required=false,
  autoComplete
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={name} className="text-base font-medium capitalize">
          {label}
          {required && <span className="text-red-500 ms-0.5">*</span>}
        </label>
      )}
      <input
        type={type}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full border border-(--black-border) text-sm px-4 h-12 rounded-md focus:outline-none"
        autoComplete={autoComplete}
      />
    </div>
  );
}
