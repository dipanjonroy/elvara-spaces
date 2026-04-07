"use client";

import { useModalStore } from "@/store/ModalStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function ModalLayout() {
  const { isModalOpen, modal, align } = useModalStore();
  const overlayRef = useRef<HTMLDivElement>(null);

  let alignClass;

  if (align === "center") {
    alignClass = "flex items-center justify-center";
  } else if (align === "right") {
    alignClass = "md:flex md:items-end md:justify-end";
  } else {
    alignClass = "flex items-start justify-start";
  }

  useGSAP(() => {
    if (!overlayRef.current) return;

    if (isModalOpen) {
      gsap.set(overlayRef.current, { display: "block" });
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power1.in" },
      );
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power1.in",
        onComplete: () => {
          gsap.set(overlayRef.current, { display: "none" });
        },
      });
    }
  }, [isModalOpen]);

  // Disable body scrollbar
  useEffect(() => {
    if (isModalOpen) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [isModalOpen]);
  return (
    <div
      ref={overlayRef}
      style={{ display: "none" }}
      className="fixed inset-0 bg-black/40 backdrop-blur-xs z-100"
    >
      <div className={`w-full h-full ${alignClass}`}>
        <div>{modal}</div>
      </div>
    </div>
  );
}
