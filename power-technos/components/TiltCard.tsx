"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ReactNode } from "react";

export default function TiltCard({ children }: { children: ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useTransform(y, [-40, 40], [8, -8]);
  const ry = useTransform(x, [-40, 40], [-8, 8]);

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className="card will-change-transform"
    >
      {children}
    </motion.div>
  );
}
