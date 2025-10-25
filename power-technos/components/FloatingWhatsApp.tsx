"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FloatingWhatsApp({
  number = "919544983712", // change to your full number w/o +
  text = "Hi! I'm interested in solar solutions.",
}: {
  number?: string;
  text?: string;
}) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
      className="fixed right-4 bottom-4 z-50"
    >
      <Link
        aria-label="Chat on WhatsApp"
        href={`https://wa.me/${number}?text=${encodeURIComponent(text)}`}
        target="_blank"
        className="group relative flex items-center gap-3 rounded-full bg-[#25D366] text-white pl-4 pr-5 py-3 shadow-lg"
      >
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/30" />
        <span className="relative">WhatsApp</span>
        <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20">✚</span>
      </Link>
    </motion.div>
  );
}
