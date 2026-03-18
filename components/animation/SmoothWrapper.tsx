"use client"

import ReactLenis from "lenis/react";

export default function SmoothWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ReactLenis root options={{lerp:0.05}}>{children}</ReactLenis>;
}
