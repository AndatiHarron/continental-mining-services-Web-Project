import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const NUMERIC_PREFIX = /^(\d+)(.*)$/;
const DURATION_S = 1.6;

/**
 * Counts a stat like "41 t" or "100%" up from zero when it scrolls into view.
 * Non-numeric values ("24/7", "Freetown") render unchanged.
 */
export function CountUp({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const match = value.includes("/") ? null : NUMERIC_PREFIX.exec(value);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const isNumeric = match !== null;
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!(isNumeric && inView) || reduceMotion) {
      return;
    }
    const controls = animate(0, target, {
      duration: DURATION_S,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(`${Math.round(latest)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, isNumeric, reduceMotion, target, suffix]);

  return (
    <span className={className} ref={ref}>
      {isNumeric ? display : value}
    </span>
  );
}
