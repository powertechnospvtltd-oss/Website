"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/installation", label: "Installation" },
  { href: "/battery-inverter", label: "Battery & Inverter" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);

  // logo fallback chain: /logo.png -> /logo.svg -> text-only
  const [logoSrc, setLogoSrc] = useState<string>("/logo.png");
  const [showImg, setShowImg] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // smooth page progress bar
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  const activeHref = useMemo(() => links.find((l) => l.href === pathname)?.href ?? null, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      {/* page scroll progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[rgb(var(--brand))]"
        style={{ scaleX: progress, transformOrigin: "0% 50%" }}
      />

      {/* glass header */}
      <div
        className={[
          "backdrop-blur supports-[backdrop-filter]:bg-white/55 bg-white/80 transition-all",
          atTop ? "border-b border-transparent" : "border-b border-zinc-200/80 shadow-sm",
        ].join(" ")}
      >
        <nav className="container h-16 md:h-20 flex items-center justify-between">
          {/* Brand (larger logo + safe fallbacks) */}
          <Link href="/" className="flex items-center gap-3 font-semibold group">
            <span className="relative inline-flex items-center justify-center">
              {/* subtle white disk so the mark is always visible */}
              <span className="absolute inset-0 rounded-full shadow-sm bg-white" />
              {showImg ? (
                <Image
                  src={logoSrc}
                  alt="Power Technos"
                  width={72}
                  height={72}
                  priority
                  className="relative h-12 w-12 md:h-14 md:w-14 rounded-full object-contain"
                  onError={() => {
                    if (logoSrc === "/logo.png") setLogoSrc("/logo.svg");
                    else setShowImg(false);
                  }}
                />
              ) : (
                // text fallback if neither PNG nor SVG exists
                <span className="relative h-12 w-12 md:h-14 md:w-14 rounded-full flex items-center justify-center text-sm md:text-base font-bold text-[rgb(var(--brand))]">
                  PT
                </span>
              )}
            </span>
            <span className="text-base md:text-lg tracking-tight">Power Technos</span>
            <span className="sr-only">Go to homepage</span>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-1 relative">
            {links.map((l) => {
              const isActive = l.href === activeHref;
              return (
                <li key={l.href} className="relative">
                  <Link
                    href={l.href}
                    className="px-3 py-2 rounded-xl text-sm hover:bg-zinc-100/80 transition-colors relative"
                  >
                    <span className="relative z-10">{l.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute left-2 right-2 bottom-1 h-[2px] rounded bg-[rgb(var(--brand))]"
                        transition={{ type: "spring", stiffness: 500, damping: 40 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
            <li className="ml-2 hidden lg:block text-sm text-zinc-600">+91 95449 83712</li>
            <li className="pl-1">
              <Link href="/contact" className="btn btn-primary">Get a Quote</Link>
            </li>
          </ul>

          {/* Mobile toggle (animated burger) */}
          <button
            className="md:hidden px-3 py-2 rounded-xl border hover:bg-zinc-50 active:scale-95 transition"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-4">
              <motion.span
                className="absolute left-0 top-0 w-5 h-[2px] bg-zinc-900"
                animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-[2px] bg-zinc-900"
                animate={{ opacity: open ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute left-0 bottom-0 w-5 h-[2px] bg-zinc-900"
                animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </button>
        </nav>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="drawer"
              id="mobile-menu"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="md:hidden border-t bg-white/95 backdrop-blur"
            >
              <div className="container py-3 flex flex-col gap-2">
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ y: 6, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.02 + i * 0.04, duration: 0.25 }}
                  >
                    <Link
                      href={l.href}
                      className={`block px-3 py-3 rounded-lg hover:bg-zinc-100 ${
                        pathname === l.href ? "bg-zinc-100" : ""
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ y: 6, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.02 + links.length * 0.04, duration: 0.25 }}
                  className="pt-1"
                >
                  <Link
                    href="/contact"
                    className="btn btn-primary w-full justify-center"
                    onClick={() => setOpen(false)}
                  >
                    Get a Quote
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
