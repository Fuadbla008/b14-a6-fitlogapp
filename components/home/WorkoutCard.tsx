import Image from "next/image";
import Link from "next/link";
import type { Workout } from "@/types";
import { Clock, Hot, Star } from "@boxicons/react";

type WorkoutCardProps = {
  workout: Workout;
};

export default function WorkoutCard({ workout }: WorkoutCardProps) {
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
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
