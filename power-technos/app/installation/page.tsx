// app/installation/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Section from "@/components/Section";

/* --------------------- content --------------------- */

const STEPS = [
  {
    t: "Site assessment & shading study",
    d: "Laser/phone LiDAR, roof scan, tilt/azimuth capture and horizon mask. Shading losses measured with seasonal impact.",
    time: "~1–2 hrs",
    out: "Assessment report & photo log",
  },
  {
    t: "System sizing & engineering design",
    d: "PVsyst yield estimate, stringing, conductor sizing, earthing & lightning protection. Structural checks for wind uplift.",
    time: "1–2 days",
    out: "Single-line diagram (SLD) & BOM",
  },
  {
    t: "Permits, net-metering, DISCOM approvals",
    d: "We prepare and file all forms, drawings and proofs. Follow-ups handled end-to-end.",
    time: "3–10 days*",
    out: "Approval & inspection slot",
  },
  {
    t: "Mounting, wiring, safety checks",
    d: "Anchors/rails fixed, panels mounted, MC4 terminations, DC/AC dressing, earthing & SPD. Safety toolbox talk daily.",
    time: "1–3 days",
    out: "Installed array & tidy rooftop",
  },
  {
    t: "Testing, commissioning, documentation",
    d: "IV-curve, insulation & polarity tests. Inverter config, Wi-Fi/monitoring, handover and user training.",
    time: "Half day",
    out: "Test reports & warranty kit",
  },
];

const HANDLES = [
  "Load study & ROI projection",
  "DISCOM/CEA compliant drawings",
  "Material logistics & site safety",
  "Scaffold/boom as required",
  "Monitoring app setup",
  "AMC & cleaning plans",
];

const GALLERY = ["/g5.jpg", "/g6.jpg", "/g2.jpg"];

/* --------------------- icons --------------------- */

const Check = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* --------------------- page --------------------- */

export default function InstallationPage() {
  return (
    <>
      {/* Main process */}
      <Section title="Installation Process" subtitle="Clear milestones, predictable timelines.">
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Timeline (numbered) */}
          <motion.ol
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {STEPS.map((s, i) => (
              <motion.li
                key={s.t}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative pl-12 pb-8 last:pb-0"
                aria-label={`Step ${i + 1}: ${s.t}`}
              >
                {/* line & dot */}
                <span className="absolute left-[1.15rem] top-5 h-[calc(100%-1.25rem)] w-[2px] bg-zinc-200" />
                <span className="absolute left-0 top-0 grid h-9 w-9 place-items-center rounded-full border text-sm font-semibold text-[rgb(var(--brand))]">
                  {i + 1}
                </span>

                <div className="card p-5 md:p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-semibold text-lg">{s.t}</h3>
                    <span className="badge border-zinc-200 text-zinc-600">{s.time}</span>
                  </div>
                  <p className="text-sm text-zinc-600 mt-2">{s.d}</p>
                  <div className="mt-3 text-xs text-zinc-700">
                    <span className="inline-flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-[rgb(var(--brand))]" />
                      <span className="font-medium">Output:</span> {s.out}
                    </span>
                  </div>
                </div>
              </motion.li>
            ))}

            {/* footnote */}
            <p className="mt-3 text-xs text-zinc-500">
              *Approval windows vary by DISCOM and inspection backlog.
            </p>
          </motion.ol>

          {/* Visual + chips + mini gallery */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl border shadow-sm">
              <Image
                src="/g5.jpg"
                alt="On-site installation in progress"
                width={1200}
                height={800}
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="pill border-zinc-200">Safety-first crew</span>
              <span className="pill border-zinc-200">Tier-1 hardware</span>
              <span className="pill border-zinc-200">DISCOM compliant</span>
              <span className="pill border-zinc-200">Monitoring app</span>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              {GALLERY.map((src, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.05 * i }}
                  className="overflow-hidden rounded-xl border"
                >
                  <Image
                    src={src}
                    alt={`Install detail ${i + 1}`}
                    width={600}
                    height={400}
                    sizes="(min-width: 1024px) 180px, 33vw"
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* What we handle */}
      <Section title="What we handle" subtitle="So you don’t have to chase vendors, approvals or paperwork.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {HANDLES.map((h, i) => (
            <motion.div
              key={h}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="glass p-4 flex items-start gap-3"
            >
              <Check className="mt-0.5 h-4 w-4 text-[rgb(var(--brand))]" />
              <p className="text-sm text-zinc-700">{h}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQs + CTA */}
      <Section title="Installation FAQs" subtitle="Short answers to common questions.">
        <div className="grid md:grid-cols-2 gap-4">
          <Faq
            q="How long does a typical 5–10 kW rooftop take?"
            a="Survey and design in 1–2 days, approvals vary by DISCOM (3–10 days). On-site install is usually 1–2 days, commissioning the same day."
          />
        <Faq
            q="Will drilling damage my roof?"
            a="We use correct anchors & sealants for RCC/tile/tin. All penetrations are sealed and water-tested, with workmanship warranty."
          />
          <Faq
            q="What tests are done before handover?"
            a="Insulation resistance, polarity, IV-curve (where applicable), string voltages, earthing & SPD checks, and live yield verification."
          />
          <Faq
            q="Do you set up the monitoring app?"
            a="Yes — owner login, alert thresholds and basic training are part of commissioning. We also offer AMC with periodic cleaning."
          />
        </div>

        <div className="mt-8">
          <Link href="/contact" className="btn btn-primary">Book a site visit</Link>
        </div>
      </Section>
    </>
  );
}

/* --------------------- helpers --------------------- */

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="card p-5 md:p-6">
      <summary className="cursor-pointer list-none font-medium">
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--brand))]" />
          {q}
        </span>
      </summary>
      <p className="text-sm text-zinc-600 mt-3">{a}</p>
    </details>
  );
}
