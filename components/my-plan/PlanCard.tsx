import Image from "next/image";
import Link from "next/link";
import type { Workout } from "@/types";

type PlanCardProps = {
  workout: Workout;
  isSavedTab?: boolean;
};

export default function PlanCard({
  workout,
  isSavedTab = false,
}: PlanCardProps) {
  return (
    <div className="rounded-xl border border-white/5 bg-[#0f0f0f] p-3 sm:p-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">

        {/* ---------- LEFT: Thumbnail ---------- */}
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-[#1a1a1a]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>

        {/* ---------- MIDDLE: Info ---------- */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold uppercase tracking-wide text-white">
            {workout.name}
          </h3>
          <p className="mt-0.5 text-xs text-zinc-500">{workout.equipment}</p>

          {/* Stats Row */}
          <div className="mt-2 flex items-center gap-4 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <ClockIcon />
              {workout.duration} min
            </span>
            <span className="flex items-center gap-1.5">
              <FireIcon />
              {workout.caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1.5">
              <StarIcon />
              {workout.rating}
            </span>
          </div>
        </div>

        {/* ---------- RIGHT: Actions ---------- */}
        <div className="flex items-center gap-2 shrink-0">

          {/* View Details */}
          <Link
            href={`/workout/${workout.id}`}
            className="rounded-full border border-zinc-700 px-4 py-2 text-xs font-medium text-white transition-colors hover:border-white"
          >
            View Details
          </Link>

          {/* Mark as Done (only on Today's Plan tab) */}
          {!isSavedTab && (
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#ccff00] px-4 py-2 text-xs font-bold text-black transition-transform hover:scale-[1.02]"
            >
              <CheckIcon />
              Mark as Done
            </button>
          )}

          {/* Remove (X) */}
          <button
            type="button"
            aria-label="Remove"
            className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-white/5 hover:text-white"
          >
            <CloseIcon />
          </button>

        </div>
      </div>
    </div>
  );
}

/* ---------- Icons ---------- */

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15 14" />
    </svg>
  );
}

function FireIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c1 4 5 6 5 11a5 5 0 0 1-10 0c0-2 1-3 1-3s1 1 1 2c1-2 2-3 2-5 0-1-1-2-1-2s2 1 2 5c0-3-1-5-1-6 0-1 1-2 1-2z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9 12 2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}