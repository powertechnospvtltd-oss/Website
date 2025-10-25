export default function ServicesTeaser(){
  const S = [
    {t:"Solar PV Systems", d:"Rooftop & ground-mount, on-grid/off-grid, hybrid."},
    {t:"Energy Storage", d:"Lithium & lead-acid banks sized to your loads."},
    {t:"Inverters", d:"Supply, install, configure, and replace."},
    {t:"Operations & Maintenance", d:"Performance audits, cleaning, preventive care."},
  ];
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="h2">What we do</h2>
        <p className="lead">Flexible packages for homes, SMEs, and industrial clients.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {S.map(s=>(
            <div key={s.t} className="card">
              <h3 className="font-semibold text-lg">{s.t}</h3>
              <p className="text-sm text-zinc-600 mt-2">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
