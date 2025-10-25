import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import CountUp from "@/components/CountUp";
import TiltCard from "@/components/TiltCard";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AboutSection from "@/components/AboutSection";
import GalleryGrid from "@/components/GalleryGrid";
import ReviewsMarquee from "@/components/ReviewsMarquee";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* STATS – tighter */}
      <section className="section-tight">
        <div className="container">
          <Reveal><h2 className="h2">Trusted by customers across India</h2></Reveal>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="card text-center">
              <CountUp to={10} suffix="+ yrs" className="text-3xl font-semibold" />
              <p className="text-sm text-zinc-600 mt-1">Experience</p>
            </div>
            <div className="card text-center">
              <CountUp to={43000} suffix="+ " className="text-3xl font-semibold" />
              <p className="text-sm text-zinc-600 mt-1">Happy Customers</p>
            </div>
            <div className="card text-center">
              <CountUp to={500} suffix="MW+" className="text-3xl font-semibold" />
              <p className="text-sm text-zinc-600 mt-1">Installed Capacity</p>
            </div>
            <div className="card text-center">
              <CountUp to={24} suffix="/7" className="text-3xl font-semibold" />
              <p className="text-sm text-zinc-600 mt-1">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT – normal */}
      <AboutSection />

      {/* SERVICES – normal */}
      <section className="section bg-zinc-50">
        <div className="container">
          <Reveal><h2 className="h2">What We Do</h2></Reveal>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {[
              ["Solar PV Systems", "Rooftop & ground-mount, on-grid/off-grid, hybrid."],
              ["Energy Storage", "Lithium & lead-acid banks sized to your loads."],
              ["Inverters", "Supply, install, configure, and replace."],
              ["Operations & Maintenance", "Performance audits, cleaning, preventive care."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={0.05 * i}>
                <TiltCard>
                  <h3 className="font-semibold text-lg">{t}</h3>
                  <p className="text-sm text-zinc-600 mt-2">{d}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY – normal */}
      <section className="section">
        <div className="container">
          <Reveal><h2 className="h2">Recent Installations</h2></Reveal>
          <Reveal delay={0.08}><GalleryGrid /></Reveal>
        </div>
      </section>

      {/* REVIEWS – tight */}
      <section className="section-tight bg-zinc-50">
        <div className="container">
          <Reveal><h2 className="h2">What customers say</h2></Reveal>
          <div className="mt-5"><ReviewsMarquee /></div>
        </div>
      </section>

      {/* CTA – tight, still has presence */}
      <section className="section-tight relative overflow-hidden">
        <div className="container">
          <Reveal><h2 className="h2">Start your solar journey today</h2></Reveal>
          <Reveal delay={0.08}><p className="lead">Free site assessment and savings estimate in 24 hours.</p></Reveal>
          <Reveal delay={0.14}><CTA /></Reveal>
        </div>

        {/* soft shapes */}
        <Parallax from={-20} to={30} className="pointer-events-none absolute -left-10 top-6">
          <div className="h-28 w-28 rounded-full bg-[rgb(var(--brand))]/10 blur-2xl" />
        </Parallax>
        <Parallax from={30} to={-20} className="pointer-events-none absolute right-0 bottom-4">
          <div className="h-40 w-40 rounded-full bg-emerald-300/20 blur-2xl" />
        </Parallax>
      </section>

      <FloatingWhatsApp />
    </>
  );
}
