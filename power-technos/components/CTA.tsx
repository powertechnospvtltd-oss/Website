import Link from "next/link";
export default function CTA(){
  return (
    <section className="py-16">
      <div className="container glass p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">Start your solar journey today</h3>
          <p className="text-zinc-600 mt-1">Free site assessment and savings estimate in 24 hours.</p>
        </div>
        <Link href="/contact" className="btn btn-primary">Get a Free Quote</Link>
      </div>
    </section>
  );
}
