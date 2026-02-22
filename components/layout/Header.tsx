"use client";

import { useModalStore } from "@/store/ModalStore";
import MainMenu from "../navigation/MainMenu";
import Logo from "../ui/Logo";
import MainButton from "../ui/MainButton";
import { IoMenuOutline } from "react-icons/io5";
import MobileNavModal from "../modals/MobileNavModal";

export default function Header() {
  const { openModal } = useModalStore();
  return (
    <header className="fixed inset-x-0 z-10 top-4">
      <div className="container mx-auto">
        <div className="w-full ps-6 pe-3 py-3 bg-black/30 backdrop-blur-xs rounded-full border border-(--white-border)">
          <div className="w-full flex items-center justify-between">
            <Logo variant="white"/>
            <MainMenu />

            <MainButton
              className="hidden lg:inline-block"
              onClick={() => console.log("Open booking modal")}
            />

            {/* Mobilemenu open button */}
            <button
              onClick={() => openModal("mobileMenu", <MobileNavModal />, "right")}
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
