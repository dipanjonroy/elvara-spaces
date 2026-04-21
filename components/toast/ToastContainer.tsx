"use client";

import { gsap } from "@/lib/gsap";
import { useToastStore } from "@/store/ToastStore";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { MdCheckCircle } from "react-icons/md";
import { MdError } from "react-icons/md";
import { MdWarning } from "react-icons/md";

export default function ToastContainer() {
  const { toasts } = useToastStore();

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-1000">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  );
}

// ToastItems
type ToastType = "success" | "error" | "warning";

type ToastProp = {
  id: number;
  type: ToastType;
  msg: string;
};

function ToastItem({ toast }: { toast: ToastProp }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      {
        y: 100,
      },
      {
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
    );

    const timeOut = setTimeout(() => {
      gsap.to(ref.current, {
        y: 100,
        duration: 0.8,
        ease: "power3.in",
      });
    }, 2000);

    return () => clearTimeout(timeOut);
  }, []);

  const toastTypeClass =
    toast.type === "success"
      ? "text-green-500"
      : toast.type === "error"
        ? "text-red-500"
        : "text-yellow-500";
  return (
    <div
      ref={ref}
      className="w-full flex items-center gap-2 bg-(--background) text-(--foreground) rounded-full px-3 py-2 shadow-lg mt-2"
    >
      <div
        className={`w-5 h-5 rounded-full flex items-center justify-center ${toastTypeClass} text-4xl`}
      >
        {toast.type === "success" ? (
          <MdCheckCircle />
        ) : toast.type === "error" ? (
          <MdError />
        ) : (
          <MdWarning />
        )}
      </div>
      <span className="text-base">{toast.msg}</span>
    </div>
  );
}
