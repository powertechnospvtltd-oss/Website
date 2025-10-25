"use client";
import Image from "next/image";
import Reveal from "./Reveal";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden section-tight pb-6 md:pb-8"> {/* tighter */}
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center gap-8 md:gap-10">
          <div>
            <Reveal delay={0.02}>
              <span className="pill border-zinc-200">Trusted solar specialists</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="h1 mt-2">
                Power Up Your Savings the <span className="text-[rgb(var(--brand))]">Green Way</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead">
                Unlock eco-conscious energy solutions—solar, batteries, inverters and hybrid systems—
                delivered, installed and supported by pros.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">Get Started</Link>
                <Link href="/services" className="btn border">See Services</Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} y={12}>
            <div className="relative">
              <Image
                src="/hero-visual.png"
                alt="Solar panels with wind turbines and a plant"
                width={1200}
                height={800}
                priority
                className="w-full h-auto drop-shadow-xl rounded-2xl"
              />
              {/* small fade so image blends without adding extra height */}
              <div className="pointer-events-none absolute inset-x-0 -bottom-5 h-14 bg-gradient-to-b from-transparent to-white" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
