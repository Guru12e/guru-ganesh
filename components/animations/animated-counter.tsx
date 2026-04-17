"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string | number;
  duration?: number;
}

export function AnimatedCounter({
  value,
  duration = 2000,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const element = ref.current;
    if (!element) return;

    // Extract number from value (e.g., "12+" -> 12)
    const numericValue = parseInt(String(value).replace(/\D/g, ""), 10);
    const suffix = String(value).replace(/\d/g, "");

    if (isNaN(numericValue)) {
      element.textContent = String(value);
      return;
    }

    let currentValue = 0;
    const increment = numericValue / (duration / 16);
    let startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      currentValue = Math.floor(numericValue * progress);
      element.textContent = currentValue + suffix;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.textContent = numericValue + suffix;
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="tabular-nums">
      {value}
    </div>
  );
}
