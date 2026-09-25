import Image from "next/image";
import Link from "next/link";
import type { Workout } from "@/types";
import { Clock, Hot, Star, Check, X } from "@boxicons/react";

type WorkoutCardProps = {
  workout: Workout;
  variant?: "library" | "plan";
  showViewDetails?: boolean;
  showDoneButton?: boolean;
  showRemoveButton?: boolean;
  onDone?: () => void;
  onRemove?: () => void;
};

export default function WorkoutCard({
  workout,
  variant = "library",
  showViewDetails = false,
  showDoneButton = false,
  showRemoveButton = false,
  onDone,
  onRemove,
}: WorkoutCardProps) {


  if (variant === "library") {
    return (
      <Link
        href={`/workout/${workout.id}`}
        className="group block overflow-hidden rounded-xl border border-white/5 bg-[#0f0f0f] transition-colors hover:border-[#ccff00]/30"
      >
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-4">
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#ccff00] px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black"
              >
                {group}
              </span>
            ))}
          </div>

          <h3 className="mt-3 text-lg font-bold uppercase tracking-wide text-white">
            {workout.name}
          </h3>

          <p className="mt-1 text-xs text-zinc-500">{workout.equipment}</p>

          <div className="mt-4 flex items-center gap-4 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <Clock />
              {workout.duration} min
            </span>
            <span className="flex items-center gap-1.5">
              <Hot />
              {workout.caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1.5">
              <Star />
              {workout.rating}
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="rounded-xl border border-white/5 bg-[#0f0f0f] p-3 sm:p-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">

        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-[#1a1a1a]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold uppercase tracking-wide text-white">
            {workout.name}
          </h3>
          <p className="mt-0.5 text-xs text-zinc-500">{workout.equipment}</p>

          <div className="mt-2 flex items-center gap-4 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <Clock />
              {workout.duration} min
            </span>
            <span className="flex items-center gap-1.5">
              <Hot />
              {workout.caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1.5">
              <Star />
              {workout.rating}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 flex-wrap">

          {showViewDetails && (
            <Link
              href={`/workout/${workout.id}`}
              className="rounded-full border border-zinc-700 px-4 py-2 text-xs font-medium text-white transition-colors hover:border-white"
            >
              View Details
            </Link>
          )}

          {showDoneButton && (
            <button
              type="button"
              onClick={onDone}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#ccff00] px-4 py-2 text-xs font-bold text-black transition-transform hover:scale-[1.02]"
            >
              <Check />
              Mark as Done
            </button>
          )}

          {showRemoveButton && (
            <button
              type="button"
              onClick={onRemove}
              aria-label="Remove"
              className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-white/5 hover:text-white"
            >
              <X />
            </button>
          )}

        </div>
      </div>
    </div>
  );
}