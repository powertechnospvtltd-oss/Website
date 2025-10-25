// app/contact/page.tsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Form = {
  name: string;
  email: string;
  phone: string;
  location: string;
  capacity: string;
  roof: string;
  timeline: string;
  msg: string;
  consent: boolean;
  // honeypot for bots
  company?: string;
};

const CAPACITY = [
  "Home • 3–5 kW",
  "Villa • 5–10 kW",
  "Shop/Office • 3–10 kW",
  "Apartment/Hostel • 10–50 kW",
  "Factory/Warehouse • 10–100 kW+",
  "Not sure yet",
];

const ROOF = ["RCC (concrete)", "Metal/Tin sheet", "Clay tile", "Ground mount", "Mixed / not sure"];
const TIMELINE = ["ASAP", "1–3 months", "3–6 months", "Just exploring"];

export default function ContactPage() {
  const [f, setF] = useState<Form>({
    name: "",
    email: "",
    phone: "",
    location: "",
    capacity: "",
    roof: "",
    timeline: "",
    msg: "",
    consent: true,
    company: "", // honeypot
  });
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  const msgLeft = useMemo(() => Math.max(0, 800 - f.msg.length), [f.msg]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    // simple validation
    if (!f.name || !f.email || !f.msg) return setStatus("error");
    if (f.company) return; // bot filled hidden field

    alert("Thanks! We’ll reach out shortly.");
    setStatus("ok");
    // reset (keep consent checked)
    setF({
      name: "",
      email: "",
      phone: "",
      location: "",
      capacity: "",
      roof: "",
      timeline: "",
      msg: "",
      consent: true,
      company: "",
    });
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="h2">Contact Us</h1>
        <p className="lead">Tell us about your site and energy goals—we’ll respond within one business day.</p>

        <div className="mt-8 grid lg:grid-cols-3 gap-8">
          {/* FORM */}
          <form onSubmit={onSubmit} className="lg:col-span-2 card p-6 md:p-8 grid gap-5">
            {/* honeypot */}
            <input
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              value={f.company}
              onChange={(e) => setF({ ...f, company: e.target.value })}
              placeholder="Company"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <LabeledInput
                label="Full name"
                placeholder="Your name"
                value={f.name}
                onChange={(v) => setF({ ...f, name: v })}
                required
              />
              <LabeledInput
                type="email"
                label="Email"
                placeholder="you@example.com"
                value={f.email}
                onChange={(v) => setF({ ...f, email: v })}
                required
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <LabeledInput
                label="Phone (optional)"
                placeholder="+91 95449 83712"
                value={f.phone}
                onChange={(v) => setF({ ...f, phone: v })}
              />
              <LabeledInput
                label="Location / address"
                placeholder="Wayanad, Kerala"
                value={f.location}
                onChange={(v) => setF({ ...f, location: v })}
              />
              <LabeledSelect
                label="Timeline"
                value={f.timeline}
                onChange={(v) => setF({ ...f, timeline: v })}
                options={TIMELINE}
                placeholder="Select"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <LabeledSelect
                label="Capacity / size"
                value={f.capacity}
                onChange={(v) => setF({ ...f, capacity: v })}
                options={CAPACITY}
                placeholder="Select"
              />
              <LabeledSelect
                label="Roof type"
                value={f.roof}
                onChange={(v) => setF({ ...f, roof: v })}
                options={ROOF}
                placeholder="Select"
              />
              <div className="rounded-xl border px-4 py-3">
                <div className="text-xs text-zinc-600">Attachment (photos/drawings)</div>
                <input
                  type="file"
                  className="mt-1 w-full text-sm file:mr-3 file:rounded file:border file:bg-zinc-50 file:px-3 file:py-1"
                />
              </div>
            </div>

            <div className="rounded-xl border p-0.5">
              <textarea
                className="w-full rounded-[10px] px-4 py-3 min-h-[160px] outline-none"
                placeholder="Project details (rooftop area, DISCOM, single/three-phase, current bill, any questions)"
                value={f.msg}
                maxLength={800}
                onChange={(e) => setF({ ...f, msg: e.target.value })}
                required
              />
              <div className="px-3 pb-2 text-right text-[11px] text-zinc-500">{msgLeft} chars left</div>
            </div>

            <label className="flex items-start gap-3 text-sm text-zinc-700">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 accent-[rgb(var(--brand))]"
                checked={f.consent}
                onChange={(e) => setF({ ...f, consent: e.target.checked })}
              />
              <span>
                I agree to be contacted on the details provided and to the{" "}
                <Link href="#" className="underline">privacy policy</Link>.
              </span>
            </label>

            <div className="flex items-center gap-3">
              <button className="btn btn-primary">Send</button>
              {status === "error" && (
                <span className="text-sm text-red-600">Please fill the required fields.</span>
              )}
              {status === "ok" && (
                <span className="text-sm text-emerald-600">Thanks! We’ll reach out shortly.</span>
              )}
            </div>

            <p className="text-xs text-zinc-500">
              This demo form is client-side only. We can wire it to your Django API, a server action, or Formspree next.
            </p>
          </form>

          {/* SIDEBAR INFO */}
          <aside className="grid gap-6">
            <div className="card p-6">
              <div className="text-sm text-zinc-600">Call us</div>
              <a href="tel:+919544983712" className="mt-1 block text-lg font-semibold">
                +91 95449 83712
              </a>

              <div className="mt-4 text-sm text-zinc-600">Email</div>
              <a href="mailto:powertechnospvtltd@gmail.com" className="mt-1 block font-medium">
                powertechnospvtltd@gmail.com
              </a>

              <div className="mt-4 text-sm text-zinc-600">Address</div>
              <div className="mt-1 text-sm">Wayanad, Kerala</div>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="pill border-zinc-200">Free site survey</span>
                <span className="pill border-zinc-200">Tier-1 hardware</span>
                <span className="pill border-zinc-200">Net-metering support</span>
              </div>

              <Link
                href="https://wa.me/919544983712"
                target="_blank"
                className="mt-6 inline-flex w-full justify-center btn btn-primary"
              >
                Chat on WhatsApp
              </Link>
            </div>

            <div className="card p-6">
              <div className="font-medium">Office hours</div>
              <div className="mt-2 grid grid-cols-2 gap-y-1 text-sm">
                <span className="text-zinc-600">Mon–Fri</span> <span>9:00 – 18:00</span>
                <span className="text-zinc-600">Saturday</span> <span>9:00 – 14:00</span>
                <span className="text-zinc-600">Sunday</span> <span>Closed</span>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border">
              {/* Light map embed; swap src with your exact place URL if you have one */}
              <iframe
                title="Wayanad, Kerala"
                loading="lazy"
                className="h-64 w-full"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Wayanad,+Kerala&output=embed"
              />
            </div>

            <details className="card p-6">
              <summary className="cursor-pointer font-medium">What info helps us quote faster?</summary>
              <ul className="mt-3 list-disc pl-5 text-sm text-zinc-700 space-y-1">
                <li>Recent electricity bill (kWh, tariff, sanctioned load)</li>
                <li>Rooftop size & type (RCC, metal, tile) + photos if possible</li>
                <li>Single/three phase & desired backup (if any)</li>
                <li>Any constraints: shadow, height, access, structural approvals</li>
              </ul>
            </details>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ---------- small UI helpers ---------- */

function LabeledInput({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1">
      <span className="text-xs text-zinc-600">{label}{required ? " *" : ""}</span>
      <input
        className="border rounded-xl px-4 py-3"
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      />
    </label>
  );
}

function LabeledSelect({
  label,
  value,
  onChange,
  options,
  placeholder = "Select",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
}) {
  return (
    <label className="grid gap-1">
      <span className="text-xs text-zinc-600">{label}</span>
      <select
        className="border rounded-xl px-4 py-3 bg-white"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
