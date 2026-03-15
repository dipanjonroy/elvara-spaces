"use client";

import { ScrollSmoother } from "gsap/ScrollSmoother";
import { gsap } from "@/lib/gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollSmoother);

export default function SmoothProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const wrapper = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      wrapper: wrapper.current,
      content: content.current,
      smooth: 1.2,
      effects: true,
      smoothTouch: 0.1,
    });

    return () => {
      smoother.kill(); // cleanup
    };
  }, []);

  return (
    <div className="overflow-hidden" ref={wrapper}>
      <div ref={content}>{children}</div>
    </div>
  );
}
