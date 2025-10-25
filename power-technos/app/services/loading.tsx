// app/services/loading.tsx
export default function Loading() {
  return (
    <div className="container py-12">
      <div className="grid md:grid-cols-2 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="card overflow-hidden animate-pulse">
            <div className="aspect-[16/10] w-full rounded-xl bg-zinc-200/70" />
            <div className="mt-4 space-y-2">
              <div className="h-4 w-1/2 rounded bg-zinc-200/70" />
              <div className="h-3 w-3/4 rounded bg-zinc-200/60" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
