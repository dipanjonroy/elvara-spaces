import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type CounterProps = {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
};

export default function Counter({
  end,
  duration,
  suffix,
  className,
}: CounterProps) {
  const counterRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!counterRef.current) return;

    const counter = { value: 0 };

    gsap.to(counter, {
      value: end,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent =
            Math.floor(counter.value) + (suffix ?? "");
        }
      },
      scrollTrigger: {
        trigger: counterRef.current,
        start: "top 95%",
        toggleActions: "play none none reverse",
      },
    });
  });
  return (
    <div ref={counterRef} className={className}>
      0{suffix}
    </div>
  );
}
