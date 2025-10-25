// app/services/ClientGrid.tsx
"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Props for the animated card
type CardProps = { t: string; d: string; img: string };

// Lazy-load the animated card on the client only
const ServiceCard = dynamic<CardProps>(
  () => import("./service-card").then((m) => m.ServiceCard),
  { ssr: false }
);

// simple skeletons (rendered immediately on client; avoids white flash)
function SkeletonCard() {
  return (
    <div className="card overflow-hidden animate-pulse">
      <div className="aspect-[16/10] w-full rounded-xl bg-zinc-200/70" />
      <div className="mt-4 space-y-2">
        <div className="h-4 w-1/2 rounded bg-zinc-200/70" />
        <div className="h-3 w-3/4 rounded bg-zinc-200/60" />
      </div>
    </div>
  );
}

function SkeletonGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}

const DATA: CardProps[] = [
  {
    t: "Solar PV Systems",
    d: "Rooftop & ground-mount, on/off-grid, hybrid with turnkey delivery.",
    img: "/g1.jpg",
  },
  {
    t: "Energy Storage",
    d: "Lithium & lead-acid banks sized to your critical loads + backup logic.",
    img: "/g2.jpg",
  },
  {
    t: "Inverters",
    d: "On-grid, off-grid & hybrid with neat wiring, protections and app setup.",
    img: "/g3.jpg",
  },
  {
    t: "Operations & Maintenance",
    d: "Audits, cleaning, preventive care, performance troubleshooting.",
    img: "/g4.jpg",
  },
];

export default function ClientGrid() {
  return (
    <Suspense fallback={<SkeletonGrid />}>
      <div className="grid md:grid-cols-2 gap-6">
        {DATA.map((s) => (
          <ServiceCard key={s.t} {...s} />
        ))}
      </div>
    </Suspense>
  );
}
