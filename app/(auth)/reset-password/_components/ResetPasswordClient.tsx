"use client";

import { toast } from "@/components/toast/Toast";
import Logo from "@/components/ui/Logo";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import ResetPasswordForm from "./ResetPasswordForm";

export default function ResetPasswordClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token");

  return (
    <section className="w-full h-svh bg-(--background)">
      <div className="w-full h-full container mx-auto flex items-center justify-center">
        <div className="w-full max-w-120 flex flex-col items-center justify-center">
          <Logo variant="black" />

          <div className="text-center mt-10 mb-8 lg:mb-11">
            <h2 className="text-2xl lg:text-4xl">Reset password</h2>
            <p>Please kindly set your new password.</p>
          </div>

          <ResetPasswordForm />
        </div>
      </div>
    </section>
  );
}
