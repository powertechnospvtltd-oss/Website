// app/services/service-card.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export function ServiceCard({
  t, d, img,
}: { t: string; d: string; img: string }) {
  return (
    <motion.div
      className="card overflow-hidden"
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -4 }}
    >
      <div className="relative overflow-hidden rounded-xl">
        <Image src={img} alt={t} width={1200} height={800} className="w-full h-auto" />
        <motion.div
          className="pointer-events-none absolute inset-0 bg-black/0"
          initial={false}
          whileHover={{ backgroundColor: "rgba(0,0,0,0.04)" }}
          transition={{ duration: 0.2 }}
        />
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-lg">{t}</h3>
        <p className="text-sm text-zinc-600 mt-2">{d}</p>
      </div>
    </motion.div>
  );
}
