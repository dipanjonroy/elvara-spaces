"use client";

import useClickOutside from "@/hooks/useClickOutside";
import { useModalStore } from "@/store/ModalStore";
import { useRef } from "react";
import Logo from "../ui/Logo";
import { MdOutlineClose } from "react-icons/md";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MobileMenu from "../navigation/MobileMenu";
import MainButton from "../ui/MainButton";

export default function MobileNavModal() {
  const { isModalOpen, modalId, closeModal } = useModalStore();

  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, closeModal);

  // useGSAP(
  //   () => {
  //     if (!modalRef.current) return;

  //     if (isModalOpen && modalId === "mobileMenu") {
  //       gsap.set(modalRef.current, { display: "block" });
  //       gsap.fromTo(
  //         modalRef.current,
  //         { x: "100%" },
  //         {
  //           x: "0%",
  //           duration: 0.4,
  //           delay: 0.3,
  //           ease: "power2.inOut",
  //         },
  //       );
  //     } else {
  //       gsap.to(modalRef.current, {
  //         x: "100%",
  //         duration: 0.4,
  //         ease: "power2.inOut",
  //         onComplete: () => {
  //           gsap.set(modalRef.current, { display: "none" });
  //         },
  //       });
  //     }
  //   },
  //   { dependencies: [isModalOpen, modalId] },
  // );

  return (
    <div
      ref={modalRef}
      className={`w-full h-screen bg-(--background) p-8 transform transition-transform duration-300 ease-in-out ${isModalOpen ? "translate-x-0":"translate-x-full"}`}
    >
      <div className="w-full h-full">
        <div className="flex items-center justify-between pb-4 border-b border-(--black-border) mb-8">
          <Logo variant="black" />

          <button type="button" onClick={closeModal} className="cursor pointer">
            <MdOutlineClose className="text-(--text-color) text-2xl" />
          </button>
        </div>

        <MobileMenu/>

        <div className="mt-10">
          <MainButton onClick={()=>console.log("Main button clicked")}/>
        </div>
      </div>
    </div>
  );
}
