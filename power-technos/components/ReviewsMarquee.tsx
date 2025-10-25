"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

type Review = { name: string; avatar?: string; text: string };

const REVIEWS: Review[] = [
  { name: "Ananya", text: "Seamless installation and clear savings. Great support!" },
  { name: "Rahul",  text: "Team handled permits and commissioning end-to-end." },
  { name: "Fatima", text: "Monitoring is handy; output is better than expected." },
  { name: "Vikram", text: "AMC is responsive. Very professional crew." },
  { name: "Divya",  text: "Neat wiring, quick work, clean documentation." },
  { name: "Joseph", text: "Hybrid inverter setup is rock solid during outages." },
];

const ROW = [...REVIEWS, ...REVIEWS]; // duplicate for seamless loop
const AVATAR_FALLBACK = "/globe.svg";

function Row({ reverse = false }: { reverse?: boolean }) {
  return (
    <motion.div
      className="flex gap-4 will-change-transform"
      initial={{ x: 0 }}
      animate={{ x: reverse ? 0 : "-50%" }}
      transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
      style={{ width: "200%" }}
    >
      {ROW.map((r, i) => (
        <div key={`${r.name}-${i}`} className="min-w-[320px] max-w-sm glass p-5">
          <div className="flex items-center gap-3">
            <Image
              src={r.avatar || AVATAR_FALLBACK}
              alt={r.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="font-medium">{r.name}</div>
          </div>
          <p className="text-sm text-zinc-600 mt-3">{r.text}</p>
        </div>
      ))}
    </motion.div>
  );
}

/** Pure marquee (no heading/padding). Use this inside your page <Section> */
export default function ReviewsMarquee() {
  return (
    <div className="relative overflow-hidden space-y-4">
      <Row />
      <Row reverse />
    </div>
  );
}

/** Optional helper if you *want* the heading included from the component */
export function ReviewsSection() {
  return (
    <Section title="What customers say" subtitle="Real clients, real savings.">
      <ReviewsMarquee />
    </Section>
  );
}

// --- local import to avoid circular
function Section(props: any) { return require("./Section").default(props); }
