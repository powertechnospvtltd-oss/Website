'use client';

export default function Error({
  error,
  reset,
}: { error: Error; reset: () => void }) {
  console.error(error);
  return (
    <div className="container py-16">
      <h2 className="h2">Something went wrong</h2>
      <p className="lead mt-2 text-zinc-600">
        This section failed to load. Click retry – if it still fails, check the console for details.
      </p>
      <button onClick={reset} className="btn btn-primary mt-6">Retry</button>
    </div>
  );
}
