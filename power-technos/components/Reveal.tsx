"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;   // seconds
  y?: number;       // px slide distance
  once?: boolean;   // animate only first time in view
  className?: string;
};

/**
 * Safe Reveal:
 * - Renders plain content (no opacity 0) before hydration -> nothing disappears.
 * - After mount, switches to Framer Motion and animates on first scroll into view.
 */
export default function Reveal({ children, delay = 0, y = 18, once = true, className }: Props) {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // SSR + pre-hydration: just show the content (no hiding)
    return <div className={className} ref={ref}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      viewport={{ once, amount: 0.15, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </motion.div>
  );
}
