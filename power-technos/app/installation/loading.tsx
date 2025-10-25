export default function Loading() {
  return (
    <div className="container py-16">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="card p-6 animate-pulse">
              <div className="h-4 w-1/2 bg-zinc-200/70 rounded" />
              <div className="mt-3 h-3 w-5/6 bg-zinc-200/60 rounded" />
              <div className="mt-2 h-3 w-2/3 bg-zinc-200/50 rounded" />
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <div className="aspect-[16/10] w-full bg-zinc-200/70 rounded-2xl" />
          <div className="flex gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-6 w-28 bg-zinc-200/60 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
