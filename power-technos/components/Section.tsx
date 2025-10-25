import Reveal from "./Reveal";
import clsx from "clsx";

export default function Section({
  id,
  title,
  subtitle,
  children,
  space = "normal", // "tight" | "normal" | "loose"
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  space?: "tight" | "normal" | "loose";
}) {
  return (
    <section
      id={id}
      className={clsx(
        space === "tight" && "section-tight",
        space === "normal" && "section",
        space === "loose" && "section-loose"
      )}
    >
      <div className="container">
        <Reveal><h2 className="h2">{title}</h2></Reveal>
        {subtitle && <Reveal delay={0.05}><p className="lead">{subtitle}</p></Reveal>}
        <Reveal delay={0.08}><div className="mt-6 grid gap-6">{children}</div></Reveal>
      </div>
    </section>
  );
}
