"use client";
import { motion } from "framer-motion";

export default function AnimatedSection({
  children, delay = 0
}: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px -10% 0px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      <div className="container">{children}</div>
    </motion.section>
  );
}
