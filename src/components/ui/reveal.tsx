import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Starting offset in px; use negative x for slide-from-left */
  y?: number;
  x?: number;
}

/** Fades content up the first time it scrolls into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  x = 0,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      transition={{ duration: 0.6, delay, ease: [0.215, 0.61, 0.355, 1] }}
      // Start as soon as content enters the screen so nothing sits blank while scrolling
      viewport={{ once: true, margin: "0px 0px 60px 0px" }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
    >
      {children}
    </motion.div>
  );
}
