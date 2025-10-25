"use client";
import { motion } from "framer-motion";

export default function TextReveal({
  text, by = "word", className = "", delay = 0
}:{
  text: string;
  by?: "word" | "letter";
  className?: string;
  delay?: number;
}) {
  const parts = by === "word" ? text.split(" ") : text.split("");
  return (
    <div className={className} aria-label={text}>
      {parts.map((p, i) => (
        <motion.span
          key={i}
          initial={{ y: "1em", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: .45, ease: "easeOut", delay: delay + i * 0.03 }}
          className="inline-block will-change-transform"
        >
          {p}{by === "word" ? " " : ""}
        </motion.span>
      ))}
    </div>
  );
}
