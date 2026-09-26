export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      
      {/* Spinner */}
      <div className="relative h-14 w-14">
        <div className="absolute inset-0 rounded-full border-4 border-white/10" />
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#ccff00]" />
      </div>

      {/* Text */}
      <p className="mt-6 text-sm font-medium uppercase tracking-widest text-zinc-400">
        Loading workouts…
      </p>

    </div>
  );
}