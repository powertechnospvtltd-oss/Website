// components/Footer.tsx
"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { h: "/services", l: "Services" },
  { h: "/installation", l: "Installation" },
  { h: "/battery-inverter", l: "Battery & Inverter" },
  { h: "/contact", l: "Contact" },
];

const contact = [
  { l: "+91 95449 83712", h: "tel:+919544983712" },
  { l: "powertechnospvtltd@gmail.com", h: "mailto:powertechnospvtltd@gmail.com" },
  { l: "Wayanad, Kerala", h: "https://maps.google.com", ext: true },
];

export default function Footer() {
  return (
    <footer className="relative mt-16 border-t bg-white">
      {/* gentle wave accent */}
      <svg
        aria-hidden
        className="absolute -top-8 left-0 w-full h-8 text-[rgb(var(--brand))]/10"
        viewBox="0 0 1440 64" preserveAspectRatio="none"
      >
        <path fill="currentColor" d="M0,32L120,42.7C240,53,480,75,720,69.3C960,64,1200,32,1320,16L1440,0L1440,64L1320,64C1200,64,960,64,720,64C480,64,240,64,120,64L0,64Z"/>
      </svg>

      <div className="container pt-10 pb-6">
        <div className="grid md:grid-cols-3 gap-10">
          {/* brand */}
          <motion.div
            initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: .5, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Power Technos" className="h-7 w-7 rounded" />
              <span className="font-semibold">Power Technos</span>
            </div>
            <p className="text-sm text-zinc-600 mt-3">
              Clean, reliable energy for homes & businesses — survey to commissioning,
              with long-term support.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {/* socials (inline SVG so no extra libs) */}
              <a href="https://facebook.com" target="_blank" className="rounded-full p-2 border hover:bg-zinc-50" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.7V12h2.7V9.7c0-2.7 1.6-4.2 4-4.2 1.2 0 2.4.2 2.4.2v2.6h-1.4c-1.4 0-1.9.9-1.9 1.8V12h3.2l-.5 2.9h-2.7v7A10 10 0 0 0 22 12z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" className="rounded-full p-2 border hover:bg-zinc-50" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .2 2.5.5.6.3 1 .6 1.4 1.1.5.4.8.8 1.1 1.4.3.5.4 1.3.5 2.5.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 2-.5 2.5a3.6 3.6 0 0 1-1.1 1.4 3.6 3.6 0 0 1-1.4 1.1c-.5.3-1.3.4-2.5.5-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-2-.2-2.5-.5a3.6 3.6 0 0 1-1.4-1.1 3.6 3.6 0 0 1-1.1-1.4c-.3-.5-.4-1.3-.5-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-2 .5-2.5.3-.6.6-1 1.1-1.4.4-.5.8-.8 1.4-1.1.5-.3 1.3-.4 2.5-.5C8.4 2.2 8.8 2.2 12 2.2m0 1.8c-3.2 0-3.6 0-4.8.1-.9.1-1.3.2-1.6.3-.4.2-.6.3-.9.6-.3.3-.5.5-.6.9-.1.3-.3.7-.3 1.6-.1 1.2-.1 1.6-.1 4.8s0 3.6.1 4.8c.1.9.2 1.3.3 1.6.2.4.3.6.6.9.3.3.5.5.9.6.3.1.7.3 1.6.3 1.2.1 1.6.1 4.8.1s3.6 0 4.8-.1c.9-.1 1.3-.2 1.6-.3.4-.2.6-.3.9-.6.3-.3.5-.5.6-.9.1-.3.3-.7.3-1.6.1-1.2.1-1.6.1-4.8s0-3.6-.1-4.8c-.1-.9-.2-1.3-.3-1.6-.2-.4-.3-.6-.6-.9-.3-.3-.5-.5-.9-.6-.3-.1-.7-.3-1.6-.3-1.2-.1-1.6-.1-4.8-.1m0 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5m0 7.4A2.9 2.9 0 1 0 9.1 12 2.9 2.9 0 0 0 12 14.9m4.6-8.7a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2z"/></svg>
              </a>
              <a href="https://www.linkedin.com" target="_blank" className="rounded-full p-2 border hover:bg-zinc-50" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 6.94A2.44 2.44 0 1 1 4.5 4.5a2.44 2.44 0 0 1 2.44 2.44zM7.16 9.24H4.72V19.5h2.44zM12.62 9.24h-2.4V19.5h2.4v-5.3c0-1.4.83-2.29 2.05-2.29 1.18 0 1.96.8 1.96 2.22v5.37h2.4v-5.93c0-2.7-1.46-3.96-3.4-3.96-1.58 0-2.28.88-2.67 1.5h-.04z"/></svg>
              </a>
            </div>
          </motion.div>

          {/* links */}
          <motion.div
            initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: .5, delay: .06 }}
          >
            <h4 className="font-semibold">Explore</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {links.map(x=>(
                <li key={x.h}><Link className="text-zinc-600 hover:underline" href={x.h}>{x.l}</Link></li>
              ))}
            </ul>
          </motion.div>

          {/* contact */}
          <motion.div
            initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: .5, delay: .12 }}
          >
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {contact.map(c=>(
                <li key={c.l}>
                  <a className="text-zinc-600 hover:underline" href={c.h} target={c.ext ? "_blank" : undefined} rel="noreferrer">{c.l}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-10 pt-6 border-t text-xs text-zinc-500 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Power Technos. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/terms" className="hover:underline">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
