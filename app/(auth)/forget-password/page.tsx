import Logo from "@/components/ui/Logo";
import type { Metadata } from "next";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import EmailForm from "./_components/EmailForm";

export const metadata: Metadata = {
  title: "Reset password | Elvara Spaces",
};

export default function page() {
  return (
    <div className="w-full h-svh bg-(--background)">
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center p-10">
          <Logo variant="black" />

          <div className="text-center mt-10 mb-8 lg:mb-11">
            <h2 className="text-2xl lg:text-4xl">Forgot your password?</h2>
            <p>Enter your email so that we can send you password reset link.</p>
          </div>

          <EmailForm />

          <div className="mt-6">
            <Link href="/login" className="flex items-center gap-2">
              <span>
                <IoIosArrowBack className="text-xl" />
              </span>
              <span>Back to Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
