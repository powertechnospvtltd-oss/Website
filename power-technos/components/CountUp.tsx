"use client";
import { useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = { to: number; prefix?: string; suffix?: string; duration?: number; className?: string };

export default function CountUp({ to, prefix = "", suffix = "", duration = 1.2, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 120, damping: 20 });
  const value = useTransform(spring, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, mv, to]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      <motion.span>{value}</motion.span>
      {suffix}
    </motion.span>
  );
}
