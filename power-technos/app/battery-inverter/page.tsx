import Image from "next/image";
import Section from "@/components/Section";

export default function BatteryInverterPage(){
  return (
    <Section title="Battery & Inverter" subtitle="Supply, installation, configuration and service.">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="card">
          <h3 className="font-semibold">Battery Solutions</h3>
          <p className="text-sm text-zinc-600 mt-2">
            Lithium (LFP/NMC) and lead-acid options with proper BMS integration and safety.
          </p>
          <Image src="/g6.jpg" alt="Battery bank" width={1200} height={800} className="w-full h-auto mt-4 rounded-xl"/>
        </div>
        <div className="card">
          <h3 className="font-semibold">Inverter Services</h3>
          <p className="text-sm text-zinc-600 mt-2">
            On-grid, off-grid, hybrid inverters; sizing, firmware, replacements.
          </p>
          <Image src="/g3.jpg" alt="Inverter setup" width={1200} height={800} className="w-full h-auto mt-4 rounded-xl"/>
        </div>
      </div>
    </Section>
  );
}
