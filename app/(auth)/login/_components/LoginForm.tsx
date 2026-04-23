"use client";

import { toast } from "@/components/toast/Toast";
import InputField from "@/components/ui/InputField";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { isEmpty } from "@/helper/ValidateForm";
import { useLogin } from "@/query/auth/useLogin";
import { ApiResponse } from "@/types/ApiResponse";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { FaCheck } from "react-icons/fa6";
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";

type LoginForm = {
  user: string;
  password: string;
  isRemember: boolean;
};

export default function LoginForm() {
  const [openEye, setOpenEye] = useState<boolean>(false);

  const [formData, setFormData] = useState<LoginForm>({
    user: "",
    password: "",
    isRemember: false,
  });

  const { mutate, isPending } = useLogin();
  const router = useRouter();

  // Handle form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    if (isEmpty(formData.user)) {
      toast.error("Username or email is required.");
      return;
    }
    if (isEmpty(formData.password)) {
      toast.error("Password is required.");
      return;
    }

    // Login Query performed
    mutate(formData, {
      onSuccess: (data: ApiResponse) => {
        toast.success(data?.message || "Logged in successfully");
        setFormData({
          user: "",
          password: "",
          isRemember: false,
        });
        router.push("/dashboard")
      },
      onError: (error: Error) => {
        toast.error(error?.message || "Login failed!");
      },
    });
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="space-y-5">
        <InputField
          name="user"
          label="Username / Email"
          type="text"
          placeholder="your@email.com"
          required={true}
          value={formData.user}
          onChange={(e) => setFormData({ ...formData, user: e.target.value })}
        />

        <div className="relative w-full">
          <InputField
            name="password"
            label="Password"
            type={openEye ? "text" : "password"}
            placeholder="your password"
            required={true}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            autoComplete="current-password"
          />

          <button
            type="button"
            className="absolute right-5 top-1/2 translate-y-1/2 cursor-pointer"
            onClick={() => setOpenEye(!openEye)}
          >
            {openEye ? <LuEye /> : <LuEyeClosed />}
          </button>
        </div>
      </div>

      <div className="flex items-center mt-5 mb-8 justify-between">
        <label className="inline-flex items-center gap-2 cursor-pointer text-sm">
          <input
            type="checkbox"
            className="sr-only"
            checked={formData.isRemember}
            onChange={() =>
              setFormData({ ...formData, isRemember: !formData.isRemember })
            }
          />
          <div
            className={`w-4 h-4 lg:w-5 lg:h-5 rounded flex items-center justify-center ${formData.isRemember ? "bg-(--foreground)" : "border border-(--black-border)"}`}
          >
            {formData.isRemember && (
              <FaCheck className="text-(--background) text-xs" />
            )}
          </div>
          <span>Remember me</span>
        </label>

        <Link href="/forget-password" className="inline-block hover:underline text-sm">
          Forgot your password?
        </Link>
      </div>

      <PrimaryButton
        name="Log In"
        className="bg-(--foreground) text-(--background) w-full"
        iconClass="bg-(--background) text-(--foreground)"
        type="submit"
        loading={isPending}
      />
    </form>
  );
}
