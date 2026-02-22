"use client";

import useClickOutside from "@/hooks/useClickOutside";
import { useModalStore } from "@/store/ModalStore";
import { useEffect, useRef } from "react";
import Logo from "../ui/Logo";
import { MdOutlineClose } from "react-icons/md";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MobileMenu from "../navigation/MobileMenu";
import MainButton from "../ui/MainButton";

export default function MobileNavModal() {
  const { isModalOpen, modalId, closeModal } = useModalStore();

  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, closeModal);

  useGSAP(() => {
    if (!modalRef.current) return;

    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      modalRef.current,
      { x: "100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 0.6,
        delay: 0.2,
        ease: "power3.inOut",
      },
    );

    tl.from(
      closeBtnRef.current,
      {
        rotate: -45,
        duration: 0.5,
        ease: "power3.inOut",
      },
      "-=0.1",
    );

    if (menuRef.current) {
      const menus = gsap.utils.toArray(
        menuRef.current.children,
      ) as HTMLElement[];

      tl.from(
        menus,
        {
          x: 50,
          opacity: 0,
          duration: 0.4,
          stagger: 0.1,
        },
        "-=0.3",
      );
    }

    if (btnRef.current) {
      tl.from(btnRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.3,
      });
    }

    if (isModalOpen && modalId === "mobileMenu") {
      tl.play();
    } else {
      tl.reverse();
    }
  }, [isModalOpen, modalId]);

  const handleCloseMenu = () => {
    if (!modalRef.current) return;

    gsap.to(modalRef.current, {
      x: "100%",
      opacity: 0,
      duration: 0.4,
      ease: "power3.inOut",
      onComplete: () => {
        closeModal();
      },
    });
  };

  return (
    <div
      ref={modalRef}
      className="w-full md:w-100 shrink-0 h-screen bg-(--background) p-8 shadow-md"
    >
      <div className="w-full h-full">
        <div className="flex items-center justify-between pb-4 border-b border-(--black-border) mb-8">
          <Logo variant="black" />

          <button
            ref={closeBtnRef}
            type="button"
            onClick={handleCloseMenu}
            className="cursor-pointer"
          >
            <MdOutlineClose className="text-(--text-color) text-3xl" />
          </button>
        </div>

        <MobileMenu ref={menuRef} />

        <div ref={btnRef} className="mt-20">
          <MainButton onClick={() => console.log("Main button clicked")} />
        </div>
      </div>
    </div>
  );
}
