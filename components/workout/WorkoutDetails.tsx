import Image from "next/image";
import type { Workout } from "@/types";
import { BookmarkAlt, CalendarEvent } from "@boxicons/react";

type WorkoutDetailsProps = {
    workout: Workout;
};

export default function WorkoutDetails({ workout }: WorkoutDetailsProps) {
    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#0f0f0f]">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>

                <div>

                    <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white leading-tight">
                        {workout.name}
                    </h1>

                    <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
                        {workout.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((group: string) => (
                            <span
                                key={group}
                                className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-bold uppercase tracking-wider text-black"
                            >
                                {group}
                            </span>
                        ))}
                    </div>

                    <div className="mt-8 overflow-hidden rounded-xl border border-white/5 bg-[#0f0f0f]">

                        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/5">
                            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                                Equipment
                            </span>
                            <span className="text-sm font-medium text-white">
                                {workout.equipment}
                            </span>
                        </div>

                        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/5">
                            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                                Difficulty
                            </span>
                            <span className="text-sm font-medium text-white">
                                {workout.difficulty}
                            </span>
                        </div>

                        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/5">
                            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                                Sets
                            </span>
                            <span className="text-sm font-medium text-white">
                                {workout.sets}
                            </span>
                        </div>

                        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/5">
                            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                                Reps
                            </span>
                            <span className="text-sm font-medium text-white">
                                {workout.reps}
                            </span>
                        </div>

                        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/5">
                            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                                Duration
                            </span>
                            <span className="text-sm font-medium text-white">
                                {workout.duration} min
                            </span>
                        </div>

                        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/5">
                            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                                Calories
                            </span>
                            <span className="text-sm font-medium text-white">
                                {workout.caloriesBurned} kcal
                            </span>
                        </div>

                        <div className="flex items-center justify-between px-5 py-3.5">
                            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                                Rating
                            </span>
                            <span className="text-sm font-medium text-white">
                                {workout.rating}
                            </span>
                        </div>

                    </div>

                    <div className="mt-8">
                        <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                            Instructions
                        </h2>
                        <ol className="mt-4 space-y-3">
                            {workout.instructions.map((step: string, index: number) => (
                                <li
                                    key={index}
                                    className="flex gap-3 text-sm text-zinc-400 leading-relaxed"
                                >
                                    <span className="shrink-0 text-zinc-500">
                                        {index + 1}.
                                    </span>
                                    <span>{step}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">

                        <button
                            type="button"
                            className="inline-flex items-center gap-2 rounded-md bg-[#ccff00] px-5 py-3 text-sm font-bold text-black transition-transform hover:scale-[1.02]"
                        >
                            <CalendarEvent />
                            Add to today&apos;s plan
                        </button>

                        <button
                            type="button"
                            className="inline-flex items-center gap-2 rounded-md border border-zinc-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white"
                        >
                            <BookmarkAlt />
                            Save for later
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}