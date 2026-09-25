"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import WorkoutCard from "@/components/shared/WorkoutCard";
import EmptyState from "@/components/my-plan/EmptyState";
import { usePlan } from "@/context/PlanContext";
import { useToast } from "@/context/ToastContext";
import { Clock, Hot, Star, Check, X, ArrowToBottomStroke } from "@boxicons/react";

type Tab = "plan" | "saved";
type SortKey = "duration" | "calories" | "rating";

export default function MyPlanPage() {
  const [activeTab, setActiveTab] = useState<Tab>("plan");
  const [sortBy, setSortBy] = useState<SortKey>("duration");

  const { plan, saved, removeFromPlan, removeFromSaved } = usePlan();
  const { showToast } = useToast();

  // ---------- List based on active tab ----------
  const currentList = activeTab === "plan" ? plan : saved;

  // ---------- Sort the current list ----------
  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "duration") return a.duration - b.duration;
    if (sortBy === "calories") return a.caloriesBurned - b.caloriesBurned;
    if (sortBy === "rating") return b.rating - a.rating; // high rating first
    return 0;
  });

  // ---------- Metrics (only from plan) ----------
  const totalExercises = plan.length;
  const totalMinutes = plan.reduce((sum, w) => sum + w.duration, 0);
  const totalCalories = plan.reduce((sum, w) => sum + w.caloriesBurned, 0);

  // ---------- Handlers ----------
  function handleDone(id: number) {
    removeFromPlan(id);
    showToast("Marked as done ✓");
  }

  function handleRemove(id: number) {
    if (activeTab === "plan") removeFromPlan(id);
    else removeFromSaved(id);
    showToast("Removed from " + (activeTab === "plan" ? "plan" : "saved"));
  }

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">

      {/* ---------- Header ---------- */}
      <div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold uppercase text-white">
          My Plan
        </h1>
        <p className="mt-2 text-sm text-zinc-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* ---------- Metrics Row ---------- */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/5 rounded-xl border border-white/5 bg-[#0f0f0f]">
        <div className="px-6 py-5">
          <p className="text-xs uppercase tracking-wider text-zinc-500">
            Exercises
          </p>
          <p className="mt-1 font-display text-4xl font-bold text-[#ccff00]">
            {totalExercises}
          </p>
        </div>

        <div className="px-6 py-5">
          <p className="text-xs uppercase tracking-wider text-zinc-500">
            Minutes
          </p>
          <p className="mt-1 font-display text-4xl font-bold text-white">
            {totalMinutes}
          </p>
        </div>

        <div className="px-6 py-5">
          <p className="text-xs uppercase tracking-wider text-zinc-500">
            Calories
          </p>
          <p className="mt-1 font-display text-4xl font-bold text-white">
            {totalCalories}
          </p>
        </div>
      </div>

      {/* ---------- Tabs + Sort Row ---------- */}
      <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        {/* Tabs */}
        <div className="inline-flex items-center gap-1 rounded-full border border-white/5 bg-[#0f0f0f] p-1">
          <button
            type="button"
            onClick={() => setActiveTab("plan")}
            className={`rounded-full px-5 py-2 text-xs font-semibold transition-colors ${
              activeTab === "plan"
                ? "bg-white text-black"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Today&apos;s Plan
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`rounded-full px-5 py-2 text-xs font-semibold transition-colors ${
              activeTab === "saved"
                ? "bg-white text-black"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-zinc-500">Sort By</span>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortKey)}
              className="appearance-none rounded-md border border-zinc-700 bg-[#0f0f0f] px-4 py-2 pr-9 text-xs font-medium text-white focus:outline-none focus:border-[#ccff00] cursor-pointer"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>

            <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400">
              <ArrowToBottomStroke size="sm" />
            </span>
          </div>
        </div>

      </div>

      {/* ---------- List / Empty State ---------- */}
      <div className="mt-6 space-y-3">
        {sortedList.length === 0 ? (
          <EmptyState />
        ) : (
          sortedList.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
              variant="plan"
              showViewDetails
              showDoneButton={activeTab === "plan"}
              showRemoveButton
              onDone={() => handleDone(workout.id)}
              onRemove={() => handleRemove(workout.id)}
            />
          ))
        )}
      </div>

    </section>
  );
}