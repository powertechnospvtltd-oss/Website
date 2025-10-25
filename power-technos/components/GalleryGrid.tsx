"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// images must exist under /public
const IMGS = ["g1.jpg","g2.jpg","g3.jpg","g4.jpg","g5.jpg","g6.jpg"];

/** Pure grid (no heading / no extra vertical spacing) */
export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
      {IMGS.map((src, i) => (
        <motion.div
          key={src}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="overflow-hidden rounded-2xl border bg-white"
        >
          <Image
            src={`/${src}`}
            alt={`Install ${i + 1}`}
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </motion.div>
      ))}
    </div>
  );
}

/** Optional helper if you ever want the heading inside the component */
export function GallerySection() {
  return (
    <Section title="Recent installs" subtitle="A glimpse of our on-site work.">
      <GalleryGrid />
    </Section>
  );
}

// local import to avoid circular
function Section(props: any) {
  return require("./Section").default(props);
}
