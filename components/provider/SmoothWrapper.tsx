"use client";

import { useModalStore } from "@/store/ModalStore";
import ReactLenis, { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function LenisScrollReset() {
  const lenis = useLenis();
  const pathname = usePathname();

  const { isModalOpen } = useModalStore();

  useEffect(() => {
    if (!lenis) return;
    lenis.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  useEffect(()=>{
    if(isModalOpen){
      lenis?.stop()
    } else {
      lenis?.start()
    }
  },[lenis,isModalOpen])

  return null;
}

export default function SmoothWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis root options={{ lerp: 0.05 }}>
      <LenisScrollReset />
      {children}
    </ReactLenis>
  );
}
