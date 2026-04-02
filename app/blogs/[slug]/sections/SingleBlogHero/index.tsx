"use client"

import HeroTextStagger from "@/components/animation/HeroTextStagger";
import ImageShutter from "@/components/animation/ImageShutter";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { gsap } from "@/lib/gsap";

type DataProps = {
  image: string;
  title: string;
}

export default function SingleBlogHero({data}:{data:DataProps}) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useGSAP(()=>{
    const ctx = gsap.context(()=>{
      if(!sectionRef.current || !headingRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger:{
          trigger: sectionRef.current,
          start:"50% 50%",
          scrub:true,
        }
      });

      tl.to(headingRef.current,{y:-160,ease:"none"},0);
      tl.to(sectionRef.current,{y:200,ease:"none"},0);
    });

    return ()=>ctx.revert();
  })

  return (
    <section ref={sectionRef} className="w-full h-svh 2xl:h-140">
      <ImageShutter className="w-full h-full relative">
        {/* Hero image */}
        <div className="absolute inset-0 left-0">
          <div className="w-full h-full relative">
            <Image
              src={data?.image}
              alt={data?.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="absolute bottom-14 inset-x-0 z-1">
          <div className="container mx-auto">
            <div ref={headingRef}>
              <HeroTextStagger
                text={data.title}
                delay={1.1}
                className="text-(--background)"
              />
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-(--foreground) to-transparent"/>
      </ImageShutter>
    </section>
  );
}