"use client";

import { useEffect, useState } from "react";
import SpiralIcon from "./SpiralIcon";

export default function RotatingSpiral({ className }: { className?: string }) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setRotation(window.scrollY * 0.3);
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <SpiralIcon
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
    />
  );
}
