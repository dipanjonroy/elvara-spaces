"use client";

import { useModalStore } from "@/store/ModalStore";
import MainMenu from "../navigation/MainMenu";
import Logo from "../ui/Logo";
import MainButton from "../ui/MainButton";
import { IoMenuOutline } from "react-icons/io5";
import MobileNavModal from "../modals/MobileNavModal";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { usePathname } from "next/navigation";

export default function Header() {
  const { openModal } = useModalStore();
  const sectionRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathName = usePathname();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    if (sectionRef.current) {
      tl.fromTo(
        navRef.current,
        {
          width: "40%",
        },
        {
          width: "100%",
          duration: 2,
          ease: "power3.out",
        },
      );
    }

    if (menuRef.current) {
      tl.fromTo(
        menuRef.current,
        { opacity: 0, display: "none" },
        { opacity: 1, display: "block", duration: 0.5, ease: "power3.inOut" },
        "-=0.3",
      );
    }

    ScrollTrigger.refresh();
  }, [pathName]);

  return (
    <header ref={sectionRef} className="fixed inset-x-0 z-10 top-4">
      <div className="container mx-auto flex items-center justify-center">
        <div
          ref={navRef}
          className="w-full ps-6 pe-3 py-3 bg-black/30 backdrop-blur-xs rounded-full border border-(--white-border)"
        >
          <div className="w-full flex items-center justify-between">
            <Logo variant="white" />

            <div ref={menuRef}>
              <MainMenu />
            </div>

            <MainButton
              className="hidden lg:inline-block"
              onClick={() => console.log("Open booking modal")}
            />

            {/* Mobilemenu open button */}
            <button
              onClick={() =>
                openModal("mobileMenu", <MobileNavModal />, "right")
              }
              className="lg:hidden cursor-pointer"
            >
              <IoMenuOutline className="text-(--background) text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
