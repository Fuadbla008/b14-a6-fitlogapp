import Link from "next/link";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-white/10 px-6 py-20 text-center">
      <h3 className="text-xl sm:text-2xl font-bold uppercase text-white">
        Nothing here yet
      </h3>
      <p className="mt-2 max-w-sm text-sm text-zinc-500">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-[#ccff00] px-6 py-2.5 text-sm font-bold text-black transition-transform hover:scale-[1.02]"
      >
        Go to workouts
      </Link>
    </div>
  );
}