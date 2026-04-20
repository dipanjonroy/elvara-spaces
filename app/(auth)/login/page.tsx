import Logo from "@/components/ui/Logo";
import type { Metadata } from "next";
import Image from "next/image";
import LoginForm from "./_components/LoginForm";

export const metadata: Metadata = {
  title: "Login | Elvara Spaces",
  description:
    "Learn more about our interior design studio, our story, and how we create spaces that reflect your personality.",
};

export default function page() {
  return (
    <div className="w-full h-svh bg-(--background)">
      <div className="w-full h-full lg:flex">
        <div className="hidden lg:block w-full h-full p-10">
          <div className="w-full h-full relative rounded-4xl overflow-hidden">
            <Image
              src="/Login-page.jpg"
              alt="Premium interior design"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 p-16 w-full max-w-190">
              <Logo variant="white" />
              <div className="mt-16">
                <h2 className="text-(--background) text-3xl xl:text-4xl 2xl:text-5xl">
                  Elvara Spaces — Where Luxury Interiors Meet Timeless Living
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex flex-col items-center justify-center p-10">
          <div className="w-full max-w-120 h-full flex flex-col items-center justify-center">
            <div className="lg:hidden mb-8">
              <Logo variant="black" />
            </div>
            <h2 className="text-center">Welcome Back</h2>
            <p className="mb-10 text-center">
              Enter your email and password to access your account
            </p>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
