export default function Stats(){
  const items = [
    {kpi: "10+ yrs", label: "Experience"},
    {kpi: "43k+", label: "Happy Customers"},
    {kpi: "500MW+", label: "Installed Capacity"},
    {kpi: "24/7", label: "Support"},
  ];
  return (
    <section className="py-10">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map(i=>(
          <div key={i.kpi} className="glass p-5 text-center">
            <div className="text-2xl font-semibold">{i.kpi}</div>
            <div className="text-xs text-zinc-600 mt-1">{i.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
