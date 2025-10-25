// app/services/page.tsx
import Section from "@/components/Section";
import ClientGrid from "./ClientGrid";

export default function ServicesPage() {
  return (
    <Section
      title="Our Services"
      subtitle="Packages for homes, SMEs and industrial sites."
    >
      <ClientGrid />
    </Section>
  );
}
