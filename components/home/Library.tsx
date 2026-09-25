import WorkoutCard from "@/components/home/WorkoutCard";
import type { Workout } from "@/types";

export default function Library({ workouts }: { workouts: Workout[] }) {
  return (
    <section id="library" className="mx-auto  px-4 sm:px-6 lg:px-8 py-16">
      
      <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white">
        The Library
      </h2>
      <p className="mt-2 text-sm text-zinc-400">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>

    </section>
  );
}