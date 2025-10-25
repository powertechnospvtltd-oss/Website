"use client";
import Image from "next/image";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

// ---- Counter that actually re-renders on change ----
function Counter({
  to = 100,
  suffix = "",
  delay = 0,
}: {
  to: number;
  suffix?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { margin: "-100px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (latest) => Math.round(latest));
  const [val, setVal] = useState(0);

  useMotionValueEvent(rounded, "change", (latest) => setVal(latest));

  useEffect(() => {
    if (inView) {
      animate(mv, to, { duration: 1.4, ease: "easeOut", delay });
    }
  }, [inView, mv, to, delay]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  return (
    <Section
      title="About Power Technos"
      subtitle="We design, deliver and maintain reliable, efficient solar solutions with a transparent process and measurable ROI."
    >
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* image */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border"
        >
          {/* use an existing asset from /public */}
          <Image
            src="/hero-visual.png"
            alt="Power Technos field team and systems"
            width={1200}
            height={800}
            className="w-full h-auto"
            priority
          />
        </motion.div>

        {/* copy + metrics */}
        <div className="grid gap-6">
          <p className="text-zinc-700">
            From residential rooftops to industrial plants, our engineers handle survey, design,
            permits, installation and after-sales care. We use tier-1 components and rigorous QA to
            keep systems performing year after year.
          </p>

          <div className="grid grid-cols-3 gap-3">
            <div className="glass p-5 text-center">
              <div className="text-2xl font-semibold">
                <Counter to={10} suffix="+" />
              </div>
              <div className="text-xs text-zinc-600 mt-1">Years</div>
            </div>
            <div className="glass p-5 text-center">
              <div className="text-2xl font-semibold">
                <Counter to={43} suffix="k+" />
              </div>
              <div className="text-xs text-zinc-600 mt-1">Happy Customers</div>
            </div>
            <div className="glass p-5 text-center">
              <div className="text-2xl font-semibold">
                <Counter to={500} suffix="MW+" />
              </div>
              <div className="text-xs text-zinc-600 mt-1">Installed</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// keep your local import workaround if you need it to avoid circular deps.
// If normal import works, prefer: `import Section from "@/components/Section";`
function Section(props: any) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  return require("./Section").default(props);
}
